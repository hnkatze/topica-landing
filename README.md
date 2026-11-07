# Topica — landing

Sitio público de Topica: catálogo, inventario y envíos para comercios
independientes. Astro estático + Tailwind CSS v4 + CSS/JS nativo para el
movimiento.

## Comandos

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # build estático a dist/
npm run preview      # sirve el build
npm run sync-fonts   # re-copia los woff2 latin desde @fontsource-variable
```

## Estructura

```text
design/stitch/mercado-kraft.md   sistema de diseño de origen (Stitch, verbatim)
odd/tasks/                       especificación y estado de cada entrega
public/fonts/                    woff2 variable, subset latin
src/styles/theme.css             tokens: color, tipografía, forma, elevación, motion
src/styles/base.css              defaults de elemento y binding de familias
src/styles/motion.css            keyframes, .reveal, .press, .lift, reduced-motion
src/styles/fonts.css             @font-face auto-hospedado
src/scripts/motion.ts            IntersectionObserver de un solo uso
src/components/Icon.astro        primitiva de iconos (lucide + simple-icons)
src/layouts/Layout.astro         head, fuentes, skip link, boot de motion
src/pages/styleguide.astro       vitrina de tokens (/styleguide, noindex)
scripts/sync-fonts.mjs         copia los woff2 latin a public/fonts/
```

## Sistema de diseño

Los tokens provienen del sistema **Mercado Kraft** exportado de Stitch y viven
en `src/styles/theme.css`. La fuente de verdad completa está en
`design/stitch/mercado-kraft.md`; no editar ese archivo a mano. Los nombres
siguen los del sistema para que el markup de Stitch se pueda portar sin
traducciones.

- **Color:** `primary` / `primary-container` (acción sólida y su hover),
  `secondary` (logística), `tertiary` (waybills), y la escalera tonal de
  superficies en la que alternan las secciones: `background` → `surface-low` →
  `surface-container` → `surface-high`. El bloque de envíos es el único que usa
  `kraft-surface`. Estados: `paid`, `pending`, `whatsapp`, `danger`.
- **Tipografía:** `text-hero` y `headline-*` → Plus Jakarta Sans; `body-*` y
  `label-*` → Inter; `correlative` y `currency` → JetBrains Mono con cifras
  tabulares. Las familias se aplican solas, no hace falta escribir
  `font-display` a mano.
- **Forma:** `rounded-xs` (tags fiscales) a `rounded-xl` (waybills, CTAs). Touch
  targets: `h-touch` (48px) y `h-touch-min` (44px).
- **Elevación:** `shadow-card` (L1), `shadow-counter` (L3, acción fija),
  `shadow-paper` (maquetas del hero), `shadow-hairline` (borde interior de botón
  primario).

## Movimiento

Dos capas, sin librerías:

1. **CSS** — `animate-fade-up`, `animate-fade-in`, `animate-scale-in`, más los
   bucles del diseño (`animate-float-soft`, `animate-float-card`,
   `animate-radar`), `.press` (feedback al presionar), `.lift` (hover en
   tarjetas) y `.btn-shimmer` (barrido de luz en el CTA primario).
2. **JS** — un `IntersectionObserver` que revela `[data-reveal]` una sola vez,
   escalonable con `style="--i:2"`.

Todo respeta `prefers-reduced-motion`: el estado final se muestra de inmediato
y el contenido nunca queda oculto si el JS falla (la clase `motion-ready` la
pone el script).

## Iconos

`<Icon name="material-symbols:package-2" size={20} />`. Sets disponibles:
`material-symbols:*` para UI — la familia del diseño — y `simple-icons:*` para
marcas (WhatsApp). SVG inline en build: sin fetch, sin icon font, sin JS extra.
Marcas propias en `src/icons/`.

## Estado

Capa global lista. Las secciones de la landing se construyen en la siguiente
entrega — ver `odd/tasks/landing-foundation.md`.
