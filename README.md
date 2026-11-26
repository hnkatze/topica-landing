# Topica — landing

Sitio público de Topica: catálogo, inventario y facturación para comercios en
línea. Astro estático + Tailwind CSS v4, con el copy de la campaña
"El orden trae prosperidad". Todo el movimiento es CSS salvo dos scripts
pequeños y nativos.

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
design/v2-promo/                 export del mockup v2 (referencia visual, no código)
design/stitch/mercado-kraft.md   sistema del sitio anterior (histórico)
odd/tasks/                       especificación y estado de cada entrega
public/fonts/                    woff2 variable, subset latin
public/logo-topica-white.svg     logo: wordmark blanco, solo fondos ink
scripts/sync-fonts.mjs           copia los woff2 latin a public/fonts/
src/styles/global.css            entrada: Tailwind + las capas de abajo
src/styles/theme.css             tokens v2: color, tipografía, forma, elevación
src/styles/base.css              defaults de elemento y binding de familias
src/styles/v2.css                primitivas de layout/tipografía y breakpoints
src/styles/motion.css            keyframes, .tload, .reveal, .tcard, .tbtn, .puff
src/styles/fonts.css             @font-face auto-hospedado
src/content/landing.ts           todo el copy, los precios y el contacto
src/components/LineIcon.astro    registro de iconos de trazo
src/components/sections/         secciones de la página + AgendaModal + Fab
src/layouts/Layout.astro         head, preload de fuentes, skip link
src/pages/index.astro            composición de la página y JSON-LD
```

## Secciones

En orden de documento. Todas leen su copy de `src/content/landing.ts`.

| Componente         | Qué es                                                                |
| ------------------ | --------------------------------------------------------------------- |
| `MarqueeBar`       | barra verde fija arriba, 4 mensajes repetidos, `aria-label` propio    |
| `Header`           | sticky sobre ink: logo 40px, 3 links, CTA pill, disclosure ≤900px     |
| `Hero`             | `#hero`: h1 con acento, badge `DESDE` + precio, chips, countdown, arte |
| `Beneficios`       | `#beneficios`: 4 tarjetas (la de CAI es oscura, pill `Plan Pyme`)      |
| `BigMarquee`       | marquee rotado `-1.5deg`, 6 repeticiones, recortado en su contenedor   |
| `ComoFunciona`     | `#como-funciona`: 3 pasos numerados + CTA `Agenda una cita`            |
| `Planes`           | `#planes`: 2 planes, features marcadas incluidas/excluidas             |
| `CtaFinal`         | caja oscura `ctabox` con el CTA de cierre                              |
| `Footer`           | columnas `Página` / `Contacto`, legal, logo 44px                       |
| `AgendaModal`      | `<dialog>` con el formulario, el éxito y el fallback a WhatsApp        |
| `Fab`              | botón flotante `Agenda tu cita` (vive dentro de `AgendaModal`)         |

## Sistema de diseño

Los tokens están en `src/styles/theme.css` y son semánticos: el markup se lee
igual que el mockup. Paleta v2:

| Token         | Hex       | Uso                                                  |
| ------------- | --------- | ---------------------------------------------------- |
| `ink`         | `#16200c` | texto, header, hero, marquee grande, tarjeta oscura   |
| `ink-soft`    | `#4b5226` | texto ink intermedio                                 |
| `brand-500`   | `#12ab4d` | CTA sólido, fab, barra superior, pills de precio     |
| `brand-700`   | `#0b7a35` | eyebrows, tiles, números de paso, submit del modal   |
| `olive`       | `#636b32` | cuerpo, subheads, formas decorativas                 |
| `palm`        | `#cbc995` | subcopy del hero, `/mes`, links del footer           |
| `muted`       | `#8c8e6e` | features excluidas, placeholders                     |
| `paper`       | `#fafaf7` | fondo de página, tarjetas de paso, cierre del modal  |
| `card`        | `#ffffff` | tarjetas y campos                                     |

Las tintas (`hairline`, `palm-line`, `ink-overlay`, `glow`…) son los `rgba`
literales del mockup, con nombre.

Escala tipográfica. Plus Jakarta Sans 800 para títulos, precios y pasos;
Inter para cuerpo, labels, nav y botones:

| Token     | Valor                                      |
| --------- | ------------------------------------------ |
| `display` | 96px / 0.98, `-0.045em`                    |
| `h2`      | 44px / 1.1, `-0.03em` (CTA final 48px/1.08) |
| `h3`      | 22px / 28px                                |
| `price`   | 60px / 1, `-0.04em`                        |
| `step`    | 56px / 1, `-0.04em`                        |
| `lead`    | 21px / 31px                                |
| `sub`     | 18px / 28px                                |
| `meta`    | 15px / 22px                                |
| `eyebrow` | 12px / 700, `.08em`, mayúsculas            |

Breakpoints, los del mockup: **1180** oculta el arte del hero, **900** lleva
h1 a 56px y h2 a 36px y esconde los links del header (los sustituye un
`<details>` propio), **640** h1 40px / h2 30px, padding 20px y 64px, precio y
CTAs reducidos.

