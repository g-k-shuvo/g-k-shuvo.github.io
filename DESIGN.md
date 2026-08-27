---
name: Golam Kibria — Portfolio
description: A near-black material page where every plane catches the same raking light and the work is the only colour.
colors:
  ground: "#0b0b0e"
  surface-sunken: "#0d0d11"
  surface: "#16161a"
  surface-raised: "#1c1c22"
  surface-hi: "#1f1f26"
  line: "rgba(255, 255, 255, 0.085)"
  line-strong: "rgba(255, 255, 255, 0.16)"
  ink: "#f4f4f5"
  ink-2: "#a5a5ae"
  ink-3: "#85858f"
  live: "#4ade80"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.6rem, 3.4vw, 2.35rem)"
    fontWeight: 560
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  address:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.25rem, 3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  role:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.125rem, 2vw, 1.375rem)"
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1.0625rem"
    fontWeight: 560
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  control:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "0.8125rem"
    fontWeight: 450
    lineHeight: 1.65
    letterSpacing: "-0.005em"
  meta:
    fontFamily: "Geist Mono Variable, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 450
    lineHeight: 1.65
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums"
rounded:
  sm: "6px"
  inner: "8px"
  md: "10px"
  lg: "14px"
  pill: "99px"
spacing:
  gutter: "clamp(1.5rem, 5vw, 6rem)"
  section: "clamp(6rem, 12vh, 9.5rem)"
  plane-lg: "clamp(2.5rem, 6vw, 4.5rem)"
  plane-md: "clamp(1.75rem, 3.5vw, 2.5rem)"
  card: "1.375rem"
  row: "1.875rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#0a0a0c"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0.8125rem 1.25rem"
  button-primary-hover:
    backgroundColor: "#ffffff"
  button-ghost:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0.8125rem 1.25rem"
  button-ghost-hover:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
  plane:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  plane-hover:
    backgroundColor: "{colors.surface-hi}"
  plane-raised:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
  plane-sunken:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.lg}"
    padding: "{spacing.plane-md}"
  portrait-mount:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
    padding: "7px"
  portrait-frame:
    rounded: "{rounded.inner}"
  tag:
    backgroundColor: "rgba(255, 255, 255, 0.018)"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.5rem"
  address-link:
    textColor: "{colors.ink}"
    typography: "{typography.address}"
    padding: "0 0 0.25rem"
---

# Design System: Golam Kibria — Portfolio

## Overview

**Creative North Star: "The Lit Slab"**

A near-black room with one light in it. Every surface on this page is the same
material — a cool, slightly-blue graphite that has been given a fine grain so it
reads as a physical thing rather than a filled rectangle — and every raised piece
of that material catches the same light source falling from the upper left. Depth
is the entire expressive budget. There is no accent colour, no gradient, no
illustration, no decorative rule. The photographs — one portrait and six work
covers, all desaturated toward the page's own greyscale — plus one 7px green dot
carry all the chroma; the green is functional, it means *available*.

The density is that of a specification sheet read at arm's length: generous
vertical air between sections, tight leading inside a block, a hairline rule under
every section heading, and text that never exceeds 62–68 characters. Nothing
animates on load. The page is fully legible before a single script runs, and the
page's signature motion is a light that moves when a fine pointer moves — and that
light is already present, at rest, on every device that has no pointer at all.

The rejected references are explicit and were rejected at the world-choice: the
expressive concept portfolio (full-bleed type experiments, scroll-jacking, a
palette that competes with the work) and the generic dev template (card grids with
coloured category chips, gradient hero, an eyebrow above every heading). This world
refuses both by having exactly one component language and using it everywhere.

**Key Characteristics:**
- Greyscale-only, with a single functional green as the sole chromatic exception
- One material, three elevation tiers: sunken, base, raised
- A raking specular that exists at rest and is merely *moved* by the pointer
- Grain over the entire viewport, plain alpha, measured by pixel variance
- Sans for names and categories, mono strictly for numbers and dates
- Pill controls against 14px-radius planes; no other shapes

