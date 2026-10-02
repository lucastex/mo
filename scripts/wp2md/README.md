# wp2md

Converts WordPress content into text-only Markdown (no images, captions, embeds, ads, signatures).

- `core.py`: shared engine (fetch via WP REST API, HTML → Markdown, per-post edit ops, final cleanup)
- `lar_montessori.py` + `lar_montessori_edits.py`: larmontessori.com → `content/lar-montessori/`
- `montessori_action.py` + `montessori_action_edits.py`: montessoriaction.com ("Ressources" and "Blogs" menus) → `content/montessori-action/`
- `blogs_br.py` + `blogs_br_edits.py`: lega, crianças-independentes, escola-montessori, montessori-brasil, blog-montessori → `content/<nome>/`
  (WordPress API, Wix sitemap + page, or the site's own JSON). Any post still mentioning the source blog, school,
  store, authors or "este texto/post" is reported as `LEFTOVER REFERENCE` and not written.
- `blogs_en.py` + `blogs_en_edits.py`: montessori-services (all articles of the "For Teachers & Schools" and
  "For Parents" categories), happy-kids (Squarespace), montessori-parent (2 pages), blooming, amshq → `content/<nome>/`.
  amshq.org blocks scripts (Cloudflare): its "About Montessori" menu pages were exported from a browser session
  into `snapshots/amshq/` (one file per page); refresh those files to update that source.

Each run deletes and recreates its output folder.

```bash
pip install -r scripts/wp2md/requirements.txt
python scripts/wp2md/lar_montessori.py
python scripts/wp2md/montessori_action.py
python scripts/wp2md/blogs_br.py            # all five, or: python scripts/wp2md/blogs_br.py lega
python scripts/wp2md/blogs_en.py            # all five, or: python scripts/wp2md/blogs_en.py happy-kids
```

Set `WP2MD_CACHE=<dir>` to reuse downloaded posts while adjusting the rules (Wix rate-limits repeated downloads).

To add a site: create `<site>.py` (what to fetch, language-specific signature rules, output folder) and `<site>_edits.py` (per-post decisions).
