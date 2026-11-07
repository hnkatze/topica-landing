<!-- Stored verbatim from the Stitch project "Mercado Kraft"
     (projects/8776711151923067555). Token source for src/styles/theme.css.
     Screens: "Landing Informativa - Tu catálogo, inventario y envíos" and
     "(Con Motion & Guía)". Do not edit by hand; re-export from Stitch. -->

---
name: Mercado Kraft
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f493f'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#835425'
  on-secondary: '#ffffff'
  secondary-container: '#ffbf87'
  on-secondary-container: '#7a4b1e'
  tertiary: '#754f26'
  on-tertiary: '#ffffff'
  tertiary-container: '#90673c'
  on-tertiary-container: '#fff1e8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#f9ba82'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#683d0f'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  mono-correlative:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.04em
  mono-currency:
    fontFamily: JetBrains Mono
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system is engineered specifically for independent retail micro-merchants and growing family enterprises across Central and Latin America—entrepreneurs who process trade through WhatsApp direct messages, Instagram stories, counter-top sales, and open-air markets. 

The aesthetic philosophy bridges fiscal solidity with physical commerce. It repudiates sterile Silicon Valley SaaS tropes and bloated enterprise complexity in favor of an **Artisanal-Utilitarian** visual identity. Every interaction must feel tangible, trustworthy, and directly tied to physical goods, dispatch parcels, and real currency.

### Design Principles
1. **Physicality & Tactility:** Surfaces mirror physical dispatch packaging, ledger paper, and kraft shipping tags. Interface elements emulate physical receipts, waybills, and shelf labels.
2. **Fiscal Clarity & Radical Trust:** Critical transactional moments (SAR fiscal receipts, bank transfer captures, inventory adjustments) convey institutional reliability through deep forest tones and legible data displays.
3. **Frictionless Mobile-First Ergonomics:** Designed for high-stress, single-handed counter operations under direct sunlight on budget Android devices. Target touch states are oversized, highly contrasted, and clear of cognitive clutter.
4. **Anti-Corporate Directness:** Microcopy and visual signifiers bypass convoluted jargon. Statuses are expressed plainly: *Empacado*, *En Ruta*, *Cobrado*, *Sin Existencias*.

## Colors

The palette balances formal merchant governance with physical logistics surfaces.

### Palette Architecture
- **Primary (`#15803D` / Forest Green):** The anchor of fiscal health, bank-grade integrity, and operational movement. Used for primary execution targets, positive revenue indicators, successful checkout triggers, and verified tax authorizations. Deepened with `#14532D` for high-contrast active states.
- **Secondary (`#8B5A2B` / Kraft Tannin):** Evoking corrugated parcels, stamped carton shipping boxes, and warehouse craft. Used for logistical workflows, packing lists, consignment tracking, and warehouse shelf assignments.
- **Tertiary (`#D4A373` / Raw Manila):** Warm packaging cardboard. Deployed for subtle state highlights, waybill tag backgrounds, and informational logistics badges.
- **Dark Neutral (`#0F172A` / Ink Navy):** Pure deep pigment that replaces generic grays. Provides crisp contrast on utility screens, receipts, and order feeds.
- **Canvas & Neutral Surfaces:**
  - Base Background: `#FAF9F6` (Alabaster Linen) — avoids sterile screen glare under outdoor retail sunlight.
  - Surface Container / Card Base: `#FFFFFF` with `#E2E8F0` structural boundaries.
  - Logistics Surface Tint: `#F5EBE1` — applied contextually to fulfillment, parcel, and delivery states.
- **Functional Semantics:**
  - WhatsApp Integration: `#25D366` for direct chat shortcuts.
  - Pending Payment / Cash on Delivery: `#D97706` (Amber Ochre).
  - Critical Shortage / Dispute: `#DC2626` (Red Ochre).

## Typography

The type scale combines three purpose-built roles to enforce hierarchy, quick reading, and data verification:

- **Display & Sectioning (`Plus Jakarta Sans`):** Warm, geometric, and human. Its high x-height and open apertures maintain legibility on entry-level mobile screens without appearing stern or institutional.
- **Informational Narrative (`Inter`):** The workhorse for transactional records, customer messages, item descriptions, and form controls. Provides high optical neutrality.
- **Transactional Correlatives (`JetBrains Mono`):** Applied strictly to tabular numerals, CAI (Clave de Autorización de Impresión) fiscal numbers, tracking numbers, stock keeping units (SKU), and currency balances (e.g., `L. 1,450.00`). Fixed-width tracking prevents numeral misalignment during rapid mental calculation at checkout.

## Layout & Spacing

A structured fluid layout grounded on an 8pt spatial grid, with a strict 4pt baseline for compact component densities.

### Responsive Breakpoints
- **Mobile (`320px – 639px`):** Primary operating environment. Single-column fluid stack with fixed bottom sticky utility docks for checkout, order sharing, and cart confirmation. Margin is set to `1rem` with `0.75rem` card gutters to conserve screen width.
- **Tablet / POS Terminal (`640px – 1023px`):** Split-view paradigm. Left column (60%) handles catalog, inventory scanning, or order lists; right column (40%) locks the current active ticket or invoice slip.
- **Desktop (`1024px+`):** Fixed 12-column grid bounded to a `1200px` maximum viewport. Provides bulk inventory tables, CSV import workflows, and financial monthly summaries.

### Spatial Hygiene
- Components maintain minimum touch targets of `48px` (height and width) to avoid mis-taps during point-of-sale operations.
- Data density levels remain tight (`space-xs` and `space-sm`) within order item rows to display entire customer receipts without excessive scrolling.

