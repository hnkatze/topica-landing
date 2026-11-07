# landing-foundation

Global foundation for the Topica landing: design tokens, fonts, icons and motion primitives, extracted from the Stitch design system "Mercado Kraft". UI section components are a later feature.

## Specs

- **S1** — Design source: `"tenemos un diseno de la landing en stich"`. Stitch project `projects/8776711151923067555` ("Mercado Kraft"), screens `Landing Informativa - Tu catálogo, inventario y envíos` and its `(Con Motion & Guía)` variant. Tokens must come from that design system, never invented.
- **S2** — `"crear lo global primero, estilos animaciones y base de colores y funtes e iconos"`: global layer first — styles, animation primitives, color base, fonts, icons.
- **S3** — `"vamos a usar full tailwind y css y js para las animaciones"`: Tailwind for layout/utility styling; CSS + vanilla JS for motion. No motion library, no GSAP.
- **S4** — `"inicia el repo pls"`: initialize the git repository.
- **S5** — `"luego crear los componentes de la ui"`: UI section components come after this feature. Not part of it.

## Tasks

- [x] **T1** — Initialize the git repository on `main`. (S4) — inline (`git init`; the foundation commit is the first)
- [x] **T2** — Design tokens in Tailwind v4 `@theme`: brand colors, surfaces, semantic states, radii, shadows, spacing, motion, container. (S1, S2) — inline
- [x] **T3** — Self-hosted fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (correlatives). (S2) — inline
- [x] **T4** — Icon base: `astro-icon` + Iconify packs (lucide for UI, simple-icons for WhatsApp) behind one `<Icon>` primitive. (S2) — inline
- [x] **T5** — Motion base: CSS reveal/entrance utilities, `IntersectionObserver` script, global `prefers-reduced-motion` guard. (S3) — inline
- [x] **T6** — Wire `Layout.astro` (lang, meta, fonts, motion boot) + `/styleguide` token preview page. (S2) — inline
- [x] **T7** — Verify `astro build` + rendered styleguide, commit the foundation. — commit `feat(foundation): add design tokens, fonts, icons and motion layer`

## Log

- **L1** (user, verbatim) — `tenemos un diseno de la landing en stich, podriamos crear lo global primero, estilos animaciones y base de colores y funtes e iconos, u luego crear los componentes de la ui, vamos a usar full tailwind y css y js para las animaciones ahi tenemos skills para eso, e inicia el repo pls`
- **L2** (decision) — Token provenance: the Stitch `designMd` carries two palettes. The **prose** section is the designer's explicit intent and is what components reference (`#15803D` primary, `#8B5A2B` kraft, `#D4A373` manila, `#0F172A` ink, `#FAF9F6` alabaster canvas, `#E2E8F0` borders, `#F5EBE1` logistics tint, `#25D366` WhatsApp, `#D97706` pending, `#DC2626` shortage). The YAML frontmatter holds a Stitch-generated tonal set whose surfaces (`#faf8ff`, `#eaedff`) are cool-tinted and contradict the prose's "Alabaster Linen". Prose wins for brand and surface; the tonal set is preserved in `design/stitch/mercado-kraft.md` for reference. `--color-ink-muted` (`#3F493F`) is taken from the YAML `on-surface-variant` because the prose names no muted text color. The full export is stored verbatim in `design/stitch/mercado-kraft.md`.
- **L3** (evidence) — Stitch `get_screen` returns `htmlCode` empty for the motion screen (15 chars), so section markup is not extracted yet; the `designMd` is the authoritative token source. Screen HTML extraction belongs to the components feature.
- **L4** (decision) — Motion tier: CSS + `IntersectionObserver` only (web-animation-guide tiers 1-2), zero added motion dependencies, matching S3.
- **L5** (decision) — Hero scale: the design system tops out at `headline-xl` 32/40. No `display` size was invented for the hero; if the Stitch screen markup shows a larger hero, it is added when that section is built, not now.
- **L6** (evidence, T7) — `astro build` completes (2 pages, exit 0, no errors; only the `src/icons` scan warning, silenced by adding `src/icons/`). Rendered verification at 1440px and 390px on the preview build: all three woff2 return 200 and report `loaded`; computed `text-headline-xl` family is `"Plus Jakarta Sans Variable"` at weight 800; `text-currency` is `"JetBrains Mono Variable"`; `<html>` gets `motion-ready` and 8 `[data-reveal]` targets reveal to `is-visible` on scroll; no console messages; `scrollWidth === clientWidth` at 390px (no horizontal overflow). Fontsource packages moved to `devDependencies` and pinned behind `npm run sync-fonts` so the shipped woff2 files have a reproducible source.
- **L7** (evidence, S4) — Public GitHub repository created: https://github.com/hnkatze/topica-landing (`gh repo create --public --source=. --push`). Visibility `PUBLIC`, default branch `main`, `origin/main` tracks `d415e07`. Every commit is authored by the `hnkatze` git identity with no `Co-Authored-By` trailer.
