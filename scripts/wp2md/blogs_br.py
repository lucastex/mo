"""Brazilian/Portuguese Montessori blogs -> blog/<name>/*.md

    python scripts/wp2md/blogs_br.py              # all sites
    python scripts/wp2md/blogs_br.py lega         # one site

The output is a knowledge base for an AI agent: only pedagogical content, with no reference
to the source blog, school, store, authors or to "this text/post". Items that still mention a
source reference after the edits are reported and NOT written (see LEFTOVER).
"""
import json
import os
import re
import sys
from pathlib import Path

import core
from blogs_br_edits import EDITS, NO_CONTENT

BLOG = Path(__file__).resolve().parents[2] / 'content'

# ---------------------------------------------------------------- sources

def lega():
    js = core.get('https://www.escolalega.com.br/blog/posts.js')
    posts = json.loads(js[js.index('['):js.rindex(']') + 1])
    return [{'slug': x['slug'], 'title': x['title'], 'html': x['html'],
             'url': f'https://www.escolalega.com.br/blog/{x["slug"]}/'} for x in posts]


SOURCES = {
    'lega': lega,
    'crianças-independentes': lambda: core.wix_items('https://www.criancasindependentesmontessori.com'),
    'escola-montessori': lambda: core.wp_items('https://escolamontessori.com.br/wp-json/wp/v2', status='publish'),
    'montessori-brasil': lambda: core.wix_items('https://www.montessoribrasil.com.br'),
    'blog-montessori': lambda: core.wp_items('https://blogmontessori.com.br/wp-json/wp/v2', status='publish'),
}

# ---------------------------------------------------------------- site-specific cleaning (before per-post edits)

def drop_blocks(body, pattern):
    return '\n\n'.join(b for b in body.split('\n\n') if not re.search(pattern, b.strip(), re.I))


def cut_from(body, pattern):
    """Delete from the first paragraph matching pattern to the end (store ads, photo credits)."""
    blocks = body.split('\n\n')
    for i, b in enumerate(blocks):
        if i and re.search(pattern, b.strip(), re.I):
            return '\n\n'.join(blocks[:i])
    return body


WIX_FOOTNOTE = r'\[\**\[\d+\]\**\]\(https://www\.wix\.com/[^)]*\)'


def clean_wix(body):
    body = re.sub(WIX_FOOTNOTE, '', body)
    body = drop_blocks(body, r'^\[?#\w')                       # hashtag rows
    body = drop_blocks(body, r'^(\*\*)?(comprar|fazer matr[íi]cula|digital)(\*\*)?$')
    body = drop_blocks(body, r'fazer download de pdf|\.pdf$')  # attached PDF widgets
    body = drop_blocks(body, r'^\[\**(ler mais|continua|veja mais)')
    return body


def clean_criancas_independentes(body):
    body = clean_wix(body)
    body = drop_blocks(body, r'siga-nos no instagram')
    body = drop_blocks(body, r'traduzido por crian[çc]as independentes')
    body = drop_blocks(body, r'autora do blog.{0,40}m[ãa]e montessori')   # guest author intro
    return cut_from(body, r'^depois de tantos pedidos finalmente enviamos')  # store ad closing every post


def clean_montessori_brasil(body):
    return clean_wix(body)


def clean_blog_montessori(body):
    body = core.drop_repeated_body(body)
    body = drop_blocks(body, r'^[*\\]*\s*por [A-ZÀ-Ú][^\n]{0,120}$')        # "por Fulana, Mestra em..."
    body = drop_blocks(body, r'^\[?@[\w.]+')                                 # "@instagram" lines
    body = drop_blocks(body, r'^#*\s*uma parceria com')
    body = drop_blocks(body, r'^autoria:|^– registro pessoal de forma')
    body = re.sub(r'[,.]?\s*(em )?tradu[çc][ãa]o livre( do \w+)?( de| por) Luiza Destefani( do \w+)?', '', body, flags=re.I)
    body = drop_blocks(body, r'^[*\\]*\s*texto de [A-ZÀ-Ú]')
    body = drop_blocks(body, r'^[*\\]*\s*\\?\*?pedagoga, mestre')
    body = cut_from(body, r'^refer[êe]ncias? d[aeo]s? (fotos|imagens)')
    body = drop_blocks(body, r'^[–-]?\s*(loja|materiais: loja)( da)? smirna|^bebês: arquivo|^v[íi]deo do acervo')
    # store call-to-action paragraphs
    body = drop_blocks(body, r'(nossa|na) \[?loja|site de nossa loja|loja smirna|mesa sensorial da smirna')
    return body