## Colors

A ten-step neutral graphite ramp with a cool cast, plus one live green — chroma on
this page belongs to the photographs and nothing else.

### Primary
- **Bone Ink** (`{colors.ink}`): The page's text at full strength — the name, headings,
  domain list, stack labels, the email address. Also the fill of the primary pill
  button and the focus ring. This is the closest thing the system has to an accent:
  near-white on near-black *is* the contrast device.

### Secondary
- **Live Green** (`{colors.live}`): One use only, at 7px — the availability dot beside the
  status line in the hero, with a breathing ring at 45% opacity. It is a status
  indicator, not a brand colour. It never appears on a heading, a border, a link,
  or an icon.

### Neutral
- **Ground Graphite** (`{colors.ground}`): The page background everywhere, and the browser
  `theme-color`. It sits a few levels above absolute black on purpose — a black
  shadow needs somewhere to fall, and at true `#09090b` every plane floats flat.
- **Sunken Well** (`{colors.surface-sunken}`): The recessed tier. Just *above* the ground, not
  below it, so a recessed block still registers as content when skimmed.
- **Plane Graphite** (`{colors.surface}`): The base plane — work cards, the default material.
- **Raised Graphite** (`{colors.surface-raised}`): The focal tier. Exactly two elements on the
  page: the hero portrait mount and the contact close block.
- **Hover Graphite** (`{colors.surface-hi}`): The base plane under a fine pointer.
- **Hairline** (`{colors.line}`): Every 1px border, section-head rule, and row divider.
- **Hairline Strong** (`{colors.line-strong}`): Link underlines at rest, the email address rule,
  and the border of a hovered ghost control.
- **Ink Secondary** (`{colors.ink-2}`): Body copy, the hero role line, ledes, footer nav.
- **Ink Tertiary** (`{colors.ink-3}`): Labels, meta, tag text, the "View source" cue at rest.

### Named Rules

**The Work Is The Colour Rule.** No authored hue may enter the page. Chroma comes
from photographs and from the one live-status dot. If a new surface needs to signal
something, it signals it with elevation, ink weight, or a hairline — never a hue.

**The Shadow Needs Somewhere To Fall Rule.** The ground is `{colors.ground}`, not true
black. Any future darkening of the ground must be checked against the raised
plane's shadow: if the shadow stops resolving, the ground has gone too dark and the
whole elevation system silently collapses to flat.

## Typography

**Display / Body Font:** Geist Variable (with `ui-sans-serif`, `system-ui`, `-apple-system`, Segoe UI)
**Mono Font:** Geist Mono Variable (with `ui-monospace`, SF Mono, Menlo)

