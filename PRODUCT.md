# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Chosen by the user in the redesign interview (2026-08-27) over "keep SvelteKit and strip it" and "plain HTML/CSS". Constraint that drove it: "should be minimal not heavy" — zero-JS by default, islands only where interaction genuinely requires them.

Deploy target constrains the answer: GitHub Pages, static output, branch `gh-pages`, via the existing GitHub Actions workflow in `.github/`. Not Firebase (the forked README's claim is wrong).

The outgoing SvelteKit 2 / Svelte 5 implementation ships three.js, slickscroll momentum scrolling, anime.js, bezier-easing, detect-gpu, SSR disabled, and a blob/base64 image loader. None of that is preserved.

## Users

**Primary — remote hiring managers and technical recruiters** at US and EU product companies, evaluating Golam for a senior full-stack role. They arrive from a LinkedIn profile, a GitHub profile, or an application link. They are skimming under time pressure, usually alongside a stack of other candidates, and they need to reach a keep-or-drop decision fast. Success is that they read enough depth to book a call.

**Secondary — founders and CTOs** sourcing contract or freelance build work. Same entry points, different question: can this person own delivery end to end without supervision.

Hiring-first is the confirmed priority. The site must serve the freelance path without diluting the hiring case.

## Product Purpose

Personal portfolio and professional home for Golam Kibria, software engineer. It exists to convert a cold skim into a conversation by making three years of shipped enterprise work legible to someone who has never met him and will not read carefully.

Success is a call booked or an inquiry sent. Not traffic, not time-on-page.

## Positioning

**Full-stack range at genuine enterprise scale.** Golam has shipped across seven distinct enterprise domains — inventory and supply chain, healthcare analytics, environmental/industrial telemetry, data-center monitoring, safety and compliance, CX procurement, accessibility learning — and owns delivery end to end across frontend, backend, infrastructure, DevOps, and release cycles.

The specific claim a neighboring portfolio cannot truthfully copy: **the breadth is real and it is domain breadth, not framework breadth.** Most portfolios at this level show one domain and many frameworks. This one shows many hard domains, each with production constraints (multi-tenancy, offline-first field ops, compliance-aware data handling, real-time sensor telemetry, ERP ingestion at 96K+ records), plus the stack range that delivering them required.

Supporting, not leading: AI/ML integration is real (RAG pipelines, vector DBs, embedding pipelines, ML demand forecasting, LLM integration) and appears as evidence of range rather than as the headline.

## Operating Context

Visitors evaluate on a laptop during a review session, or on a phone between other tasks. Frequently one of many tabs open. Often skimming to disqualify.

The site is a single destination reached from LinkedIn, GitHub, or a job application. There is no funnel before it and no product to sign up for. The only actions available are: read, follow a link to GitHub, or make contact.

## Capabilities and Constraints

- Static site. No backend, no database, no auth, no forms that submit anywhere. Contact is a `mailto:` link and external profile links.
- Deploys to GitHub Pages from branch `gh-pages` via GitHub Actions. Static output is mandatory.
- Content lives in structured data (currently `static/data/*.json`: site config, work projects, Techjays experience). Keeping content separated from markup is a working practice worth preserving in whatever form Astro makes natural.
- Google Analytics is installed (`G-7XXPE0DV47`) and stays.
- Existing SEO meta, `robots.txt`, and `sitemap.xml` exist and must survive the rewrite.
- **User constraint, verbatim:** "i want full redesign. i am open to change the tech stack as well. shoul be minimal not heavy." Nothing from the outgoing implementation is locked. Weight is a stated requirement, not a preference.

## Brand Commitments

**Name and identity:** Golam Kibria. Goes by Kibria. Software engineer, based in Bangladesh.

**Contact, all confirmed real:**
- Email: `gkshuvo24@gmail.com`
- GitHub: `https://github.com/g-k-shuvo`
- LinkedIn: `https://www.linkedin.com/in/g-k-shuvo/`

**No inherited marks.** The current codebase is a fork of Musab Hassan's `musabhassan.com`. The following are that author's identity, not Golam's, and are confirmed for removal:
- `static/assets/imgs/logo.svg` — an "MH" monogram (footer alt text reads `"mh logo"`)
- the hand-signature SVG paths duplicated in `home.svelte` and `footer.svelte`
- `README.md`, which still describes the site as `musabhassan.com` and credits Firebase hosting

A new mark derived from Golam's own initials replaces the monogram. The original template's license (MPL 2.0) and authorship are to be credited correctly in the rewritten README.

**Standing visual preference, confirmed 2026-08-27.** Offered a direction round of committed visual worlds, the user took the standing exit and chose the **category standard, played straight** — the modern engineer portfolio executed at full craft rather than executed differently. This is a durable preference, not a one-off: future work on this site executes convention at full fidelity, without irony and without smuggling in quirk from a rejected direction.

Bound at the same time:
- **Dark ground.** Stated by the user, not inferred.
- **Craft bar: Raycast / Arc / Family** — material and depth. Layered elevation, considered shadow, real material in the ground, restraint in all of it. Their finish level is the bar this build is measured against.
- **Exactly one signature motion**, chosen by the model and audited at the finish review. The rest of the page stays still.
- **The user's photograph appears on the page.**

**No confirmed voice, palette, or typeface.** The outgoing look (freight-big-pro serif, `#222224`, lowercase display type) is inherited from the fork and carries no authority.

## Evidence on Hand

**Employment — real, verifiable:** Techjays. Software Engineer. May 2023 – Present. Menlo Park, CA. Remote.

**Seven enterprise projects delivered at Techjays**, with descriptions and stacks in `static/data/experience-data.json`. Named clients are not disclosed; the descriptions are domain-level and stay that way.

**Six personal / open-source projects** in `static/data/work-data.json`, each with a live public GitHub repository under `github.com/g-k-shuvo`: DocMind (RAG), Flairy (MERN marketplace), ArtifyNow (AI image SaaS), YouTube Offer Finder (browser extension), Bloggify (Django), React Video Corner (published npm package).

**Project cover images — disputed, and treated as cover art.** At `src/assets/work/<id>.jpg`. The user confirmed on 2026-08-27 that these are real screenshots of the six personal projects. Inspection of the rendered page and two independent design reviews disagree: none of the six shows a product interface — DocMind is an abstract node render, Flairy a dark keyboard field, ArtifyNow a before/after photo composite, and the rest are stylised illustrations.

They ship, at the user's direction, but as **decorative cover art**: the `alt` attribute is empty so the images make no claim about the software, and the heading and description carry the meaning. They are on the replacement list — real UI captures would be worth substantially more to a hiring manager. Until the user rules, no page may present them as evidence of a working product, and no screenshot may be invented for any project that lacks one.

**Real profile photograph:** `static/assets/imgs/profile-photo.jpg`.

**Education:** BSc in Computer Science & Engineering, Metropolitan University.
**Certification:** Google Cloud Developer Certification, Google Cloud Platform.

**Availability, confirmed 2026-08-27:** open now, for both full-time remote roles and freelance/contract work. The previous value `"july 2025"` in `static/data/data.json` is 13 months stale and must not be carried forward.

**Absences that must not be fabricated:** no testimonials, no client names, no named references, no metrics beyond those already in the project descriptions, no awards, no press, no case studies, no résumé PDF on file, no pricing or engagement terms, no years-of-experience claim beyond May 2023 – present.

## Product Principles

1. **Legibility beats atmosphere.** A hiring manager skimming for forty seconds must be able to extract role, range, and proof without scrolling patiently. Anything that delays that information loses.
2. **Breadth is the argument; show it as evidence, not adjectives.** Seven domains and their real production constraints do the persuading. Never substitute a self-description for the work.
3. **Weight is a feature.** Minimal, fast, and quiet is a user requirement. Every dependency, animation, and asset must justify its cost against the forty-second skim.
4. **Only true things.** Every claim traces to `experience-data.json`, `work-data.json`, a live GitHub repo, or a confirmed fact above. No invented proof, no borrowed identity.
5. **Own the identity.** Nothing on the finished site may be traceable to the template it was forked from — not a mark, not a signature, not a credit.

## Accessibility & Inclusion

No product-specific standard was established by the user. Baseline obligations apply and are non-negotiable given the audience: real semantic HTML, keyboard-reachable interactive elements, visible focus states, sufficient contrast, honored `prefers-reduced-motion`, and meaningful alternative text on the profile photograph and project screenshots.

One relevant note: Golam has shipped an accessibility learning platform for students with dysgraphia and motor impairments. A portfolio that fails accessibility while listing that work contradicts itself.
