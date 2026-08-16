# Amalfi Hardware Design System

## Company & product context

Amalfi Hardware is a distributor of fine faucets and fixtures — brass and bronze plumbing hardware, sinks, bath fittings, and architectural fittings sold through a showroom/trade model to architects, designers, and builders rather than direct retail.

**Design direction source:** this system takes extensive stylistic and structural direction from **AF | New York** (https://afnewyork.com), a century-old Flatiron District distributor of fine faucets and fixtures that Amalfi Hardware's business model mirrors closely. Pages read for this project: home, `/brands/`, `/design/`, `/heritage/` (fetched as rendered text on 2026-08-16; no Figma file or codebase was attached, so no CSS/typography/imagery could be inspected directly — palette, type, and layout below are an original interpretation of the brand's *editorial, architectural, materials-first* tone, not a pixel copy of AF | New York's site).

Key facts pulled from the reference site, informing this system:
- Positioning line: "distributors of fine faucets and fixtures," with copy built around "architectural artforms" and bespoke, made-to-order product.
- The business is a curated **multi-brand distributor** — the reference site lists 100+ manufacturer brands (Dornbracht, Grohe, Kohler, Rohl, Waterworks-style luxury brands, Toto, Duravit, Perrin & Rowe, Graff, etc.) shown as a browsable brand wall, plus one house collection (their "DaVinci Collection"). Amalfi Hardware's UI kit reuses this same catalog/showroom structure: a Brands grid, a Showroom/Projects gallery, and a Design/Heritage editorial narrative.
- Tone is trade-facing and heritage-driven: family-owned across four generations, showroom by appointment, "the smaller the detail, the more it matters."
- No logo file, icon set, or font files were provided anywhere in this project — see Iconography and Visual Foundations for how that gap was handled.

## Content fundamentals

- **Voice:** confident, understated, editorial — closer to an architecture monograph than a retail site. Declarative sentences, often short and stacked as standalone lines ("Architectural artforms." / "Distributors of fine faucets and fixtures.").
- **Person:** speaks in first-person plural about the company ("we collaborate," "our process is seamless") and addresses the reader as "you" only in service language ("your choice of materials"). Never uses "I."
- **Casing:** sentence case throughout, including headlines — no title case, no all-caps body copy. All-caps is reserved for small trade-style CTA links, tracked out with letter-spacing (e.g. "VIEW PRODUCT LINE +", "SCHEDULE A CALL +").
- **Line style:** copy leans on plain-spoken abstractions paired with a concrete anchor — "It's not just more — it's the right more." Quotes from named principals are used as anchoring, almost mission-statement content.
- **Length:** short. A section rarely runs more than 2–3 sentences before handing off to a link or a product wall. No FAQ-length explaining.
- **Numerals & dates:** used plainly for heritage/timeline content (1922, 100th anniversary) — history is a feature, not filler.
- **Emoji:** never.
- **CTA style:** verb-first, terse, small caps with a trailing "+" glyph rather than an arrow icon: "Learn more", "VIEW PRODUCT LINE +", "SCHEDULE A CALL +".
- **Vibe in one line:** a century-old family trade house that talks like a design monograph, not a hardware catalog.

## Visual foundations

No CSS, Figma, or screenshots were available to inspect directly (text-only page fetch), so the palette/type/motion system below is an **original system built for Amalfi Hardware**, art-directed to the reference brand's stated tone (architectural, bespoke, materials-first, four-generation heritage) rather than measured off AF | New York's actual stylesheet. Treat every value here as a starting point to correct once real brand assets exist.

- **Color:** a warm, low-saturation stone/ivory neutral scale (`--stone-50`…`--stone-950`, built in OKLCh so the ramp stays perceptually even) carries almost all surface and text color — this is a materials palette, not a "brand blue" palette. One accent, **aged bronze** (`--bronze-100`…`--bronze-800`), stands in for the brass/bronze hardware finishes Amalfi sells and is used sparingly: links, small CTAs, focus rings, active states. No second accent hue — resist adding blue/green "info/success" colors; semantic success/danger exist only for functional UI (form validation) and stay desaturated.
- **Type:** two families only. **Spectral** (serif, light/regular weights, occasional italic for pull quotes) carries all display and heading roles — it reads as an architecture-monograph serif, mixing well with black-and-white product photography. **Work Sans** (sans, 300–600) carries all UI and body copy — neutral and quiet so it never competes with the serif headlines. No third font, no display-weight sans headlines.
- **Spacing:** a single 4px base scale (`--space-1` = 4px up to `--space-40` = 160px). Sections breathe — generous vertical rhythm (`--space-20`/`--space-24`/`--space-32` between sections) is what makes the system feel upscale rather than dense.
- **Backgrounds:** ivory/stone flat fields, not white — `--surface-page` is a warm off-white, never pure `#fff` except on elevated cards. Full-bleed black-and-white (or heavily desaturated) product/interior photography is the primary decorative device; no illustration, no repeating pattern/texture, no gradients as backgrounds.
- **Imagery color vibe:** monochrome or near-monochrome architectural/product photography — cool concrete, brass highlights, deep shadow. Warm-neutral grading, not blown-out white studio shots. (Placeholders only — see Iconography/Assets; no real photography was provided.)
- **Animation:** minimal and quiet. Only fades and short opacity/translate-Y entrances on scroll, `--duration-base` (220ms) with `--ease-out`. No bounce, no springy overshoot, no parallax gimmicks — motion should feel like a page turning, not an app.
- **Hover states:** color-based, not scale-based. Links and text CTAs darken (`--accent` → `--accent-hover`) or underline-expand; buttons shift background one step down the bronze ramp. Photography may fade to a slightly lower opacity on hover for "view project" style tiles.
- **Press/active states:** one step further down the same ramp (`--accent-press`) plus a 1px inset shadow feel — no scale/shrink transforms, which would feel too "app-like" for this brand.
- **Borders:** hairline (`--border-width: 1px`), always low-contrast stone (`--border-subtle`), reserved for dividers and input fields. Never a heavy or colored border.
- **Shadows:** very soft and shallow (`--shadow-sm/md/lg`), warm-tinted (built from the stone-900 hue, not pure black) — used on elevated cards and modals only, never on flat content blocks.
- **Corner radii:** nearly square. `--radius-sm` (2px) on inputs/tags, `--radius-md`/`--radius-lg` (3–4px) on buttons and cards, `--radius-pill` reserved for tags/badges only. This is a deliberate rejection of the rounded-corner SaaS look — architectural hardware brands read as precise, not soft.
- **Cards:** flat ivory/white panels, hairline border OR soft shadow (not both at full strength), square-ish corners, no colored left border accent.
- **Transparency & blur:** used only for the sticky header (a translucent ivory scrim over photography) and modal/overlay scrims — never decoratively.
- **Layout:** wide, editorial, generous side margins (`--container-pad`), max content width `--container-max` (1440px). Fixed elements limited to the header/nav; no floating chat bubbles or sticky CTAs.

## Iconography

No icon font, SVG sprite, or icon library was found in any provided source (no codebase or Figma was attached — direction came from a marketing site read as text only, which carries no visual assets). Rather than hand-drawing icon glyphs, this system uses **Lucide** (https://lucide.dev, MIT-licensed, CDN-linked) as a stand-in icon set — flagged here as a substitution, not a brand decision. Lucide's thin, precise stroke reads compatibly with the hairline-border, architectural feel described above.

- Load via CDN: `<script src="https://unpkg.com/lucide@latest"></script>` and `lucide.createIcons()`, or inline `<svg>` symbols copied from the Lucide set as needed.
- Usage: navigation chevrons, the "+" affordance on trade-style CTAs, filter/sort icons in the Brands directory, social icons (Facebook/Instagram/LinkedIn) in the footer.
- No emoji anywhere, per Content fundamentals.
- No unicode-character icons — where the reference site uses a plain "+" glyph, that is treated as typography, not iconography, and is set in the body font, not an icon font.
- **Substitution flag:** if a real icon set or font exists in Amalfi Hardware's actual brand kit, replace `assets/icons/` and the Lucide CDN reference with it.

## Assets

`assets/` contains no logo. **No logo file was provided by any source** (the reference site's `<img>` logo could not be downloaded — only its page text was fetched — and it is a different company's mark regardless). Per design-system policy, no logo was invented or approximated. Every place a mark would sit instead renders the wordmark **"Amalfi Hardware"** in `--font-display` (Spectral), sentence case, letter-spaced slightly wide — see `brand/wordmark.card.html`. Flag: **please attach a real logo/mark file (SVG preferred) and we will wire it in everywhere the wordmark currently stands in.**

No photography, product imagery, or brand illustration was provided either. UI kit screens use labeled gray placeholder blocks (`assets/placeholder-photo.svg`, an intentionally plain rectangle, not a rendered scene) rather than invented product photography — a distributor's product photography must be real. Flag: **please attach real product/showroom photography; the catalog and hero surfaces are the highest-value places to drop it in.**

## Index

- `styles.css` — root stylesheet, imports every token file below. Link this one file.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` — CSS custom properties.
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand groups) shown in the Design System tab.
- Components (standard set — no codebase/Figma inventory was provided, see note below):
  - `components/core/` — Button, IconButton, Badge, Card
  - `components/forms/` — Input, Select, Checkbox, Radio, Switch
  - `components/navigation/` — Tabs
  - `components/feedback/` — Dialog, Tooltip
  - `components/commerce/` — ProductCard, BrandTile (catalog/brand-wall tiles specific to the distributor model)
- `ui_kits/showroom/` — click-through recreation of the marketing/trade site: home, Brands directory, Design (editorial + heritage), Showroom/Project detail.
- `assets/` — `placeholder-photo.svg` only; no logo (see Assets above).
- `SKILL.md` — portable skill definition for use in Claude Code or elsewhere.

**Intentional additions:** no source defined a component inventory (no attached Figma/codebase), so a standard primitive set was authored from scratch, sized to what the Showroom UI kit needs (product/brand cards, filter chips, appointment-request forms, editorial callouts).

---

**Usage note:** when asked to create HTML designs for this project, follow the voice, color/type/spacing tokens, iconography, and layout rules above. Use the ivory/stone + bronze palette, Spectral + Work Sans typefaces, Lucide icons, hairline borders, and square-ish corners described here rather than defaults.
