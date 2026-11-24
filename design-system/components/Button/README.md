# Button

Buttons for buying and navigating: forest-green primary, gold on ink bands, outline, band, and rust arrow links.

**Consumer provides:** `children` (label), `variant` (`primary` | `gold` | `outline` | `band` | `link`), `size` (`sm` | `md` | `lg`), optional `icon` / `iconAfter` icon names, `href` to render a link, `block` for full width, any native button props.

- `lg` + `icon="cart"` is the Add to cart button; one per product page.
- `sm` + `iconAfter="arrow-right"` is the card button (sentence/title case: “View Product”). `md` and `lg` are uppercase.
- `gold` only on `band` / `forest` grounds. Never gold on paper.
- `link` is the small rust caps link with an arrow (“SHOP FRESH →”) on paper.
- Don't put two primary buttons side by side; pair primary with `outline`.
