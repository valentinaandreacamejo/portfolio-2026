---
name: Portfolio 2026 — Valentina Andrea Camejo
description: Front-end Developer & UX Engineer portfolio where fashion meets code.
colors:
  paper: "#fafafc"
  ink: "#121316"
  acid-lime: "#ccff00"
  hot-pink: "#ec4899"
  electric-violet: "#7c3aed"
  pool-cyan: "#06b6d4"
  frosted-card: "rgba(255, 255, 255, 0.9)"
  hairline: "rgba(0, 0, 0, 0.08)"
  status-ok: "#16a34a"
typography:
  display:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(3rem, 10vw, 9rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "28px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(80px, 12vw, 160px)"
  section-head-gap: "clamp(40px, 6vw, 72px)"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.acid-lime}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1em 1.6em"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1em 1.6em"
  button-ghost-hover:
    backgroundColor: "{colors.acid-lime}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "transparent"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.9em"
  chip-category:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.25em 0.7em"
  card-project:
    backgroundColor: "{colors.frosted-card}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.45rem"
  nav-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.acid-lime}"
  contact-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
---

# Design System: Portfolio 2026 — Valentina Andrea Camejo

## Overview

**Creative North Star: "The Dual Soul Studio"**

A single studio with two workbenches. On one side the editorial bench: oversized Syne headlines, stickers, tilted tickers, colour used like fabric swatches pinned to a mood board. On the other the engineering bench: Space Mono labels and controls, 2px ink borders, tidy grids that never break on a 320px phone. The two benches share one floor: cool off-white paper, near-black ink and four loud accents. Neither soul wins; every surface should show both.

The physical language is tactile and brazen. Buttons, cards and badges behave like printed objects: solid 2px ink outlines, hard offset shadows with no blur, and a hover that lifts the object up and to the left so its shadow shows. Motion is springy and quick on objects, and the page has exactly one authored entrance: the hero, once per visit. Sections don't animate in on scroll, and nothing loops except the ticker. Density is generous: sections breathe with up to 160px between them, and type does most of the work.

The system has no gradients, blurred colour blobs, frosted glass or soft coloured glows: the `--gradient-hero` token and `gradient-text` mixin were deleted. The only blurs left are functional (the sticky header and dialog backdrops); the only gradients are the material rendering of the Off-Duty music player and the faint diagonal stripes on lime blocks.

**Key Characteristics:**
- Paper and ink base, four accents rotated per item through a local `--accent` variable.
- Syne 800 at poster scale with tight, negative tracking; mono for every label and control.
- Hard offset shadows (no blur) as the signature depth cue; pill shapes for controls, large soft corners for containers.
- Sections open straight on the headline, with no eyebrow or number; ticker bands tilted ±1–1.5° as section breaks.
- Pointer-driven 3D tilt on hero and project cards, disabled on touch and under reduced motion.

## Colors

A cool paper-and-ink base carrying four saturated, almost fluorescent accents that never appear as large background washes except on deliberate blocks (ticker, contact panel, project cover).

### Primary
- **Acid Lime** (`acid-lime`): the signature. Primary-button label on ink, ghost-button hover fill, language switcher active state, availability badge, top ticker band, text selection. Always paired with ink, never with white.

### Secondary
- **Hot Pink** (`hot-pink`): punctuation. Logo slash, ticker separators, primary-button hover shadow, contact card variant, hero sticker.

### Tertiary
- **Electric Violet** (`electric-violet`): the system's "attention" colour. Focus outlines (3px, 3px offset), organisation names in the timeline, header badge slash.
- **Pool Cyan** (`pool-cyan`): fourth accent in the rotation; project covers, skill groups, contact card variant, hero sticker.

### Neutral
- **Paper** (`paper`): page background and inverted text on ink.
- **Ink** (`ink`): text, all structural borders, hard shadows, primary-button fill, the contact panel. Secondary text is ink mixed down to 70%; tertiary to 60%.
- **Frosted Card** (`frosted-card`) and **Hairline** (`hairline`): card surface and 1px separators (header bottom border, quiet pills).

### Named Rules
**The Rotating Accent Rule.** Items in a collection (projects, story chapters, skill groups, outfits, interview entries) each take one accent via `.accent-{violet|pink|lime|sky}`, which sets `--accent` and `--on-accent`. Components read `var(--accent)`; they never hard-code an accent.

**The Lime-on-Ink Rule.** Acid Lime carries ink text and ink outlines only. Lime text on paper or white is illegible and forbidden.

