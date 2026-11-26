# Landing v2 · Promocional (El orden trae prosperidad) — design reference

This is a design mockup created in a visual design tool, exported as a
standalone page. Treat it as a REFERENCE MOCKUP, not production code:
the markup and inline styles carry the design's precise values — colors,
font sizes, spacing, radii, shadows, layout — which an implementation
should replicate faithfully in its own components and styling system
rather than copy wholesale.

## Contents

- `LandingPromo.dc.html` — the artboard (a Design Component: an `<x-dc>`
  template + a small logic class). The values to replicate live in its
  inline `style="…"` attributes and the `<helmet><style>` block.
- `assets/` — files uploaded to the design (images, fonts, media)
- `support.js`, `vendor/react*.js` — the runtime that renders the
  component in a browser; not part of the design.

## Uploaded files

Images, fonts and media uploaded to the design are written once each under
`assets/` — 1 in this export — and the exported files refer to them there. A
reference a script puts together while the page runs (for example
`"/_blob/" + id`) is not rewritten and does not load from this folder.

## Viewing

Serve the folder (e.g. `python3 -m http.server`) and open `LandingPromo.dc.html`;
some browsers block the scripts over file://.

## Qué se guardó en el repo

Solo el artboard (`LandingPromo.dc.html`), sus `assets/` y este README. El
runtime del export (`support.js`, `vendor/react*.js`) se descartó: reproduce el
componente en un navegador, no documenta el diseño. Los valores que importan
viven en los `style="…"` del artboard y en su bloque `<helmet><style>`.
