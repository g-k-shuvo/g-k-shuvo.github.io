# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website of Golam Kibria, built with SvelteKit 2 + Svelte 5. Single-page app with SSR disabled (`src/routes/+page.ts` exports `ssr = false`). Deploys to GitHub Pages (branch `gh-pages`), not Firebase.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`
- **Type check:** `npm run check`

No test framework is configured. No linter is configured.

## Architecture

### Routing & Page Load

Single route at `src/routes/+page.svelte`. On mount, it fetches JSON data from `static/data/`, waits for image preloading and the loader animation, then initializes slickscroll (momentum scrolling).

### State Management

Two patterns coexist:
- **Svelte 5 runes** (`$state`): `src/lib/state.svelte.ts` — shared reactive state for viewport, scroll anchors, work scroll, and fetched data.
- **Svelte stores** (legacy): `src/lib/store.ts` — writable stores for image loading promises and page load synchronization.

### Sections & Components

- `src/lib/sections/` — page sections: home, work, about
- `src/lib/components/` — nav, footer, cursor-dot, loader

### Animation System

`src/lib/animations.ts` provides custom Svelte transition functions (`letterSlideIn`, `letterSlideOut`, `maskSlideIn`, `maskSlideOut`, `workImageIntro`, `workListIntro`) using anime.js and bezier-easing. These work both declaratively via Svelte `in:`/`out:` directives and programmatically via an `.anime()` method.

### WebGL Effects

`src/lib/effects/` contains Three.js-based renderers:
- `defaults/` — shared image mesh and renderer setup
- `work-slider/` — custom shader-based slider effect for the work section

### Data

Content is driven by JSON files in `static/data/`:
- `data.json` — site-wide config (availability date)
- `work-data.json` — project/work items

### Styling

SASS embedded in Svelte components via `<style lang="sass">`. No global stylesheet file — global styles are set in `+page.svelte`.

## Key Caveats

- HMR is broken due to the Rollup-to-Vite migration. Full page reload required after changes.
- Image loading uses `src/lib/utils.ts:loadImage()` which fetches images as blobs and converts to data URLs — adding new images to a section requires using this function.