**The Ink-on-Accent Rule.** Text on an accent fill is ink, except on Electric Violet, which takes white (≈5.7:1). White on Hot Pink (≈3.5:1) or Pool Cyan (≈2.4:1) fails AA and is not used. `.accent-*` sets `--on-accent` accordingly.

## Typography

**Display Font:** Syne (with metric-matched `Syne Fallback`, system-ui)
**Body Font:** Plus Jakarta Sans (with metric-matched `Plus Jakarta Sans Fallback`, system-ui)
**Label/Mono Font:** Space Mono

**Character:** Syne at 800 is the fashion soul: wide, eccentric, poster-loud. Space Mono is the engineering soul: every tag, button and nav link speaks in uppercase mono. Plus Jakarta Sans sits between them as a calm, readable body voice.

### Hierarchy
- **Display** (Syne 800, clamp 3rem→9rem, line-height 0.95, tracking −0.03em): hero and page titles; Off-Duty title and footer signature push further (up to 11rem).
- **Headline** (Syne 800, clamp 2.25rem→5rem): section titles, capped around 16ch, `hyphens: auto`; one emphasised word per title via `<em>`, in solid Hot Pink.
- **Title** (Syne 800, clamp 1.5rem→2.25rem): card and chapter titles.
- **Body** (Plus Jakarta Sans 400, 1rem, line-height 1.6): running text; leads at 1.1rem capped at 38rem (~75 characters), in ink at 70%. Measures use `rem`, not `ch`: Plus Jakarta's "0" is 1.6× its average letter.
- **Label** (Space Mono 700, 0.68–0.85rem, tracking 0.02–0.12em, uppercase): buttons, nav, tags, look numbers, captions, dates.

Each web font has a local fallback (`@font-face` in `src/styles/_typography.scss`) stretched with `size-adjust` and ascent/descent overrides to the real face's metrics, so the font swap causes no layout shift. Re-measure the values if a family or weight changes.

### Named Rules
**The Two Voices Rule.** Headlines are Syne, controls and metadata are Space Mono, prose is Plus Jakarta Sans. No fourth voice, and never body text in mono or labels in Syne.

**The One Emphasis Rule.** A headline highlights exactly one word or short phrase (`<em>`, upright, never italic) in a solid colour. Never a gradient.

## Layout

Single centred container, max 1280px, with a fluid gutter (16px→48px). Sections are separated by fluid vertical space (80px→160px), and every section opens with the same section head: Syne headline, optional lead, then 40–72px before content.

Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px, used mobile-first through the `up()` mixin. Grids always use `minmax(0, 1fr)` tracks so long translated words (IT/ES/EN) never widen the page; `overflow-x: clip` on html/body is a safety net, not a layout tool. The hero splits 1.1fr / 0.9fr from lg; contact cards go 1 → 2 → 3 columns. Anchored sections clear the 72px sticky header via `scroll-margin-top`.

## Elevation & Depth

Depth is printed, not lit. The system is flat at rest and expresses elevation with hard, zero-blur offset shadows in ink or an accent, revealed when an object is lifted on hover. There are no soft or blurred shadows anywhere.

### Shadow Vocabulary
- **Lift — small** (`box-shadow: 3px 3px 0` / `4px 4px 0` ink): buttons on hover, hero stickers at rest.
- **Lift — medium** (`6px 6px 0`): contact cards on hover (paper on the ink panel), Off-Duty controls.
- **Lift — large** (`8px 8px 0` / `10px 10px 0` in ink or `var(--accent)`): project cards, lookbook and interview frames.
- **Inset outline** (`inset 0 0 0 1.5px` ink): active pills inside the header (language switcher, Off-Duty link) where a border would shift layout.

### Named Rules
**The Printed Shadow Rule.** New shadows are solid offsets, down-right, with zero blur, in ink or the item's accent. If it needs a blur radius, it does not belong to this system.

**The Lift Rule.** On hover an object translates up-left by the same amount its shadow grows (e.g. −3px/−3px with a 4px shadow) and returns to rest on `:active`.

## Shapes

Two families. Controls are pills (999px): buttons, tags, chips, language switcher, badges, stickers. Containers have large soft corners (28px): project cards, contact panel, hero frame; inner cards step down to 16px; nav hover backgrounds use 8px. Structural edges are 2px ink lines (cards, buttons, ticker bands, footer rule); 1px hairlines only for quiet separators. Circles appear only as dots and blurred blobs. Tilted bands (−1.5° and +1°) are the one recurring non-orthogonal form.