OWN_DOMAINS = {
    'lega': r'escolalega\.com\.br',
    'crianças-independentes': r'criancasindependentesmontessori\.com|maemontessori\.com',
    'escola-montessori': r'escolamontessori\.com\.br',
    'montessori-brasil': r'montessoribrasil\.com(\.br)?|hotmart\.com',
    'blog-montessori': r'blogmontessori\.com\.br|montessorimaterial\.com',
}


def unlink(body, domains):
    """Links to the source blog or its store keep only their text."""
    return re.sub(r'\[([^\]]*)\]\((?:https?://)?(?:www\.)?(?:' + domains + r')[^)]*\)', r'\1', body)


def site_clean(name):
    def clean(body):
        body = CLEAN[name](body) if name in CLEAN else body
        return unlink(body, OWN_DOMAINS[name])
    return clean


CLEAN = {
    'crianças-independentes': clean_criancas_independentes,
    'montessori-brasil': clean_montessori_brasil,
    'blog-montessori': clean_blog_montessori,
}

# ---------------------------------------------------------------- final checks

# Source names, schools, stores, authors and meta-references that must not survive in the knowledge base.
LEFTOVER_COMMON = r"""
    \b(este|nosso|neste|desse|deste|no|meu|aqui\ no)\ blog\b | \b(neste|nesse|deste|desse|este|esse|o\ presente)\ (texto|artigo|post)\b |
    \bpost\b | postagem | texto\ escrito\ por | escrito\ por | autor[a]?\ d[oa]\ (blog|texto|artigo) |
    siga-nos | instagram | whatsapp | facebook | \bloja\b | \bcomprar\b | @[a-z_.]{3,} | compartilhe\ (este|esse)\ texto | compartilhe\ com\ mais\ pessoas | leu\ at[ée]\ aqui
"""
LEFTOVER_SITE = {
    'lega': r'\blega\b | escola\ lega | nossa\ escola | natalie | ana\ paula\ dias | ana\ claudia | alessandra\ ferreira',
    'crianças-independentes': r'crian[çc]as\ independentes | m[ãa]e\ montessori | joana | vicente | \bvi\b',
    'escola-montessori': r'(?-i:Escola\ (Maria\ )?Montessori) | fatureto | faturetto',
    'montessori-brasil': r'\babem\b | talita | presence | gra[çc]a\ soares | giselle | frufrek | coletânea',
    'blog-montessori': r'smirna | montessorimaterial | jieli | talyta | cristiane\ de\ ávila | luiza\ destefani',
}


def leftover(name):
    return re.compile(LEFTOVER_COMMON + '|' + LEFTOVER_SITE[name], re.I | re.X)


SIGN_LINE = re.compile(r"""^\**\s*(
    .{0,30}\babra[çc]os?\b.{0,40} | beijos\b.{0,30} | at[ée]\ (j[áa]|breve|mais|a\ pr[óo]xima|l[áa])\b.{0,30} |
    boa\ leitura!? | boas\ f[ée]rias!? | um\ (beijo|carinho)\b.{0,30} |
    joana | a\ mam[ãa]\ joana\.? | natalie\ shimada | \**alessandra\ ferreira\** |
    marcia\ fatureto\ –\ diretora\ pedag[óo]gica | professor\ phelipe\ queiroz | \#*\ ?talita\ de\ almeida | jieli\ brito
)\s*\**$""", re.I | re.X)
CREDIT = re.compile(r'^#*\s*[*_]*(imagem|imagen|fotografia|foto|cr[ée]ditos?|fonte da imagem|(texto|escrito|artigo)\s+(escrito\s+)?por|texto:|autor[a]?:)\b', re.I)

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
        core.run(items_for(name), BLOG / name, edits=EDITS.get(name), no_content=NO_CONTENT.get(name, ()),
                 sign_line=SIGN_LINE, credit=CREDIT, leftover=leftover(name), clean=site_clean(name))


if __name__ == '__main__':
    main(sys.argv[1:] or list(SOURCES))
