# landing-sections

Build the Topica landing UI from the Stitch design "Mercado Kraft" (screen `Landing Informativa - Tu catálogo, inventario y envíos (Con Motion & Guía)`), against the copy spec `contenido.md` exported with that project.

## Specs

- **S1** — H1 exacto, del copy aprobado: `Vende en línea sin contratar a nadie.`
- **S2** — CTAs exactos: primario `Solicitar una demostración`, secundario `Ver precios`. Prohibido prometer registro autoservicio (`crear cuenta`): las cuentas se crean desde administración.
- **S3** — Bajada del hero, textual: `Tu catálogo digital, tu inventario, tu pedidos y tu facturación en regla, desde un mismo panel. Y cuando el pedido sale, nosotros lo guardamos, lo empacamos y lo despachamos: tú solo programas la salida.`
- **S4** — Anclas de navegación: `#catalogo`, `#inventario`, `#facturacion`, `#envios`, `#precios`, `#preguntas`.
- **S5** — Vocabulario prohibido en hero y cuerpo: `sistema`, `ERP`, `plataforma`, `integración`, `multi-tenant`, `API`, `dashboard`, `SKU`, `onboarding`, `escalable`.
- **S6** — Prueba social: `No hay testimonios todavía. No se inventan.` Mientras no existan, la sección se omite entera.
- **S7** — Valores `[DEFINIR]` (precios, unidad de almacenaje, plazos de catálogo, política de impago, contacto real) no se inventan: viven como marcadores explícitos en el módulo de contenido.
- **S8** — `[BLOQUEO]` de facturación: no afirmar envío automático al SAR en producción. La sección usa el copy del diseño marcado como pendiente de verificación.
- **S9** — Footer: logo, dirección de bodega/oficina, WhatsApp, correo, aviso de privacidad y la línea `Hecho en Honduras.`
- **S10** — Diseño: paleta tonal del sistema (`#faf8ff` canvas, `#f2f3ff`/`#e2e7ff` alternancia, `#f5ebe1` solo en envíos), tipografía Jakarta/Inter/JetBrains, iconografía Material Symbols, contenedor `max-w-7xl` (1280px), motion del diseño (float, radar-pulse, shimmer, reveal).

## Tasks

- [ ] **T1** — Alinear la capa global con el diseño renderizado: tokens tonales del sistema, escala hero 44/52, contenedor 1280, familia de iconos Material Symbols, keyframes del diseño. (S10)
- [ ] **T2** — Módulo de contenido tipado + `Nav` + `Hero` (con la maqueta de guía kraft y panel). (S1, S2, S3, S4, S7)
- [ ] **T3** — `TrustStrip` + `Problem` + `Layers` (`#catalogo`, `#inventario`). (S5)
- [ ] **T4** — `Logistics` (`#envios`, superficie kraft) + `Steps`. (S8-adyacente)
- [ ] **T5** — `Includes` + `Billing` (`#facturacion`) + `Audience`. (S8)
- [ ] **T6** — `Pricing` (`#precios`) + `Faq` (`#preguntas`) + `Demo` + `Footer`. (S6, S7, S9)
- [ ] **T7** — Verificar build + capturas desktop y mobile, y cerrar.

## Log

- **L1** (user, verbatim) — `vamos con la ui entonces`
- **L2** (evidence) — `get_screen` devuelve `htmlCode` como **objeto** `{downloadUrl, mimeType, name}`, no como string; por eso la lectura anterior lo reportó vacío. `download_file` con el `name` del archivo entrega el HTML (90 KB) y el screenshot (2560x12774). Exportados a `.stitch-ref/` (gitignored) y troceados por sección.
- **L3** (corrección de L2 de landing-foundation) — La decisión previa "gana la prosa, canvas #FAF9F6" queda revertida por evidencia: el muestreo de píxeles del screenshot renderizado da `#faf8ff` (canvas), `#f2f3ff`, `#e2e7ff`, `#f5ebe1` (solo envíos), `#131b2e` (texto), `#15803d` (verde de acción) y `#ffffff` (tarjetas). El diseño construido usa la **paleta tonal**, no el alabaster. Los tokens se renombran a los del sistema (`primary`, `primary-container`, `surface-*`, `on-surface*`, `outline*`) para que el markup de Stitch se pueda portar sin traducciones.
- **L4** (decision) — CTA y anclas salen del copy aprobado (`contenido.md`), no del markup: el markup arrastra la marca de ejemplo "Enlace" y un `#inventario` sin sección propia.
- **L5** (decision) — Iconografía: Material Symbols, la familia que usa el diseño (`material-symbols-outlined`), en lugar de lucide.
- **L6** (decision) — El acordeón del FAQ anima `grid-template-rows` (`0fr` → `1fr`), que es una propiedad de layout y por tanto una excepción deliberada a la regla de animar solo transform/opacity: es la técnica accesible estándar para altura automática y el diseño la usa.
- **L7** (decision) — Se trabaja inline y no con writers paralelos: cada sección depende del mismo markup de referencia y del mismo vocabulario de primitivas, y la coherencia visual pesa más que el paralelismo.