**Character:** One grotesk, self-hosted as a variable font, run across an
eleven-step ramp and four weights. Optical corrections tighten as size grows — the
name at display scale is tracked to `-0.038em`, section headings and the address to
`-0.03em`, the role line to `-0.02em`, body to zero. Weight does the hierarchy work
a second family would otherwise do: 450 for quiet metadata and the role line, 500
for controls, stack labels and the address, 560 for headings, 600 for the name.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 7.5vw, 5.25rem)`, 0.96): The name, once, in the first
  viewport. Nothing else on the page is permitted at this scale.
- **Headline** (560, `clamp(1.6rem, 3.4vw, 2.35rem)`, 1.1): Section headings and the contact
  question. Balanced wrapping; the contact heading is capped at 20ch.
- **Address** (500, `clamp(1.25rem, 3vw, 2rem)`, `-0.03em`, bone): One element — the email
  link that closes the contact plane. It is the page's terminal call, so it is set
  above control size and underscored by a real 1px rule rather than a text-decoration.
- **Role** (450, `clamp(1.125rem, 2vw, 1.375rem)`, `-0.02em`, ink-2): One element — the
  line under the name. It sits *below* the display name, never above it, and is set
  light so it reads as apposition rather than as a heading of its own.
- **Lede** (400, `clamp(1.0625rem, 1.6vw, 1.1875rem)`, 1.6, ink-2, max 68ch): The claim under
  the name and the closing paragraph in the contact block.
- **Title** (560, 1.0625rem, 1.35): Project names in the experience index, work card
  headings, the education heading. Rises to 1.1875rem inside the sunken highlight only.
- **Control** (500, 0.9375rem, `-0.01em`): Both pill buttons and the stack group labels —
  the type that names an action or a group rather than describes one.
- **Body** (400, 0.9375rem, 1.7, ink-2, max 62ch): Descriptions inside index rows, the
  sunken highlight, and stack entries.
- **Body Small** (400, 0.875rem, ink-2): The hero status line, the work card description,
  and the footer nav destinations — copy that sits inside or beside a denser block
  and must not compete with the body measure next to it.
- **Label** (450, 0.8125rem, `-0.005em`, ink-3, sentence case): Category names, project
  kinds, one-line summaries, the copyright line. Sans, always.
- **Meta** (450 mono, 0.75rem, `+0.02em`, ink-3, tabular numerals): Dates, durations,
  counts, locations, issuers. Numbers only.

### Named Rules

**The Mono Is A Ruler Rule.** `.meta` (mono) is for measurement: dates, durations,
counts, tabular data. `.label` (sans) carries category names, kinds, and summaries.
Mono on a category name is costume; it was introduced and removed twice and must
not come back.

**The No Eyebrow Rule.** No kicker, eyebrow, or small dim line above a larger
heavier one — anywhere, at any size, even when the small line is a complete
sentence. A skimmer reads the pair as one unit and the top line is lost. Categories
go beside or beneath, never above. The role line is the test case: it is exactly the
shape a kicker would take, and it is set *under* the name for that reason.

**The One Display Rule.** Exactly one element on the page uses display scale. A
second display-scale element on a new surface means one of them is not the subject.

## Layout

A single centred column, `max-width: 76rem`, with a fluid gutter of
`{spacing.gutter}` — 24px on a phone, 96px on a wide desktop. There is no sidebar,
no sticky nav, and no fixed chrome; the only fixed layer in the document is the
grain.

Sections breathe **from above**: each carries `padding-block-start: {spacing.section}`
and no bottom padding, so a heading always owns the space over it and blocks never
double up their air. Every section opens with a `.section-head` — a baseline-aligned
flex row with the heading at one end and a `.meta` or `.label` at the other, closed
by a 1px hairline and 2.5rem of clearance.

Two-column asymmetric grids carry the content: the hero at `1.55fr / 1fr` (claim
left, portrait right), the experience index at `17rem / 1fr` (project identity left,
body right), and the stack at `10rem / 1fr` (group label left, items right). The
work gallery is `repeat(auto-fit, minmax(min(21rem, 100%), 1fr))` with a fluid
1–1.5rem gap.

Breakpoints, in the order they fire: **900px** collapses the hero to one column and
releases the portrait to full column width (`max-width: none`) — a capped portrait
left dead rail down both sides of a phone; **760px** collapses the experience row and
the stack group to one column; **640px** switches the hero domain list from inline
flex to two balanced CSS columns; **560px** stacks the work card heading and its
summary.

### Named Rules

**The Gutter Floor Rule.** `{spacing.gutter}`. The `5vw` term computes to only
19.5px at 390px, so on every phone the *floor* is the only term doing any work — it
is the mobile margin, not a safety net. 24px is the floor; 20px put section content
on the edge of the screen. Judge any change to this token at 390px, never at desktop.

**The Gap-Not-Rules Rule.** Lists of inline items — the hero domain list, the stack
rows — separate with `column-gap: 1.5rem` and `row-gap: 0.4375rem`. Never
`border-inline-end`: a wrapping list strands a dangling separator at the end of
every wrapped line.

**The No Orphan Rule.** A wrapping list of an odd count is constrained until it
breaks evenly. The hero's seven domains are capped at `32rem` to force a 4/3 break,
and below 640px switch to two balanced columns, which break 4/3 by construction at
any font size.

## Elevation & Depth

This system is entirely built on elevation. Colour does no signalling work, so
depth does all of it, and it is real depth: tonal step plus a 1px hairline border
plus an inset specular top edge plus an offset shadow with a soft falloff. There
are **three tiers and only three**, and each has a fixed job.

### Shadow Vocabulary
- **Base plane** (`inset 0 1px 0 rgba(255,255,255,0.07), 0 1px 2px rgba(0,0,0,0.55), 0 10px 26px -14px rgba(0,0,0,0.9)`):
  The default material — work cards. Sits on the ground with a visible contact shadow.
- **Raised plane** (`inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.55), 0 22px 50px -22px rgba(0,0,0,1)`):
  The focal tier. Two instances on the page: the hero portrait mount and the contact
  close block. A brighter lit edge and a much deeper cast.
- **Sunken plane** (`inset 0 1px 3px rgba(0,0,0,0.85), inset 0 -1px 0 rgba(255,255,255,0.045)`):
  A shallow well — the experience highlight. No outer shadow, a dimmer border
  (`rgba(255,255,255,0.055)`), and no specular sweep (`::before` is disabled). It reads
  as recessed through its inset shadow and its lit *bottom* edge, not through darkness.

### Named Rules

**The Light Exists At Rest Rule.** `--lx: 30%` and `--ly: 0%` are defaults, not
placeholders. Every plane renders a raking specular from the upper left with no
pointer present — on touch devices, on keyboard-only, and under
`prefers-reduced-motion`. `raking-light.ts` only *moves* a light that is already
there. Making the highlight hover-only leaves every phone flat and kills the world.

**The Three Tiers Rule.** Sunken, base, raised. The sunken tier sits *above* the
ground (`{colors.surface-sunken}` over `{colors.ground}`), never below it — below the ground it
reads as a seam in the page rather than as content. A fourth tier means the
hierarchy has stopped being legible and needs editing, not another shadow.

**The Measured Grain Rule.** The full-viewport grain is fractal-noise SVG at plain
alpha `0.05`. It must never use `mix-blend-mode: overlay`: overlay against a ground
this dark returns ~2 × base × blend and annihilates the noise no matter how high the
opacity reads. Judge the grain by measured luma variance on empty ground (6–8 levels
is correct; 1 means it is gone), never by the opacity number.

## Shapes

Two radii, one nested radius, and one pill. Planes are `{rounded.lg}` (14px) — soft
enough to read as a milled slab, tight enough not to look like a mobile app card.
Nested content subtracts the mount it sits in: the portrait's frame well is
`{rounded.inner}` (8px) inside a 7px mount, so the two curves are concentric rather
than parallel and the mount reads as a margin of visible material rather than a
border. Tags are `{rounded.sm}` (6px). Controls are fully pilled (`{rounded.pill}`).
The focus ring is a 2px solid bone outline at 3px offset with a 3px radius, applied
globally by `:focus-visible`.

Borders are always exactly 1px and always one of the two hairline tokens. There are
no dashed borders, no double rules, no dividers thicker than a hairline, and no
decorative shapes, blobs, or background flourishes of any kind. All iconography is
inline SVG line work at 13–15px, `stroke-width: 1.6`, round caps and joins — matching
the monogram, which is monoline `stroke-width: 2` with round joins built from the
same geometry as the grotesk.

### Named Rules

**The Concentric Inset Rule.** A radius nested inside a plane is the plane's radius
minus its mount, declared as a literal token (`{rounded.inner}` inside a 7px mount),
not as an inline `calc()`. The literal keeps the pair auditable by every tool that
reads the stylesheet; a `calc()` hides the relationship from all of them.

**The Intrinsic Height Rule.** Astro's `<Image>` emits intrinsic `width`/`height`
attributes, so any element given an `aspect-ratio` must also set `height: auto` or the
attribute silently wins and the ratio is ignored. Every constrained image in this
build carries both.

## Components

### Buttons
The one control shape on the page: a compact pill, never full-width, always in a
wrapping flex row with a 0.625rem gap.
- **Shape:** Fully pilled (`{rounded.pill}`), 1px transparent border so ghost and primary
  share an identical box.
- **Primary:** Bone fill, near-black text (`#0a0a0c`), `{components.button-primary.padding}`. One per
  view — the Email action. Its trailing arrow glyph slides 2px right on hover while
  the fill goes pure white.