## Components

### Buttons
Tactile, uppercase mono, pill-shaped.
- **Shape:** full pill, 2px ink border, padding 1em × 1.6em, Space Mono 700 at 0.85rem, tracking 0.06em.
- **Primary:** ink fill, Acid Lime label. Hover lifts with a Hot Pink offset shadow.
- **Ghost:** transparent with ink label; hover fills Acid Lime and lifts with an ink shadow.
- **Motion:** transform on the spring curve (0.35s), shadow on ease-out-expo; `:active` snaps back flat.
- **Focus:** 3px Electric Violet outline, 3px offset.

### Chips & Tags
- **Tag:** transparent, 1px border in `currentColor`, pill, uppercase mono 0.75rem.
- **Category chip:** ink fill, paper text, pill, mono 0.7rem.
- **Filter / switcher:** pill group framed by a 1.5px ink border; the active item fills Acid Lime with an inset ink outline.

### Cards / Containers
- **Project look (lookbook item):** a real capture of the live site in a 16px-radius, 2px ink frame (4:3; 16:10 for the featured look). On hover the frame lifts and takes a 10px printed shadow in the project's own brand colour (`--look`, first palette swatch) while the capture scrolls 22% down the page. Credits underneath: mono "Look 0N / 05" plus a "Self-initiated concept" pill, Syne title, subtitle, description, a fabric-swatch strip of the site's real colours, tags, and a "Visit site ↗" cue. One stretched title link = one tab stop. The first look is a full-width spread (side by side from lg); the rest sit in two columns with the right column dropped for an editorial stagger.
- **Contact panel:** a flat ink block with 28px corners (no glow) holding 16px-radius tiles (lime, cyan, pink) with ink text that lift with a paper shadow. The email tile is a stretched `mailto:` link with a separate "Copy address" button above it.
- **Story chapters and education:** ruled, not boxed. 2px ink rules separate chapters; education is a compact two-column index.
- **Internal padding:** 1.5rem standard.

### Navigation
- **Header:** sticky, 72px tall, paper at 80% with blur and a hairline bottom border. Logo in Syne 800 uppercase with a pink slash.
- **Links:** Space Mono 700 uppercase 0.75rem, no brackets, in the same order as the page sections; hover and focus invert to ink with Acid Lime text.
- **Off-Duty link:** promoted to an ink pill; Acid Lime with ink text on hover/active.
- **Mobile:** below lg a two-line burger morphs into an X; the menu drops down from the bar with a fade and an 8px slide.

### Ticker
Two full-bleed marquee bands as section dividers: lime band tilted −1.5°, ink band tilted +1° running in reverse. Syne 800 uppercase items with pink separators; paused on hover.

### Section Head
Syne headline capped at 16ch with one emphasised word in Hot Pink, lead in ink at 70% capped at 38rem (~75 characters). No eyebrow, kicker or section number above it: the headline carries its own weight.

## Do's and Don'ts

### Do:
- **Do** give every collection item an accent through `.accent-*` and read `var(--accent)` in the component.
- **Do** express elevation with a solid, zero-blur offset shadow in ink or the accent, paired with an equal up-left lift on hover.
- **Do** use 2px ink borders for anything the user can grab or click, and pills for every control.
- **Do** write labels, buttons and nav in uppercase Space Mono, and headlines in Syne 800 with −0.03em tracking.
- **Do** build grids with `minmax(0, 1fr)` and test copy in all three languages at 320px.
- **Do** show focus with a 3px Electric Violet outline, gate hover motion behind `(hover: hover) and (pointer: fine)`, and give every animation a `prefers-reduced-motion` variant.

### Don't:
- **Don't** add scroll reveals, hover spotlights or infinite loops (pulses, pings); the hero entrance is the page's one choreographed moment.
- **Don't** use blurred colour blobs, gradient text or fills, frosted-glass frames or soft coloured glows.
- **Don't** put an eyebrow, kicker or `(0N)` section number above a heading.
- **Don't** put lime text on paper or white, or white text on Pool Cyan or Hot Pink.
- **Don't** stand Unicode glyphs or emoji in for icons, or present the concept projects as client work.
- **Don't** use blurred drop shadows as elevation.
- **Don't** introduce a fourth typeface or set prose in mono.
- **Don't** hard-code an accent inside a reusable component.