Layout y tipografía viven como primitivas en `src/styles/v2.css` para que los
componentes solo pongan estructura: `.pad`, `.sec`, `.wrap*`, `.h1`, `.h2`,
`.h3`, `.lead`, `.sub`, `.eyebrow`, `.pricepill`, `.desde` (estrella de 36
puntos con `clip-path`), `.timer-cell`, `.cardpad`, `.ctabox`, `.bigmarq`,
`.fab`, `.modalpad`, `.field`.

## Movimiento

`src/styles/motion.css`, sin librerías ni observers de scroll:

- **Keyframes** `t*` del mockup: `tstar`, `tfloat`, `tfloat2`, `tpulse`,
  `twob`, `tdraw`, `tin`, `tfade`, `tpop`, `tmarq`, `tspin`, `tring`,
  `tglow`, `tgift`. Solo animan transform/opacity, salvo el glow del hero.
- **`.tload`** — cascada de entrada con delays por elemento (`--load-delay`).
- **`.reveal`** — scroll-driven: `animation-timeline: view()` dentro de
  `@supports`. Sin soporte la clase no tiene reglas, así que el contenido se
  ve siempre; nunca hay estado oculto previo ni JS que lo revele.
- **`.tcard`** (`translateY(-6px)` + sombra) y **`.tbtn`** (`-2px` +
  `brightness(1.08)`), solo con `hover: hover`. **`.puff`** es el brillo
  plástico de las piezas del hero.
- `prefers-reduced-motion: reduce` apaga animaciones, transiciones y scroll
  suave de toda la página.

No existe `IntersectionObserver` para revelar secciones. El único JS de cliente
es el countdown del hero (en `Hero.astro`) y el script del diálogo de agenda.

## Iconos

`src/components/LineIcon.astro` es un registro fijo de trazos 24×24
(`stroke-width` 2 por defecto, tapas redondas) cuyos paths se inyectan con
`set:html` desde un record — nunca desde datos de usuario. Nombres:
`cart`, `box`, `globe`, `bag`, `shield`, `zap`, `clipboard`, `boxes`, `chart`,
`receipt`, `calendar`, `gift`, `mail`, `pin`, `close`, `check`, `checkCircle`,
`arrowRight`.

```astro
<LineIcon name="calendar" size={18} />
```

Sin icon font, sin fetch y sin dependencia de iconos. `@iconify-json/*` y
`astro-icon` siguen en `package.json` (e `icon()` en `astro.config.mjs`) por
herencia del sitio anterior; la landing ya no los usa.

## Conversión

El modal de agenda es un `<dialog>` nativo: `showModal()` da gratis la trampa
de foco, `Escape`, el fondo inerte y la devolución del foco al disparador. La
validación es la nativa (`required` en nombre, negocio y WhatsApp;
`reportValidity()` al enviar). Los toggles `Presencial` / `Virtual` son botones
con `aria-pressed`.

El submit no finge éxito: abre `https://wa.me/50499747054` en pestaña nueva con
un mensaje prellenado (nombre, negocio, WhatsApp, modalidad y plan) y solo
entonces muestra el estado de éxito. Si el navegador bloquea la ventana, el
formulario se queda y aparece el link directo a WhatsApp.

Después del footer el modal se abre solo **una vez por sesión**
(`sessionStorage`) 2s después de que el footer entra en viewport. Se cancela si
el usuario ya lo abrió o cerró, y queda desactivado con `prefers-reduced-motion`.

## Contenido y precios

Un solo módulo, `src/content/landing.ts`: el copy de todas las secciones, el
contacto (`brand`), el SEO y el enlace de WhatsApp. Los precios de lanzamiento
son `L 399` (Básico Emprendedor) y `L 699` (Pyme); `promo.fromPrice` alimenta
el badge del hero y el countdown, y `promo.bar.items` repite el mismo precio en
la barra superior. Para cambiar copy o precio se edita ese módulo: los
componentes no escriben texto.

## Assets

- `public/logo-topica-white.svg` — wordmark blanco del mockup. Solo sobre
  superficies ink; sobre claro no se usa.
- `public/fonts/*.woff2` — Plus Jakarta Sans, Inter y JetBrains Mono, subset
  latin, auto-hospedados y regenerables con `npm run sync-fonts`. El mono solo
  queda como default de `code`/`pre` en `base.css`; la landing no lo usa.
- `design/v2-promo/` — export del mockup (`LandingPromo.dc.html`) con los
  valores exactos. Es referencia, no código a copiar.

## Estado

Landing v2 completa según `odd/tasks/landing-v2-promo.md` (S1-S18). El sistema
`design/stitch/mercado-kraft.md` es histórico: se conserva como registro y ya
no define ningún token. Si un valor de diseño cambia, la fuente de verdad es
`src/styles/theme.css` más el mockup en `design/v2-promo/`.