- **Ghost:** 3% white wash with a hairline border; hover raises the wash to 7% and the
  border to `{colors.line-strong}`. Carries the secondary destinations (GitHub, LinkedIn) with
  a 15px inline brand SVG.
- **Motion:** 0.25s on the ease token (`cubic-bezier(0.16, 1, 0.3, 1)`); fully disabled under
  `prefers-reduced-motion`, including the arrow translate.

### Tags
Small factual chips listing a tech stack. They are data, not decoration.
- **Style:** 12px tertiary ink, a 1.8%-white wash, hairline border, 6px radius,
  `0.375rem 0.5rem` padding, in a wrapping flex row at 0.375rem gap.
- **State:** None. Tags are never interactive, never coloured, never categorised by
  hue, and never a filter control.

### Cards / Planes
The single container language on the page. Everything that isn't flat ground is a
plane at one of three tiers.
- **Corner style:** 14px.
- **Background + shadow:** per tier — see Elevation & Depth.
- **Border:** 1px hairline; the base tier brightens to `{colors.line-strong}` on hover, the sunken
  tier explicitly does not react to hover at all.
- **Internal padding:** `{spacing.card}` for work cards, `{spacing.plane-md}` for the
  sunken highlight, `{spacing.plane-lg}` for the contact close block.
