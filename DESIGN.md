---
version: alpha
name: Jonathan Huertas - Portfolio
description: Monochrome dark-first editorial portfolio for a frontend developer.
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  secondary: "#000000A6"
  tertiary: "#FFFFFF"
  neutral: "#FFFFFF"
  surface: "#F2F2F2"
  rule: "#0000002E"
  primary-dark: "#FFFFFF"
  on-primary-dark: "#000000"
  secondary-dark: "#FFFFFFA6"
  neutral-dark: "#000000"
  surface-dark: "#0F0F0F"
  rule-dark: "#FFFFFF2E"
typography:
  display:
    fontFamily: Geist Variable
    fontSize: 5.5rem
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.05em
  h2:
    fontFamily: Geist Variable
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  h3:
    fontFamily: Geist Variable
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: Geist Variable
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Geist Variable
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Geist Variable
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Geist Variable
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
rounded:
  none: 0px
  sm: 2px
  md: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-dark:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 12px
  surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  surface-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.sm}"
  link:
    textColor: "{colors.secondary}"
    typography: "{typography.body}"
  link-dark:
    textColor: "{colors.secondary-dark}"
    typography: "{typography.body}"
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  page-dark:
    backgroundColor: "{colors.neutral-dark}"
    textColor: "{colors.primary-dark}"
  divider:
    backgroundColor: "{colors.rule}"
  divider-dark:
    backgroundColor: "{colors.rule-dark}"
---

## Overview

A monochrome, dark-first portfolio for a frontend developer. Black is the page, white is the type, and hierarchy is carried by scale, rules and inverted blocks instead of color. The reading experience is closer to a well-set technical document than a card grid: quiet, high contrast, and deliberate. The one memorable moment is the oversized name in the hero, flanked by a fixed section index on wide screens.

## Colors

Two colors only: black and white. The site ships with `class="dark"` on `<html>`; the `-dark` tokens are the source of truth for the rendered page and the light set is their exact inversion. Secondary text is white at 65% opacity, not a grey pigment, so the palette stays strictly monochrome. Rules are white at 18% opacity. A full-width inverted block (white background, black type) is the only accent device, used once per page for the contact section. Status colors from shadcn remain untouched for form errors; they are semantic, not decorative. No hue is used for emphasis, links or focus.

## Typography

One family: Geist Variable, already installed. Display uses weight 600 with tight leading and negative tracking; body uses weight 400 at 1.5-1.6 leading. The display size is fluid via `clamp(3.5rem, 9vw, 7.5rem)` in CSS; the front-matter value is the desktop reference. Headings descend display > h2 > h3 without skipping. Labels are sentence case, never tracked-out all-caps. Metrics use `font-variant-numeric: tabular-nums`. Measure stays under 75 characters. Heading underlines use `text-decoration-skip-ink: auto`.

## Layout

Content lives in a 12-column grid inside a `1200px` max width, with `24px` inline padding on mobile and `40px` from `lg` up. Section rhythm is `96px` vertical on desktop, `64px` on mobile. The spacing scale is 4pt based: 4/8/16/24/40/64/96. On screens where the grid fits, a sticky index rail occupies the first two columns and content starts at column four; below that width the rail disappears and the existing mobile menu remains the only navigation. Content bleeds to the viewport edges; text and controls stay inside the margins.

## Elevation & Depth

No card shadows. Depth comes from three layers: page background, `surface-dark` (`#0F0F0F`) for raised surfaces, and a `1px` rule at 18% opacity for structure. The inverted contact block is a full-bleed layer, not a card. Borders communicate structure or focus state only.

## Shapes

Nearly square: `--radius` drops from `0.625rem` to `0.125rem`, so derived radii stay at 1-3px. Concentric radius rule applies - outer radius equals inner radius plus padding. Icons follow text weight: 1.5px stroke beside regular text, 2px beside semibold. Avatars and decorative dots stay circular only where they represent a person or a state.

## Components

Reuse the existing shadcn/base-ui primitives in `src/components/ui/`. `button` uses inverted filled treatment with no color change on hover - only opacity moves from 1 to 0.85. `card`, `badge` and `input` take the surface and rule tokens instead of hardcoded zinc values. `navbar` keeps its anchor links and mobile menu; the desktop index rail is an extension of it, not a second navigation system. `details` in experience stays native. Links describe their destination; no trailing arrow glyph and no "learn more" without a subject.

## Do's and Don'ts

- Do: use tokens for every color, radius and spacing step.
- Do: switch themes only through the `.dark` class; never mix `prefers-color-scheme` with a class.
- Do: keep all copy in sentence case.
- Don't: use zinc, slate or near-black pigments as substitutes for black.
- Don't: use a colored accent, gradient, soft grey shadow or uniform rounded-card kit.
- Don't: append arrows to links, middle dots between metadata, or all-caps eyebrows above headings.
- Don't: animate every section entrance; one orchestrated hero reveal only.
- Don't: commit `CV_EN.docx.md`; it is a local reference.

## Motion

One orchestrated hero entrance: three semantic chunks staggered by 100ms, translateY 8px to 0 with opacity 0 to 1, easing `cubic-bezier(0.2, 0, 0, 1)`, duration 300ms. Everything else responds to interaction with opacity or color transitions of 150ms or less. Press feedback is `scale(0.96)`. Motion is wrapped in `@media (prefers-reduced-motion: no-preference)`; under reduced motion the hero uses opacity only.

## Accessibility

Contrast is 21:1 for primary text and 7:1 for secondary text on black. Focus indicator is a 2px solid white outline with 2px offset in dark mode, checked against both page and inverted surfaces. Hit areas are at least 44px on touch and 40px on desktop. Keyboard order follows DOM order; the index rail uses native anchors. The skip link is the first focusable element. Headings form one h1 plus nested levels. `prefers-reduced-motion` is honored. Form errors keep a text cue, not color alone.

## Implementation

Astro 6 + React 19 + Tailwind v4 via `@theme inline` in `src/styles/global.css`, with shadcn/base-ui primitives. Tokens are declared as CSS custom properties in `:root` and `.dark` and exposed to Tailwind through `@theme inline`. `main.astro` sets `class="dark"` on `<html>`. Validation: `npx -p @google/design.md designmd lint DESIGN.md`, followed by `bun run lint`, `bun run typecheck`, format check and `bun run build`. Export check: `npx -p @google/design.md designmd export --format css-tailwind DESIGN.md`.
