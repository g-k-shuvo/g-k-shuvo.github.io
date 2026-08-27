# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

Personal portfolio of Golam Kibria, built with **Astro 5**. A single static
page, prerendered, deployed to GitHub Pages from the `gh-pages` branch. Not
Firebase.

Version 4 is a full rewrite. Versions 1–3 were a fork of `musabhassan.com`
(SvelteKit, three.js, slickscroll, anime.js); none of that survives. If you find
a reference to SvelteKit, Firebase, slickscroll, or an "MH" logo anywhere, it is
stale and should be removed.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` → `dist/`
- **Preview build:** `npm run preview`
- **Type check:** `npm run check`
- **Design captures:** `npm run shots` → `.impeccable/review/{desktop,mobile}.png`

No linter is configured. `tests/capture.spec.ts` is a capture harness for design
review, not a behavioural test suite.

## Architecture

Single route, `src/pages/index.astro`, composed of section components. All
rendering happens at build time.

### Content

Content is data, not markup. It lives in `src/data/*.json` and is imported
directly by components at build time — never fetched at runtime. When adding a
project or a skill, edit the JSON.

### Images

Images under `src/assets/` go through `astro:assets` (`<Image />`) and are
optimised to WebP with responsive `widths`. Images in `public/` ship untouched
and are not optimised — put only the favicon and crawler files there.

**Gotcha:** `<Image />` emits intrinsic `width`/`height` attributes. If you set
`aspect-ratio` on an image you must also set `height: auto`, or the attribute
wins and the ratio is silently ignored.

### Design system

`src/styles/global.css` holds every token and the shared component language.
Component-scoped styles live in each `.astro` file's `<style>` block. There is
no CSS framework.

The single shared component is `.plane` — a raised surface with a real offset
shadow and a 1px specular top edge. Anything that needs to sit above the ground
uses it. Do not invent a second card treatment.

Read `DESIGN.md` before changing anything visual; it records the system as
actually built.

### Motion

The page has exactly one authored motion: the **raking light**
(`src/scripts/raking-light.ts`), which tracks the pointer across `.plane`
elements. There are no entrance animations — content is legible at first paint,
by design.

Anything you add must respect `prefers-reduced-motion` and coarse pointers, and
must not delay content. The user's stated anti-goal is "slow, heavy, or animated
at me."

## Constraints

- **Static only.** No backend, no forms that submit, no runtime data fetching.
- **Weight is a feature.** The build ships zero external JS files. Adding a
  dependency needs a real justification.
- **Only true things.** Every claim traces to `src/data/*.json`, a live GitHub
  repo, or a confirmed fact in `PRODUCT.md`. No invented metrics, testimonials,
  client names, or capabilities. `PRODUCT.md` lists what must not be fabricated.
- **Accessibility is not optional.** Semantic HTML, keyboard reachability,
  visible focus, 4.5:1 body contrast, meaningful alt text.

## Records

- `PRODUCT.md` — durable product truth: users, positioning, evidence, brand
  commitments, what must not be invented.
- `DESIGN.md` — the visual system as built.
