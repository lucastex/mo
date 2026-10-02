"""Shared engine: fetch WordPress content and turn it into clean, text-only Markdown.

Each site has its own module (lar_montessori.py, montessori_action.py) that decides which
items to take, which site-specific edits to apply and where to write the result.
"""
import html
import json
import re
import shutil
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify as md

# ---------------------------------------------------------------- fetch

def get(url, retries=5):
    req = urllib.request.Request(urllib.parse.quote(url, safe=':/?&=%#'), headers={'User-Agent': 'Mozilla/5.0 (wp2md)'})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req) as r:
                return r.read().decode('utf-8')
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == retries - 1:
                raise
            time.sleep(10 * (attempt + 1))  # rate limited (Wix): back off and retry


def sitemap_urls(url):
    return [html.unescape(u) for u in re.findall(r'<loc>([^<]+)</loc>', get(url))]


def wp_items(api, endpoint='posts', **params):
    """Normalized items {slug, title, html, url} from a WordPress REST collection."""
    return [{'slug': slug_of(x), 'title': title_of(x), 'html': x['content']['rendered'], 'url': x['link']}
            for x in fetch_all(api, endpoint, _fields='slug,link,title,content', **params)]


def wix_items(site):
    """Normalized items from a Wix blog: post URLs from the blog sitemap, content from each post page."""
    items = []
    for url in sitemap_urls(f'{site}/blog-posts-sitemap.xml'):
        soup = BeautifulSoup(get(url), 'html.parser')
        content = soup.select_one('[data-hook="post-description"]')
        title = soup.select_one('[data-hook="post-title"]')
        if content is None:
            print('NO CONTENT FOUND:', url)
            continue
        items.append({'slug': urllib.parse.unquote(url.rstrip('/').split('/')[-1]),
                      'title': title.get_text(strip=True) if title else soup.title.get_text(strip=True),
                      'html': str(content), 'url': url})
    return items


def fetch_all(api, endpoint, **params):
    """All items of a WP REST collection (posts, pages...), following pagination."""
    items, page = [], 1
    while True:
        query = '&'.join(f'{k}={v}' for k, v in {'per_page': 100, 'page': page, **params}.items())
        req = urllib.request.Request(f'{api}/{endpoint}?{query}', headers={'User-Agent': 'wp2md'})
        with urllib.request.urlopen(req) as r:
            items += json.load(r)
            total_pages = int(r.headers.get('X-WP-TotalPages', 1))
        if page >= total_pages:
            return items
        page += 1


def slug_of(item):
    """File name = last segment of the public URL."""
    return item['link'].rstrip('/').split('/')[-1]


def title_of(item):
    return html.unescape(BeautifulSoup(item['title']['rendered'], 'html.parser').get_text()).strip()

# ---------------------------------------------------------------- HTML -> Markdown

MEDIA = ['iframe', 'video', 'audio', 'embed', 'object']
DROP_TAGS = ['figure', 'figcaption', 'img', 'script', 'style', 'source', 'noscript', 'form', 'svg'] + MEDIA
DROP_CLASSES = ['wp-caption', 'wp-caption-text', 'gallery', 'gallery-caption', 'tiled-gallery', 'wp-block-convertkit-form',
                'wp-block-jetpack-slideshow', 'wp-block-spacer', 'wp-block-embed', 'wp-block-gallery', 'wp-block-image',
                'jetpack-video-wrapper', 'wp-block-buttons', 'wp-block-button']


def html_to_markdown(rendered):
    """Returns (markdown, had_media). Removes images, captions, embeds, forms and layout residue."""
    s = BeautifulSoup(rendered, 'html.parser')
    had_media = bool(s.find_all(MEDIA) or s.select('.wp-block-embed, .jetpack-video-wrapper'))
    # tables holding images are classic caption layouts: drop them whole
    for t in s.find_all('table'):
        if t.find('img') or t.find(class_=re.compile('caption')):
            t.decompose()
    for t in s.find_all(DROP_TAGS):
        t.decompose()
    for c in DROP_CLASSES:
        for t in s.select('.' + c):
            t.decompose()
    for t in s.find_all(class_=re.compile(r'caption', re.I)):
        t.decompose()
    for t in s.find_all('table'):
        # a table left with no text is layout residue
        if not t.get_text(strip=True):
            t.decompose()
            continue
        # no <th>: promote first row to header so markdown has no empty header row
        if not t.find('th'):
            first = t.find('tr')
            if first:
                for td in first.find_all('td'):
                    td.name = 'th'
    body = md(str(s), heading_style='ATX', bullets='-', strip=['span', 'mark', 'font', 'u', 'small', 'big'])
    body = body.replace(' ', ' ').replace('​', '')
    body = re.sub(r'\[caption[^\]]*\].*?\[/caption\]', '', body, flags=re.S)
    body = re.sub(r'[ \t]+\n', '\n', body)
    body = re.sub(r'\n{3,}', '\n\n', body).strip()
    return body, had_media


def drop_repeated_body(body):
    """Some pages render the article twice in a row; keep only the first copy."""
    blocks = body.split('\n\n')
    for j in range(1, len(blocks)):
        if len(blocks[0]) > 60 and blocks[j:j + 3] == blocks[0:3]:
            n = 0
            while j + n < len(blocks) and n < j and blocks[j + n] == blocks[n]:
                n += 1
            return '\n\n'.join(blocks[:j] + blocks[j + n:])
    return body


