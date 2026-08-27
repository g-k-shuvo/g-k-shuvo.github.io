# g-k-shuvo.github.io

Personal site of **Golam Kibria** — software engineer.

Single static page: who I am, the enterprise work I've shipped at Techjays, my
independent projects, and how to reach me.

**Live:** https://g-k-shuvo.github.io

## Built with

- [Astro](https://astro.build/) — static output, zero JavaScript by default
- [Geist](https://vercel.com/font) — self-hosted variable Sans and Mono
- [Playwright](https://playwright.dev/) — viewport captures for design review

No UI framework, no CSS framework, no client-side router. The only script that
ships is ~1KB of pointer tracking for the raked-light effect on raised
surfaces, inlined into the document and skipped entirely on touch devices and
under `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev        # dev server
npm run build      # static build → dist/
npm run preview    # serve the build
npm run check      # astro check
npm run shots      # capture desktop + mobile into .impeccable/review/
```

## Content

Page content lives in JSON, separate from markup:

| File | Holds |
| --- | --- |
| `src/data/site.json` | availability, contact links |
| `src/data/experience.json` | Techjays role and the projects delivered there |
| `src/data/work.json` | independent / open-source projects |
| `src/data/stack.json` | grouped stack, education, certification |

Images in `src/assets/` are optimised to WebP at build time. Anything in
`public/` ships as-is.

## Deploy

Pushing to `gh-pages` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages.

## Design record

`PRODUCT.md` holds durable product truth — audience, positioning, evidence, and
what future work must not fabricate. `DESIGN.md` records the visual system as
built.

## Licence

Mozilla Public License 2.0. The content, copy, photographs, and project
descriptions are mine and are not covered by that grant — please don't reuse
them as your own.
