"""English/French Montessori sites -> content/<name>/*.md

    python scripts/wp2md/blogs_en.py                 # all sites
    python scripts/wp2md/blogs_en.py happy-kids      # one site

Same goal as blogs_br.py: a knowledge base with only pedagogical content, no reference to the
source site, school, store, authors or to "this article/post". Items still mentioning a source
reference after the edits are reported and NOT written (see LEFTOVER).
"""
import json
import os
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup

import core
from blogs_en_edits import EDITS, NO_CONTENT

HERE = Path(__file__).resolve().parent
CONTENT = HERE.parents[1] / 'content'

# ---------------------------------------------------------------- sources

MS = 'https://www.montessoriservices.com/ideas-insights'


def montessori_services():
    """Every article listed in the categories of the "For Teachers & Schools" and "For Parents" menus."""
    soup = BeautifulSoup(core.get(MS), 'html.parser')
    categories = []
    for label in ('For Teachers & Schools', 'For Parents'):
        # climb from the section label to the closest container that holds its category links
        node = soup.find(string=lambda t: t and t.strip() == label)
        links = []
        while node is not None and len(links) < 3:
            node = node.parent
            links = [a['href'] for a in node.find_all('a', href=True) if a['href'].startswith(MS + '/')]
        categories += links
    categories = list(dict.fromkeys(categories))
    cat_slugs = {c.rsplit('/', 1)[1] for c in categories}
    articles = {}
    for c in categories:
        for slug in re.findall(r'ideas-insights/([a-z0-9-]+)', core.get(c)):
            if slug not in cat_slugs:
                articles.setdefault(slug, c)
    print(f'montessori-services: {len(categories)} categories, {len(articles)} articles')
    items = []
    for slug in articles:
        page = BeautifulSoup(core.get(f'{MS}/{slug}'), 'html.parser')
        content = page.select_one('.post-card__content')
        if content is None:
            print('NO CONTENT FOUND:', slug)
            continue
        title = re.split(r'\s*-\s*Ideas & Insights', page.title.get_text(strip=True))[0]
        items.append({'slug': slug, 'title': title, 'html': str(content), 'url': f'{MS}/{slug}'})
    return items


def happy_kids():
    """Squarespace blog: the JSON view of the collection, following pagination."""
    items, url = [], 'https://www.montessorihappykids.com/blog?format=json'
    while url:
        data = json.loads(core.get(url))
        for x in data['items']:
            items.append({'slug': x['urlId'], 'title': x['title'], 'html': x['body'],
                          'url': 'https://www.montessorihappykids.com' + x['fullUrl']})
        nxt = data.get('pagination', {}).get('nextPageUrl')
        url = f'https://www.montessorihappykids.com{nxt}&format=json' if nxt else None
    return items


def montessori_parent():
    api = 'https://themontessoriparent.com/wp-json/wp/v2'
    items = []
    for slug in ('prepared-environment', 'technology-learning'):
        items += core.wp_items(api, 'pages', slug=slug) or core.wp_items(api, 'posts', slug=slug)
    return items


def amshq():
    """amshq.org blocks automated requests (Cloudflare). The pages of the "About Montessori" menu were
    exported from a browser session (WP REST API content, reduced to text tags) into snapshots/amshq/,
    one file per page whose first line is <!-- url | title -->."""
    items = []
    for f in sorted((HERE / 'snapshots' / 'amshq').glob('*.html')):
        head, html = f.read_text().split('\n', 1)
        url, title = re.match(r'<!-- (\S+) \| (.*) -->', head).groups()
        items.append({'slug': f.stem, 'title': title, 'html': html, 'url': url})
    return items


SOURCES = {
    'montessori-services': montessori_services,
    'happy-kids': happy_kids,
    'montessori-parent': montessori_parent,
    'blooming': lambda: core.wp_items('https://bloomingtulipsmontessori.co.uk/wp-json/wp/v2', status='publish'),
    'amshq': amshq,
}

# ---------------------------------------------------------------- site-specific cleaning

def drop_blocks(body, pattern):
    return '\n\n'.join(b for b in body.split('\n\n') if not re.search(pattern, b.strip(), re.I))


def clean_montessori_services(body):
    body = re.sub(r'\[([^\]]*)\]\(/[^)]*\)', r'\1', body)                     # relative links into the store
    body = drop_blocks(body, r'^—\s*(by |originally published|adapted from|reprinted|the interviewer)')
    body = drop_blocks(body, r'^—.{0,200}(montessori services|irene baker)')     # author/editor bios
    body = re.sub(r'\((irene baker|ib)\)\s*', '', body, flags=re.I)              # interviewer label
    return body


