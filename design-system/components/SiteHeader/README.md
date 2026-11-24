# SiteHeader

The centred masthead: logo lockup, uppercase serif navigation, search and cart, the hanko sun and a brush rule underneath.

**Consumer provides:** `logoSrc` (the ink lockup) and `logoSrcInverse` (the paper lockup, shown in dark theme), `links` (`{label, href, active}`), optional `cartCount`, `cartHref`, `onSearch`, `homeHref`.

- Mark the current section with `active: true` (bold with an ink underline).
- Nav labels are short nouns in Title Case; CSS sets them uppercase.
- The sumi-e trees, pagoda and mountains around the header in the mockups are illustrations, not part of this component: add them as page artwork if you have them.
