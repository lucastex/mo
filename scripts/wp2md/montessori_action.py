"""montessoriaction.com -> blog/montessori-action/*.md

Scope is read from the site's top menu on every run, so new menu entries are picked up:
  - "Ressources" menu: every linked page, at any depth (Education, Pedagogy, Results, Schools, Family...)
  - "Blogs" menu: every author blog (/auteur/<slug>/), i.e. all posts written by that author
"""
import re
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

import core
from montessori_action_edits import EDITS, NO_CONTENT

SITE = 'https://www.montessoriaction.com'
API = f'{SITE}/wp-json/wp/v2'
OUT = Path(__file__).resolve().parents[2] / 'content' / 'montessori-action'

SIGN_LINE = re.compile(r"""^\**\s*(
    (best|kind|warm)?\s*regards,? | see\ you\ (soon|next\ time)!?.{0,20} | cheers!? |
    (julien|lamia|odile|alexandra|[ée]lisabeth|olivier)(\ \w+)?\.?
)\s*\**$""", re.I | re.X)
CREDIT = re.compile(r'^#*\s*\**(image|photo|picture|credits?)\b[^\n]{0,40}:', re.I)


def menu_links(label):
    """URLs under a top-menu entry, at any depth (entries without a link, '#', are only group headers)."""
    req = urllib.request.Request(SITE + '/', headers={'User-Agent': 'wp2md'})
    soup = BeautifulSoup(urllib.request.urlopen(req).read(), 'html.parser')
    top = soup.find('ul', id='top-menu')
    entry = next(li for li in top.find_all('li', recursive=False) if li.find('a').get_text(strip=True) == label)
    links = [a['href'] for a in entry.find_all('a')[1:] if a.get('href', '#') != '#']
    return [l if l.startswith('http') else SITE + l for l in links]


def collect():
    """Returns [(section, item)] for every Resource page and every post of the menu's author blogs."""
    pages = {core.slug_of(x): x for x in core.fetch_all(API, 'pages', _fields='id,slug,link,title,content')}
    resources = [('resources', pages[l.rstrip('/').split('/')[-1]]) for l in menu_links('Ressources')]

    users = {u['slug']: u for u in core.fetch_all(API, 'users', _fields='id,slug,name')}
    blog = []
    for l in menu_links('Blogs'):
        author = re.search(r'/auteur/([^/]+)/', l).group(1)
        if author not in users:  # menu entry for an author with no published post
            print(f'blog {author}: no posts')
            continue
        posts = core.fetch_all(API, 'posts', author=users[author]['id'], _fields='id,slug,link,title,content')
        print(f'blog {author}: {len(posts)} posts')
        blog += [('blog', x) for x in posts]
    return resources + blog


def main():
    items = collect()
    out = core.reset_dir(OUT)
    stats = {'kept': 0, 'no content': 0}
    for section, x in items:
        slug = core.slug_of(x)
        body, had_media = core.html_to_markdown(x['content']['rendered'])
        body = core.apply_ops(slug, body, EDITS.get(slug, []))
        body = core.cleanup(body, SIGN_LINE, CREDIT)
        words = core.word_count(body)
        if (had_media and words < 200) or words < 35 or slug in NO_CONTENT:
            stats['no content'] += 1
            continue
        stats['kept'] += 1
        core.write_post(out, slug, core.title_of(x), body)
    print(f'{len(items)} items:', stats)


if __name__ == '__main__':
    main()