- **Behaviour:** `isolation: isolate` with content at `z-index: 1`, the surface wash at 3 and
  the specular edge at 4, so light always falls above the fill and below the text.

### Address Link
The terminal element of the contact plane and the only link on the page set above
control size. Bone, `{typography.address}`, no `text-decoration`; it is underscored by
a real `border-block-end` in `{colors.line-strong}` at `0.25rem` clearance, going to
full bone on hover over 0.3s and not transitioning under reduced motion. Reserve this
treatment for a surface's single terminal call; never use it on an inline link.

### Navigation
There is no persistent nav. The monogram at top-left links to `#top`; the footer
colophon carries a three-item text nav (GitHub, LinkedIn, Email) at
`{typography.body-sm}` in secondary ink, going to full bone on hover, with no
underline at rest. Section reachability is by scroll, with `scroll-behavior: smooth`
disabled under reduced motion.

### The Raking Light (signature)
The page's signature motion. On a fine pointer, `pointerenter` sets `--lit: 1` and
each `pointermove` writes `--lx`/`--ly` in pixels inside a single rAF, against one
`getBoundingClientRect` taken on enter. The specular top edge brightens from
`rgba(255,255,255,0.16)` to `0.60` at the light's x-position, and a 22rem radial wash at
7% white fades in over the surface (0.45s). On the portrait, that wash sits at
`z-index: 5` with `mix-blend-mode: soft-light` so the light falls *on* the photograph
rather than behind it. The script exits immediately on touch devices and under
`prefers-reduced-motion` — where the resting light remains, unmoved.

### Hero Portrait (documented exception)
A raised plane used as a **mount, not a crop**: 7px of the plane's own surface shows
around the photograph, `aspect-ratio: 4 / 5`, the frame well clipped at
`{rounded.inner}`. Photographs are desaturated into the page
(`grayscale(0.5) contrast(1.05) brightness(1.02)`) and recover to full colour on
hover over 0.6s. Below 900px the mount takes the full column width
(`max-width: none`).

