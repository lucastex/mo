"""larmontessori.com -> blog/lar-montessori/*.md

Takes every published post. Discards site announcements (KEEP) and posts without pedagogical
content; removes references to the site, advertising and signatures from the rest.
"""
import re
from pathlib import Path

import core
from lar_montessori_edits import EDITS, KEEP, PROMO, FORCE_NOCONTENT

API = 'https://larmontessori.com/wp-json/wp/v2'
OUT = Path(__file__).resolve().parents[2] / 'content' / 'lar-montessori'

REF = re.compile(r'\blar\s*montessori|\blarmontessori', re.I)
SIGN_LINE = re.compile(r"""^\**\s*(
    .{0,45}\babra[çc]o\b.{0,70} |                       # Um abraço grande, / Um Grande Dia das Mães, e um abraço,
    abra[çc]os\b.{0,50} | beijos\b.{0,40} |
    gabriel(,\ e\ o\ lar\ montessori)?[.,]? | lar\ montessori[.,]? |
    at[ée]\ (breve|mais|a\ pr[óo]xima|l[áa])\b.{0,30} |
    (um|uma)\ (dia|ótima|boa|semana)\b.{0,30}\ para\ (voc[êe]|todos|vocês)\b.{0,10} |
    de\ nova\ iorque,.{0,60}
)\s*\**$""", re.I | re.X)
CREDIT = re.compile(r'^#*\s*\**(imagem|fotografia|foto)\b[^\n]{0,40}(:|cedida por)', re.I)
ORPHANS = ('Vídeo de um lindo bebê em uma cama montessoriana:', 'Se quiser ouvir este texto, aproveite abaixo:',
           'Abaixo, veja a linha do tempo com os principais livros', 'Escute aqui:')


def main():
    posts = core.fetch_all(API, 'posts', status='publish', _fields='id,slug,link,title,content')
    out = core.reset_dir(OUT)
    stats = {'kept': 0, 'site announcement': 0, 'no content': 0}
    for x in posts:
        slug = core.slug_of(x)
        body, had_media = core.html_to_markdown(x['content']['rendered'])
        ops = EDITS.get(slug, []) + ([] if slug in KEEP else PROMO.get(slug, []))
        body = core.apply_ops(slug, body, ops)
        body = core.cleanup(body, SIGN_LINE, CREDIT, ORPHANS, drop_contains=('Posted with Blogsy',))
        words = core.word_count(body)
        # only mentions in the prose count; URLs pointing to larmontessori.com are fine
        prose = re.sub(r'\]\([^)]*\)|<https?://[^>]*>|https?://\S+', ' ', body)
        if (had_media and words < 200) or words < 35 or slug in FORCE_NOCONTENT:
            stats['no content'] += 1
        elif slug in KEEP:
            stats['site announcement'] += 1
        elif REF.search(prose):
            stats['site announcement'] += 1
            print('STILL REFERENCES THE SITE:', slug)
        else:
            stats['kept'] += 1
            core.write_post(out, slug, core.title_of(x), body)
    print(f'{len(posts)} posts:', stats)


if __name__ == '__main__':
    main()