## Elevation & Depth

Visual depth avoids excessive blurs and multi-layered float effects, which strain budget mobile chipsets and wash out under high ambient glare. Hierarchy relies on **tactile surface tinting, defined structural borders, and grounded contact shadows**.

### Elevation Scales
- **Surface Level 0 (Base Canvas):** `#FAF9F6`. The shop floor canvas. Flat, raw, and non-reflective.
- **Surface Level 1 (Card / Functional Ledger):** Solid `#FFFFFF` elevated via a crisp, hairline physical perimeter: `1px solid #E2E8F0`. Paired with a subtle bottom contact drop: `0px 1px 3px rgba(15, 23, 42, 0.08)`.
- **Surface Level 2 (Logistics / Parcel Modules):** Tinted kraft foundation (`#F5EBE1`) framed by `#E8D9C8`. Used for shipping updates, waybills, and courier delivery tags. Creates immediate visual separation from standard fiscal ledgers.
- **Surface Level 3 (Sticky Counter Actions & Modal Slips):** `#FFFFFF` paired with an anchoring structural shadow: `0px 8px 24px -4px rgba(15, 23, 42, 0.12), 0px 2px 6px -1px rgba(15, 23, 42, 0.06)` with a `1px solid #CBD5E1` top/outer boundary.

## Shapes

The geometric form factor is calibrated to **Soft (`roundedness: 1`)**. 

Sharp corners (`0px`) feel punitive, while high pill curves (`16px+`) waste layout surface and evoke consumer social software rather than commercial operational tools.

### Curvature Guidelines
- **Input Fields, Chips, & Small Buttons (`rounded`):** `0.25rem` (4px). Yields precise, clean touch boundaries reminiscent of paper ticket perforations and physical cash registers.
- **Cards & Order Slips (`rounded-lg`):** `0.5rem` (8px). Softens modular cards while preserving compact data bounding.
- **Logistics Waybills & Drawers (`rounded-xl`):** `0.75rem` (12px). Reserved for top sheet radius on mobile sliding receipt drawers.
- **Mono Tags & Fiscal Badges:** Strict `2px` or `4px` corner bevel to emulate physical cardstock labeling and industrial dispatch stickers.

## Components

### Buttons
- **Primary Action (Cobrar / Confirmar Pedido):** Solid `#15803D` background, `#FFFFFF` text in `Plus Jakarta Sans` semi-bold. Height `48px`. Hover/Active: `#14532D`. Zero box shadow; framed with an inner border of `1px solid rgba(255, 255, 255, 0.12)`.
- **Logistics / Waybill Action (Despachar / Empacar):** Solid `#8B5A2B` background, `#FFFFFF` text. Conveys non-monetary physical fulfillment.
- **WhatsApp Share Action:** Direct channel trigger using `#25D366` surface with white typography and custom chat messaging icon.
- **Secondary / Ghost:** Transparent background, `1px solid #CBD5E1`, text `#0F172A`.

### Chips & Badges
- **Status: Pagado (Paid):** Light tint `#DCFCE7`, border `#86EFAC`, text `#14532D`.
- **Status: Pendiente / Contra Entrega (Cash on Delivery):** Light tint `#FEF3C7`, border `#FDE68A`, text `#92400E`.
- **Status: En Ruta (Shipped):** Tinted kraft `#F5EBE1`, border `#D4A373`, text `#8B5A2B`.
- **Typography:** `label-md` with `font-weight: 600`. All uppercase tracking with `0.05em` letter spacing.

### Input Fields
- Built for fast, one-handed entry during conversations or checkout lines.
- Base height: `48px`. Padding: `0 12px`.
- Background: `#FFFFFF`. Border: `1.5px solid #CBD5E1`.
- Focus State: Border snaps to `#15803D` with an immediate `2px` outer aura of `rgba(21, 128, 61, 0.15)`. No default browser outlines.
- Numeric / Amount Input: Prefixed by the currency symbol (`L.` for Lempiras or `$` for USD) pinned in fixed `JetBrains Mono` bold typography.

### Lists & Order Lines
- Line items function as a live receipt strip.
- Alternating subtle rows or clean dividers (`1px solid #F1F5F9`).
- Left side: Item quantity badge (`JetBrains Mono`, background `#F1F5F9`, rounded `4px`) followed by product title and variant tag.
- Right side: Calculated price formatted to fixed 2 decimal places in `mono-currency`.

### Checkboxes & Radio Buttons
- Solid geometric boxes with `3px` corner radius.
- Inactive: `#FFFFFF` with `2px solid #94A3B8`.
- Checked: `#15803D` background housing a bold, crisp white check icon.
- Target hit zone: Minimum `44px x 44px` invisible padding bounds to ensure instant selection on lower-tier touchscreens.

### Cards & Dispatch Parcels
- **Standard Order Ledger Card:** Clean white container, `1px solid #E2E8F0` border. Top header features customer name and relative order time, middle section displays condensed item array, footer shows total sum and direct WhatsApp receipt generator button.
- **Logistics Parcel Waybill:** Surface tinted in `#F5EBE1` with a dashed/perforated separator line (`border-style: dashed`, `#D4A373`) dividing the delivery address from the fiscal total. Features barcode/tracking correlative in `JetBrains Mono`.

### Specialized Domain Components
- **SAR Correlative Stamp:** Institutional bordered banner detailing the fiscal range and CAI identifier for authorized invoicing compliance in Honduras.
- **Proof-of-Transfer Verification Box:** Specialized image thumbnail preview card that holds customer bank transfer screenshots with high-visibility zoom and quick-verify toggle buttons.