Every file in `src/assets/me/` is globbed at build time in filename order and
becomes an absolutely-positioned frame stacked in one well, the first marked active;
`portrait-cycle.ts` moves the active class every 5s with a 1.4s opacity cross-fade.
**This is a bounded, documented exception to the one-motion rule, not a second
signature motion.** It was requested explicitly after the cost was stated, and it is
fenced accordingly: it exits immediately with fewer than two photographs, exits under
`prefers-reduced-motion`, pauses via IntersectionObserver when off-screen, and pauses
on `visibilitychange` in a background tab. One photograph is in the folder today, so
the portrait ships static. The exception does not generalise — no other element on
the page may acquire an idle loop.

**The Shared Framing Rule.** The mount is fixed and every frame is cropped
`object-fit: cover` at `object-position: center 22%`. Frames must therefore share
similar framing — same subject scale, same eye line — or the cross-fade reads as a
jump cut instead of as the same material breathing.

### Browser Surfaces
The parts not drawn still carry the design: selection is 16% bone on white text;
the scrollbar is an 11px thin track on the ground with a `#2a2a31` thumb (`#3a3a44` on
hover) inset by a 3px ground border; the caret and `accent-color` are bone;
`color-scheme: dark`; link underlines sit at `0.22em` offset, 1px thick, in
`{colors.line-strong}`, going to `currentColor` on hover; `.meta` runs tabular numerals.

## Do's and Don'ts

### Do:
- **Do** place any new surface at one of the three existing tiers — sunken, base, or raised — and give it the plane's border, radius, specular edge, and shadow unchanged.
- **Do** keep the raking light present at rest: `--lx: 30%` / `--ly: 0%` are load-bearing defaults, and every new plane must look lit with no pointer and under `prefers-reduced-motion`.
- **Do** use `.meta` (mono, tabular) for dates, counts, durations, and locations, and `.label` (sans) for every category name, kind, and summary.
- **Do** separate wrapping inline lists with gap only, and constrain the list width so an odd count breaks evenly instead of stranding its last item.
- **Do** pair `aspect-ratio` with `height: auto` on any Astro `<Image>`, or the emitted intrinsic height wins silently.
- **Do** judge the gutter at 390px, where `5vw` is only 19.5px and the 1.5rem floor is the entire mobile margin.
- **Do** declare a nested radius as a literal token concentric with its mount (`{rounded.inner}` inside 7px), not as an inline `calc()`.
- **Do** judge the grain by measured pixel variance on empty ground, not by its opacity value.
- **Do** give every interactive element a reduced-motion branch that disables transforms and transitions, as every component here already does.
- **Do** keep body measure at 62ch and lede measure at 68ch.
- **Do** fence any idle motion the way the portrait cycle is fenced — reduced-motion exit, off-screen pause, background-tab pause — and only when the user has asked for it by name.

### Don't:
- **Don't** introduce a hue. No accent, no gradient, no coloured chip, no coloured border. The green dot is a status indicator at 7px and stays the only authored chroma.
- **Don't** put a small dim line above a heading. No kickers, no eyebrows, no all-caps category strips — at any size, even when the line is a full sentence.
- **Don't** set `mix-blend-mode: overlay` on the grain; against this ground it cancels the noise regardless of opacity.
- **Don't** drop the sunken tier below the ground colour. It must sit above `{colors.ground}` or it reads as a seam rather than as content.
- **Don't** darken the ground toward true black. At `#09090b` the offset shadows stop resolving and the whole elevation system flattens.
- **Don't** use `border-inline-end` as a list separator anywhere.
- **Don't** set a category name, a heading, or a person's name in mono.
- **Don't** add a fourth elevation tier, a second display-scale element, or a second primary button in one view.
- **Don't** treat the portrait cross-fade as licence for a second ambient animation. It is one bounded exception; the page's signature motion is still the raking light.
- **Don't** mix portrait frames of different crops or subject scales — the fixed mount and `object-position: center 22%` turn a framing change into a jump cut.
- **Don't** animate anything on load. The page must be complete and legible before any script runs.