def cut_from(body, pattern):
    """Delete from the first paragraph matching pattern to the end (site footers)."""
    blocks = body.split('\n\n')
    for i, b in enumerate(blocks):
        if i and re.search(pattern, b.strip(), re.I):
            return '\n\n'.join(blocks[:i])
    return body


def clean_happy_kids(body):
    return cut_from(body, r"^#+\s*(l[’']\s*)?[ée]cole montessori happy kids")   # school footer + contact link


def clean_montessori_parent(body):
    return re.sub(r'\[/?et\\?_pb\\?_[^\]]*\]', '', body)    # leftover Divi page-builder shortcodes


def clean_amshq(body):
    # navigation/promotion sections that close the pages
    body = cut_from(body, r'^#+\s*(related pages|connect with us|still have questions|dive deeper into|from the \*?montessori life|why (an ams school|look for ams))')
    body = drop_blocks(body, r'^#*\s*\**(looking for a montessori school in your area\?|see the classroom in action|read more|learn more about montessori|help topics|all)\**$')
    # sentences that only send the reader to another page or to a course
    body = re.sub(r'[^.!?\n]*\b(visit this page|visit our|go here|check out this page|click here|find the specific research citations here|sign up for our course|learn more about [^.]*\b(here|page))[^.!?\n]*[.!?]\s?', '', body, flags=re.I)
    return body


CLEAN = {
    'montessori-services': clean_montessori_services,
    'happy-kids': clean_happy_kids,
    'amshq': clean_amshq,
    'montessori-parent': clean_montessori_parent,
}

OWN_DOMAINS = {
    'montessori-services': r'montessoriservices\.com|forsmallhands\.com',
    'happy-kids': r'montessorihappykids\.com',
    'montessori-parent': r'themontessoriparent\.com',
    'blooming': r'bloomingtulipsmontessori\.co\.uk',
    'amshq': r'amshq\.org',
}


def unlink(body, domains):
    """Links to the source site or its store keep only their text."""
    return re.sub(r'\[([^\]]*)\]\((?:https?://)?(?:www\.)?(?:' + domains + r')[^)]*\)', r'\1', body)


def site_clean(name):
    def clean(body):
        body = CLEAN[name](body) if name in CLEAN else body
        return unlink(body, OWN_DOMAINS[name])
    return clean

# ---------------------------------------------------------------- final checks

LEFTOVER_COMMON = r"""
    \b(this|our|my)\ (blog|article|post|newsletter|website|site|catalog|catalogue|store|shop)\b | \bin\ this\ (article|post|blog)\b |
    \b(ce|cet|notre)\ (blog|article)\b | \bdans\ cet\ article\b | \bnotre\ (école|ecole|site)\b |
    subscribe | email\ newsletter | newsletter\ subscribers | instagram | facebook | whatsapp | buy\ now | shop\ now | add\ to\ cart |
    contact\ us | contactez | \binscri | @[a-z_.]{3,}
"""
LEFTOVER_SITE = {
    'montessori-services': r'montessori\ services | jane\ campbell | irene\ baker | for\ small\ hands | parent\ child\ press',
    'happy-kids': r'happy\ kids | gen[èe]ve | notre\ (école|ecole|équipe|crèche) | nos\ (classes|éducat)',
    'montessori-parent': r'montessori\ parent',
    'blooming': r'blooming\ tulips | our\ (nursery|setting|practitioners|team)',
    'amshq': r'\bams\b | american\ montessori\ society | montessori\ life',
}


def leftover(name):
    return re.compile(LEFTOVER_COMMON + '|' + LEFTOVER_SITE[name], re.I | re.X)


SIGN_LINE = re.compile(r"""^\**\s*(
    (best|kind|warm)\ regards,? | cheers!? | happy\ (montessori|parenting)!? | à\ bientôt\ ?!? | bonne\ lecture\ ?!?
)\s*\**$""", re.I | re.X)
CREDIT = re.compile(r'^#*\s*[*_]*(image|photo|picture|credits?|crédit|source de l.image)\b[^\n]{0,40}:', re.I)

# ---------------------------------------------------------------- run

def items_for(name):
    """Fetched items, cached when WP2MD_CACHE is set (useful while editing the rules)."""
    cache = os.environ.get('WP2MD_CACHE')
    path = Path(cache) / f'{name}.json' if cache else None
    if path and path.exists():
        return json.loads(path.read_text())
    items = SOURCES[name]()
    if path:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(items, ensure_ascii=False))
    return items


def main(names):
    for name in names:
        print(f'== {name}')
        core.run(items_for(name), CONTENT / name, edits=EDITS.get(name), no_content=NO_CONTENT.get(name, ()),
                 sign_line=SIGN_LINE, credit=CREDIT, leftover=leftover(name), clean=site_clean(name))


if __name__ == '__main__':
    main(sys.argv[1:] or list(SOURCES))
