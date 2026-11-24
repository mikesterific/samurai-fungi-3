Samurai Fungi sells fresh mushrooms, grow kits, cultures and the MyPothecary line of mushroom extracts. The look is **Japanese ink on rice paper**: a warm cream ground, black sumi brush strokes, deep forest green for action, gold accents on ink bands and a single hanko-red rising sun. Load `tokens.css`, `components/bundle.css` and `components/bundle.js` (`window.SamuraiFungi`), then compose pages from the components.

![Home mockup](/_blob/d74fe750805c3b03e55739031642cbf5)

## Content fundamentals

- **Voice:** calm, grounded and plain-spoken; craft over hype. Say what we do and how: “Small-batch mushroom extracts crafted with traditional wisdom, modern methods, and transparent process.”
- **Claims stay conservative.** Use “supports” and “helps support”, never “cures”, “treats” or “boosts”. “We keep our claims conservative and our process transparent. Research on Lion's Mane is promising and still evolving.” Every supplement page ends with the `Disclaimer`.
- **We / you:** the company is “we/our”; the reader is “you”, used sparingly.
- **Casing:** headings and product names in Title Case (“Shop Extracts”, “Lion's Mane”). Navigation, eyebrows, `md`/`lg` buttons and tile links are uppercase (CSS does it; write them in Title Case). Card buttons stay Title Case (“View Product”).
- **Product naming:** `Name` + line on the next line in italics: “Lion's Mane / Ultrasound Dual-Extract”, “Core Five Blend / Mushroom Blend”. Use a real apostrophe (’).
- **Recurring proof points:** Fruiting Bodies Only, Ultrasound Extraction, Dual Extract, Small-Batch Crafted, No Grain Fillers.
- **No emoji.** Pictograms come from the `Icon` set.

## Visual foundations

**Colour.** `paper` is the page; `paper-raised` holds cards and fields; `paper-sunk` sits behind images. Text is `ink`, secondary text `ink-muted`. `forest` (through `action`) is the only button colour on paper and the colour of every brush stroke. `band` is the near-black green of the ink sections; on it, text is `on-band` and accents are `gold`. `gold` never appears as text or fill on paper (it fails contrast). `hanko` red is the rising sun and nothing else. `rust` is only for small caps arrow links. `price` sets prices. Dividers are `line` hairlines; control borders are `line-strong`.

**Themes.** *Rice paper* (light) is the brand. *Forest night* (dark) flips the ground to deep forest, text to cream and makes `gold` the action colour; bands stay dark in both.

**Type.** Headings, body, prices and navigation are set in Crimson Pro (`--font-serif`); italics carry subtitles, ledes and benefit text. Work Sans (`--font-sans`) is only for eyebrows, button labels and small UI labels. Use the type classes: `display-xl` hero title, `display-l` product name and band titles, `heading-l` section titles, `heading-m` sub-sections and tiles, `heading-s` card names, `subtitle` product line, `lede` intros, `body`, `body-s`, `caption`, `nav`, `price-l`, `price`, `eyebrow`, `button`, `button-s`, `link-caps`, `label`.

**Brush & ink.** Every section title gets a short tapered `BrushRule` beneath it. The header ends in a full-width ragged brush rule; photo bands have a brushed, torn edge (`InkBand`). Sumi-e landscape art (pines, pagoda, Mt Fuji, birds) frames the header and footer in the mockups; that art is not in this system yet, so leave those corners empty rather than faking it.

**Imagery.** Warm, low-key photographs of fruiting bodies on mossy forest floors, amber glass, steam and lab glassware with amber liquid. Products are always shot the same way: an amber dropper bottle in the centre, its mushroom around it, soft green bokeh behind. No cut-outs on white. See the Products, Categories and Imagery asset groups.

**Layout.** Content sits in a `container` (1200px) with 24px gutters. Sections are separated by `space-16` and a `line` hairline. Grids: 7 category tiles on Home, 4 product cards per row on Category, 2 columns (gallery + buy box) on Product, 3 columns for benefits and Why Ours.

**Shape & depth.** Cards use `radius-l` with a `line` border and `shadow-card`, lifting to `shadow-lift` on hover. Buttons and the stepper use `radius-m`; selects and thumbnails `radius-s`. Rings and the sun are round. No gradients except image scrims.

**States.** Hover darkens `action` to `action-hover` and lifts cards. Focus is a solid 2px `focus` ring offset by 2px (gold inside bands). Disabled controls drop to 45% opacity. Errors and sold out use `danger` plus a word.

**Motion.** Short and quiet: 150–200ms colour and shadow transitions, a 3% image zoom on product card hover. Nothing bounces.

## Iconography

Line pictograms with a 1.5px stroke on a 24px grid, round caps, never filled: mushroom, flask, ultrasound rings, sprout, brain, target, lotus, leaf, gear, book, people, culture dish, dropper, droplet, no-grain, plus UI glyphs (search, cart, arrow, chevron, minus, plus). Use the `Icon` component so they take `currentColor`; the SVG files in the Icons group are in `ink`. **These icons were drawn to match the mockups; the originals were not supplied.** Replace them when the real set exists.

## Logo

Use `samurai-fungi-lockup-ink.png` on paper and `samurai-fungi-lockup-paper.png` on bands and in the dark theme, centred in the `SiteHeader`. The emblem alone is for small spaces. These files are cut from the mockup at 2×: replace them with the vector master when you have it. Never redraw the wordmark in a font.

## Page templates

**Home:** `SiteHeader` → mushroom strip (Imagery) → 7 × `CategoryCard` → `InkBand` (eyebrow “Traditional wisdom. Modern methods.”, gold CTA, 4 pillars) → “Find Us at Local Markets” section with `SectionHeading` (eyebrow “Community rooted”) and a `band` button.

**Category (MyPothecary Extracts):** `SiteHeader` (Shop active) → `SectionHeading size="xl"` with lede → photo band with forest panel explaining UAE + `FeatureRow tone="band"` → `SectionHeading` “Shop Extracts” with Filter / Sort `Select`s → `ProductCard` grid → `Disclaimer`.

**Product (Lion's Mane):** `SiteHeader` → `ProductGallery` + `ProductSummary` → `BenefitGrid` → How to Use + `IngredientList` (What's Inside) → “Why Ours” 3 × `ImageCard` → `InkBand` with photo (“Our Approach”) → `Disclaimer`.

![Category mockup](/_blob/f3c6a53f4a2a5d4b22387bfcbefa6979)
![Product mockup](/_blob/1c2c9bbc8683944211b268e7ed3d413f)