def word_count(body):
    return len(re.sub(r'\(http[^)]*\)|<http[^>]*>', '', body).split())

# ---------------------------------------------------------------- per-post edits
# Ops (body is handled as paragraphs separated by a blank line):
#   ("sub", old, new)       exact replacement (must match once)
#   ("re", pattern, repl)   regex replacement (must match)
#   ("del", snippet)        delete the paragraph containing snippet
#   ("promo", snippet)      delete that paragraph and the testimonial quotes (">") right after it
#   ("promo_after", snip)   delete only the quotes right after the paragraph containing snip
#   ("trunc", snippet)      cut the paragraph from snippet to its end
#   ("cut", snippet)        delete from the paragraph containing snippet to the end of the post
#   ("from", snippet)       delete everything before the paragraph containing snippet

def d(*snips):
    return [('del', s) for s in snips]


def p(*snips):
    return [('promo', s) for s in snips]


def apply_ops(slug, body, ops):
    blocks = body.split('\n\n')

    def find(snip):
        idx = [i for i, b in enumerate(blocks) if snip in b]
        assert len(idx) == 1, (slug, snip, len(idx))
        return idx[0]

    def drop_quotes(i):
        while i < len(blocks) and blocks[i].startswith('>'):
            del blocks[i]

    for op in ops:
        kind = op[0]
        if kind in ('sub', 're'):
            text = '\n\n'.join(blocks)
            if kind == 'sub':
                assert text.count(op[1]) == 1, (slug, op[1])
                text = text.replace(op[1], op[2])
            else:
                text, n = re.subn(op[1], op[2], text, count=1)
                assert n == 1, (slug, op[1])
            blocks = text.split('\n\n')
        elif kind == 'del':
            del blocks[find(op[1])]
        elif kind == 'promo':
            i = find(op[1])
            del blocks[i]
            drop_quotes(i)
        elif kind == 'promo_after':
            drop_quotes(find(op[1]) + 1)
        elif kind == 'trunc':
            i = find(op[1])
            blocks[i] = blocks[i][:blocks[i].index(op[1])].rstrip()
        elif kind == 'cut':
            del blocks[find(op[1]):]
        elif kind == 'from':
            del blocks[:find(op[1])]
        else:
            raise ValueError(op)
    return '\n\n'.join(blocks)

# ---------------------------------------------------------------- final cleanup

SEP = re.compile(r'^[\s\-–—_\\~*]*$')


def cleanup(body, sign_line=None, credit=None, orphans=(), drop_contains=()):
    """Final pass: image credits, platform marks, orphan media intros, signatures, loose separators."""
    blocks = [b for b in body.split('\n\n')
              if not (credit and credit.match(b.strip()))
              and not any(m in b for m in drop_contains)
              and not b.strip().startswith(tuple(orphans))]
    if sign_line:
        # signatures: paragraphs made only of farewell lines near the end (e.g. before a PS),
        # and farewell lines closing the last paragraphs
        is_sign = lambda b: all(sign_line.match(l.strip()) for l in b.split('\n') if l.strip())
        blocks = [b for i, b in enumerate(blocks) if i == 0 or i < len(blocks) - 6 or not is_sign(b)]
        for i in range(max(1, len(blocks) - 4), len(blocks)):
            lines = blocks[i].split('\n')
            while len(lines) > 1 and sign_line.match(lines[-1].strip()):
                lines.pop()
            blocks[i] = '\n'.join(lines)
    while len(blocks) > 1 and SEP.match(blocks[-1].strip()):
        blocks.pop()
    out = []
    for b in blocks:
        if SEP.match(b.strip()) and (not out or SEP.match(out[-1].strip())):
            continue
        out.append(b)
    return '\n\n'.join(out)

# ---------------------------------------------------------------- output

def reset_dir(path):
    path = Path(path)
    shutil.rmtree(path, ignore_errors=True)
    path.mkdir(parents=True)
    return path


def write_post(folder, slug, title, body):
    (Path(folder) / f'{slug}.md').write_text(f'# {title}\n\n{body}\n')


def run(items, out, edits=None, no_content=(), sign_line=None, credit=None, orphans=(), drop_contains=(), leftover=None, clean=None):
    """Convert normalized items {slug, title, html, url} and write the ones with pedagogical content.

    leftover: regex that must not match the final text (references to the source site, authors...);
    items still matching are reported and NOT written, so a missing edit never leaks into the output.
    clean: site-specific function applied to the markdown before the per-post edits.
    """
    edits = edits or {}
    out = reset_dir(out)
    stats = {'kept': 0, 'no content': 0, 'leftover reference': 0}
    for x in items:
        slug = x['slug']
        body, had_media = html_to_markdown(x['html'])
        if clean:
            body = clean(body)
        body = apply_ops(slug, body, edits.get(slug, []))
        body = cleanup(body, sign_line, credit, orphans, drop_contains)
        words = word_count(body)
        if (had_media and words < 200) or words < 35 or slug in no_content:
            stats['no content'] += 1
            continue
        title = x['title']
        if leftover:
            prose = re.sub(r'\]\([^)]*\)|<https?://[^>]*>|https?://\S+', ' ', f'{title}\n{body}')
            found = sorted({m.group(0) for m in leftover.finditer(prose)})
            if found:
                stats['leftover reference'] += 1
                print('LEFTOVER REFERENCE:', slug, found)
                continue
        stats['kept'] += 1
        write_post(out, slug, title, body)
    print(f'{len(items)} items:', stats)
