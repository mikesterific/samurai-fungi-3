/* @ds-bundle: {"format":4,"namespace":"SamuraiFungi","components":[{"name":"Icon"},{"name":"Button"},{"name":"QuantityStepper"},{"name":"Select"},{"name":"SiteHeader"},{"name":"SectionHeading"},{"name":"BrushRule"},{"name":"FeatureRow"},{"name":"BenefitGrid"},{"name":"IngredientList"},{"name":"ImageCard"},{"name":"CategoryCard"},{"name":"ProductCard"},{"name":"Price"},{"name":"ProductGallery"},{"name":"ProductSummary"},{"name":"InkBand"},{"name":"Disclaimer"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState;
  var ICONS = {"mushroom": "<path d=\"M3 11.5C3 6.8 7 3.5 12 3.5s9 3.3 9 8c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1Z\"/><path d=\"M9.5 12.5 9 19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2l-.5-6.5\"/><circle cx=\"9\" cy=\"8\" r=\".9\"/><circle cx=\"14.5\" cy=\"7\" r=\".9\"/>", "flask": "<path d=\"M9.5 3h5M10 3v6.2L4.6 18.4A1.7 1.7 0 0 0 6.1 21h11.8a1.7 1.7 0 0 0 1.5-2.6L14 9.2V3\"/><path d=\"M7.2 15h9.6\"/>", "ultrasound": "<circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"M8.8 8.8a4.5 4.5 0 0 0 0 6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4M6 6a8.5 8.5 0 0 0 0 12M18 6a8.5 8.5 0 0 1 0 12\"/>", "sprout": "<path d=\"M12 21v-8\"/><path d=\"M12 13C12 8.6 8.9 6 4 6c0 4.4 3.1 7 8 7Z\"/><path d=\"M12 11c0-3.9 2.8-6.5 8-6.5 0 3.9-2.8 6.5-8 6.5Z\"/>", "brain": "<path d=\"M12 5.5A3 3 0 0 0 6.6 4 3 3 0 0 0 4 8.6 3.4 3.4 0 0 0 4.8 14 3 3 0 0 0 8 19a3 3 0 0 0 4 .5V5.5Z\"/><path d=\"M12 5.5A3 3 0 0 1 17.4 4 3 3 0 0 1 20 8.6a3.4 3.4 0 0 1-.8 5.4A3 3 0 0 1 16 19a3 3 0 0 1-4 .5\"/><path d=\"M8 9.5c1 0 2 .6 2 2M16 9.5c-1 0-2 .6-2 2M8.5 15c.8-.6 1.8-.7 2.5-.3\"/>", "target": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/><path d=\"m13 11 7-7M17 4h3v3\"/>", "lotus": "<path d=\"M12 20c-2.5-2-3.5-4.6-3.5-7.5S9.8 7 12 5c2.2 2 3.5 4.6 3.5 7.5S14.5 18 12 20Z\"/><path d=\"M12 20c-4 0-7.5-2.2-8.5-6.5 2.4-.4 4.5.1 6 1.3M12 20c4 0 7.5-2.2 8.5-6.5-2.4-.4-4.5.1-6 1.3\"/>", "leaf": "<path d=\"M5 19C5 10 10 5 20 4c0 10-5 15-14 15H5Z\"/><path d=\"M5 19 14 10\"/>", "gear": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7\"/><circle cx=\"12\" cy=\"12\" r=\"6.6\"/>", "book": "<path d=\"M12 6.5C10 5 7.5 4.5 3 4.5v13c4.5 0 7 .5 9 2 2-1.5 4.5-2 9-2v-13c-4.5 0-7 .5-9 2Z\"/><path d=\"M12 6.5v13\"/>", "people": "<circle cx=\"12\" cy=\"7\" r=\"2.5\"/><circle cx=\"5.5\" cy=\"9\" r=\"2\"/><circle cx=\"18.5\" cy=\"9\" r=\"2\"/><path d=\"M7.5 19v-2.5a4.5 4.5 0 0 1 9 0V19M2.5 19v-1.5A3 3 0 0 1 6.8 14.8M21.5 19v-1.5a3 3 0 0 0-4.3-2.7\"/>", "culture-dish": "<ellipse cx=\"12\" cy=\"10\" rx=\"9\" ry=\"3.5\"/><path d=\"M3 10v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4\"/>", "dropper": "<path d=\"M10 2.8h4v3.5h-4z\"/><path d=\"M9 6.3h6v2.4H9zM10.3 8.7v7.8L12 19l1.7-2.5V8.7\"/><path d=\"M12 21.2v.1\"/>", "droplet": "<path d=\"M12 3.5S6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z\"/>", "no-grain": "<circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"m6 18 12-12\"/><ellipse cx=\"9.5\" cy=\"12.5\" rx=\"1.4\" ry=\"2.4\" transform=\"rotate(-30 9.5 12.5)\"/><ellipse cx=\"14.5\" cy=\"11.5\" rx=\"1.4\" ry=\"2.4\" transform=\"rotate(30 14.5 11.5)\"/>", "search": "<circle cx=\"10.5\" cy=\"10.5\" r=\"6\"/><path d=\"m15 15 5.5 5.5\"/>", "cart": "<path d=\"M2.5 3.5h2.2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1l1.8-7.3H5.8\"/><circle cx=\"9.5\" cy=\"19.8\" r=\"1.2\"/><circle cx=\"17\" cy=\"19.8\" r=\"1.2\"/>", "arrow-right": "<path d=\"M4 12h15M14 7l5 5-5 5\"/>", "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>", "minus": "<path d=\"M5 12h14\"/>", "plus": "<path d=\"M12 5v14M5 12h14\"/>"};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    return o;
  }

  /* ---------- Icon ---------- */
  function Icon(p) {
    var size = p.size || 24;
    var body = ICONS[p.name] || '';
    return h('svg', {
      className: cx('sf-icon', p.className),
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: p.strokeWidth || 1.5,
      strokeLinecap: 'round', strokeLinejoin: 'round',
      role: p.title ? 'img' : undefined,
      'aria-hidden': p.title ? undefined : 'true',
      'aria-label': p.title || undefined,
      dangerouslySetInnerHTML: { __html: body }
    });
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- Button ---------- */
  function Button(p) {
    var variant = p.variant || 'primary';
    var size = p.size || 'md';
    var rest = omit(p, ['variant', 'size', 'icon', 'iconAfter', 'children', 'className', 'href', 'block']);
    var cls = cx('sf-btn', 'sf-btn--' + variant, 'sf-btn--' + size, p.block && 'sf-btn--block', p.className);
    var kids = [
      p.icon ? h(Icon, { key: 'i', name: p.icon, size: size === 'sm' ? 16 : 20 }) : null,
      h('span', { key: 'l' }, p.children),
      p.iconAfter ? h(Icon, { key: 'a', name: p.iconAfter, size: size === 'sm' ? 16 : 18 }) : null
    ];
    if (p.href) return h('a', Object.assign({ href: p.href, className: cls }, rest), kids);
    return h('button', Object.assign({ type: 'button', className: cls }, rest), kids);
  }

  /* ---------- QuantityStepper ---------- */
  function QuantityStepper(p) {
    var min = p.min == null ? 1 : p.min, max = p.max == null ? 99 : p.max;
    var st = useState(p.defaultValue == null ? min : p.defaultValue);
    var value = p.value == null ? st[0] : p.value;
    function set(v) {
      v = Math.max(min, Math.min(max, v));
      if (p.value == null) st[1](v);
      if (p.onChange) p.onChange(v);
    }
    return h('div', { className: cx('sf-qty', p.className), role: 'group', 'aria-label': p.label || 'Quantity' },
      h('button', { type: 'button', className: 'sf-qty__btn', 'aria-label': 'Decrease quantity', disabled: value <= min, onClick: function () { set(value - 1); } }, h(Icon, { name: 'minus', size: 18 })),
      h('output', { className: 'sf-qty__value label', 'aria-live': 'polite' }, value),
      h('button', { type: 'button', className: 'sf-qty__btn', 'aria-label': 'Increase quantity', disabled: value >= max, onClick: function () { set(value + 1); } }, h(Icon, { name: 'plus', size: 18 }))
    );
  }

  /* ---------- Select ---------- */
  var uid = 0;
  function Select(p) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = 'sf-select-' + (++uid);
    var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
    var rest = omit(p, ['label', 'options', 'className', 'id']);
    var id = p.id || idRef.current;
    return h('div', { className: cx('sf-select', p.className) },
      p.label ? h('label', { htmlFor: id, className: 'sf-select__label label' }, p.label) : null,
      h('span', { className: 'sf-select__field' },
        h('select', Object.assign({ id: id, className: 'sf-select__control label' }, rest),
          opts.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); })),
        h(Icon, { name: 'chevron-down', size: 16, className: 'sf-select__chev' }))
    );
  }

  /* ---------- BrushRule ---------- */
  function BrushRule(p) {
    var w = p.width || 120;
    return h('svg', { className: cx('sf-brush', p.className), width: w, height: Math.round(w / 12), viewBox: '0 0 120 10', preserveAspectRatio: 'none', 'aria-hidden': 'true' },
      h('path', { d: 'M1.2 5.6C14 3.9 33 3 56 3.1c21 .1 41 .9 62.4 2.1.9.1.9 1.4 0 1.5-11 .6-23 .9-36.5 1-2.6 0-1.7.6-5.2.6C55 8.4 25 7.8 2 7.4.6 7.3.3 5.8 1.2 5.6Z' }),
      h('path', { d: 'M84 2.4c9 .2 18 .7 27 1.3.5 0 .5.6 0 .6-9-.3-18-.6-27-.7-.6 0-.6-1.2 0-1.2Z', opacity: '.55' })
    );
  }

  /* ---------- SectionHeading ---------- */
  function SectionHeading(p) {
    var size = p.size || 'l';
    var cls = { xl: 'display-xl', display: 'display-l', l: 'heading-l', m: 'heading-m' }[size] || 'heading-l';
    var Tag = p.as || (size === 'xl' ? 'h1' : size === 'm' ? 'h3' : 'h2');
    return h('header', { className: cx('sf-heading', 'sf-heading--' + (p.align || 'left'), p.tone === 'band' && 'sf-heading--band', p.className) },
      p.eyebrow ? h('p', { className: 'sf-eyebrow eyebrow' }, p.eyebrow) : null,
      h(Tag, { className: cx('sf-heading__title', cls) }, p.title),
      p.brush === false ? null : h(BrushRule, { width: size === 'm' ? 72 : size === 'xl' ? 104 : 112 }),
      p.lede ? h('p', { className: 'sf-heading__lede lede' }, p.lede) : null
    );
  }

  /* ---------- FeatureRow ---------- */
  function FeatureRow(p) {
    return h('ul', { className: cx('sf-features', p.tone === 'band' && 'sf-features--band', p.className) },
      (p.items || []).map(function (it, i) {
        return h('li', { key: i, className: 'sf-features__item' },
          h(Icon, { name: it.icon, size: p.iconSize || 40, strokeWidth: 1.25 }),
          h('span', { className: 'sf-features__label body-s' }, it.label));
      }));
  }

  /* ---------- BenefitGrid ---------- */
  function BenefitGrid(p) {
    return h('ul', { className: cx('sf-benefits', p.className) },
      (p.items || []).map(function (it, i) {
        return h('li', { key: i, className: 'sf-benefits__item' },
          h(Icon, { name: it.icon, size: 52, strokeWidth: 1.2 }),
          h('h3', { className: 'heading-m' }, it.title),
          h('p', { className: 'sf-benefits__text lede' }, it.text));
      }));
  }

  /* ---------- IngredientList ---------- */
  function IngredientList(p) {
    return h('ul', { className: cx('sf-ingredients', p.className) },
      (p.items || []).map(function (it, i) {
        return h('li', { key: i, className: 'sf-ingredients__item' },
          it.image ? h('img', { src: it.image, alt: '', className: 'sf-ingredients__img' })
                   : h('span', { className: 'sf-ingredients__icon' }, h(Icon, { name: it.icon || 'mushroom', size: 44, strokeWidth: 1.2 })),
          h('span', { className: 'sf-ingredients__label body-s' }, it.label));
      }));
  }

  /* ---------- ImageCard ---------- */
  function ImageCard(p) {
    var Tag = p.href ? 'a' : 'figure';
    return h(Tag, { className: cx('sf-imgcard', p.className), href: p.href },
      h('div', { className: 'sf-imgcard__media' },
        h('img', { src: p.image, alt: p.alt || '' }),
        p.icon ? h('span', { className: 'sf-imgcard__badge' }, h(Icon, { name: p.icon, size: 56, strokeWidth: 1.2 })) : null),
      h(p.href ? 'span' : 'figcaption', { className: 'sf-imgcard__title heading-s' }, p.title));
  }

  /* ---------- CategoryCard ---------- */
  function CategoryCard(p) {
    return h('a', { className: cx('sf-catcard', p.className), href: p.href || '#' },
      h('div', { className: 'sf-catcard__media' }, h('img', { src: p.image, alt: '' })),
      h('div', { className: 'sf-catcard__body' },
        p.icon ? h(Icon, { name: p.icon, size: 36, strokeWidth: 1.25, className: 'sf-catcard__icon' }) : null,
        h('h3', { className: 'sf-catcard__title heading-m' }, p.title),
        p.tagline ? h('p', { className: 'sf-catcard__tagline caption' }, p.tagline) : null,
        h('span', { className: 'sf-catcard__link link-caps' }, p.linkLabel || 'Shop now', h(Icon, { name: 'arrow-right', size: 14, strokeWidth: 2 }))));
  }

  /* ---------- Price ---------- */
  function Price(p) {
    var amt = typeof p.amount === 'number'
      ? new Intl.NumberFormat('en-US', { style: 'currency', currency: p.currency || 'USD' }).format(p.amount)
      : p.amount;
    return h('p', { className: cx('sf-price', p.size === 'l' ? 'price-l' : 'price', p.className) },
      p.compareAt ? h('s', { className: 'sf-price__was body-s' }, p.compareAt) : null, amt);
  }

  /* ---------- ProductCard ---------- */
  function ProductCard(p) {
    return h('article', { className: cx('sf-pcard', p.soldOut && 'is-soldout', p.className) },
      h('div', { className: 'sf-pcard__media' }, h('img', { src: p.image, alt: p.imageAlt || p.name })),
      h('div', { className: 'sf-pcard__body' },
        h('h3', { className: 'sf-pcard__name heading-s' }, p.name),
        p.subtitle ? h('p', { className: 'sf-pcard__sub body-s' }, p.subtitle) : null,
        h(Price, { amount: p.price }),
        p.soldOut ? h('p', { className: 'sf-pcard__status label' }, 'Sold out') : null,
        h(Button, { size: 'sm', href: p.href || '#', iconAfter: 'arrow-right', variant: p.soldOut ? 'outline' : 'primary', 'aria-label': (p.ctaLabel || 'View Product') + ': ' + p.name }, p.ctaLabel || 'View Product')));
  }

  /* ---------- ProductGallery ---------- */
  function ProductGallery(p) {
    var imgs = p.images || [];
    var st = useState(p.defaultIndex || 0);
    var cur = imgs[st[0]] || {};
    return h('div', { className: cx('sf-gallery', p.className) },
      h('div', { className: 'sf-gallery__main' }, h('img', { src: cur.src, alt: cur.alt || '' })),
      imgs.length > 1 ? h('div', { className: 'sf-gallery__thumbs', role: 'tablist', 'aria-label': 'Product images' },
        imgs.map(function (im, i) {
          return h('button', { key: i, type: 'button', role: 'tab', 'aria-selected': i === st[0], 'aria-label': im.alt || ('Image ' + (i + 1)),
            className: cx('sf-gallery__thumb', i === st[0] && 'is-active'), onClick: function () { st[1](i); } },
            h('img', { src: im.thumb || im.src, alt: '' }));
        })) : null);
  }

  /* ---------- ProductSummary ---------- */
  function ProductSummary(p) {
    var q = useState(1);
    return h('section', { className: cx('sf-summary', p.className) },
      h('h1', { className: 'sf-summary__name display-l' }, p.name),
      p.subtitle ? h('p', { className: 'sf-summary__sub subtitle' }, p.subtitle) : null,
      h(BrushRule, { width: 100 }),
      p.tagline ? h('p', { className: 'sf-summary__tag lede' }, p.tagline) : null,
      h(Price, { amount: p.price, size: 'l' }),
      h('div', { className: 'sf-summary__buy' },
        h(QuantityStepper, { value: q[0], onChange: q[1] }),
        h(Button, { size: 'lg', icon: 'cart', block: true, onClick: function () { if (p.onAddToCart) p.onAddToCart(q[0]); } }, p.ctaLabel || 'Add to cart')),
      p.features ? h(FeatureRow, { items: p.features, iconSize: 36 }) : null);
  }

  /* ---------- InkBand ---------- */
  function ragged(seed) {
    var pts = ['0% 0%'], n = 18, s = seed || 7;
    for (var i = 0; i <= n; i++) {
      s = (s * 9301 + 49297) % 233280;
      var x = 88 + (s / 233280) * 12;
      pts.push(x.toFixed(1) + '% ' + (i * 100 / n).toFixed(1) + '%');
    }
    pts.push('0% 100%');
    return 'polygon(' + pts.join(',') + ')';
  }
  function InkBand(p) {
    var hasImg = !!p.image;
    return h('section', { className: cx('sf-band', hasImg && 'sf-band--image', p.imageSide === 'left' && 'sf-band--img-left', p.className) },
      hasImg ? h('img', { className: 'sf-band__img', src: p.image, alt: '' }) : null,
      h('div', { className: 'sf-band__panel', style: hasImg ? { clipPath: ragged(p.seed) } : undefined },
        h('div', { className: 'sf-band__copy' },
          p.eyebrow ? h('p', { className: 'sf-eyebrow sf-eyebrow--gold eyebrow' }, p.eyebrow) : null,
          h('h2', { className: 'sf-band__title display-l' }, p.title),
          h(BrushRule, { width: 96, className: 'sf-brush--band' }),
          p.children ? h('div', { className: 'sf-band__text lede' }, p.children) : null,
          p.cta ? h(Button, { variant: 'gold', href: p.cta.href || '#', iconAfter: 'arrow-right' }, p.cta.label) : null),
        p.pillars ? h('ul', { className: 'sf-band__pillars' }, p.pillars.map(function (it, i) {
          return h('li', { key: i },
            h('span', { className: 'sf-ring' }, h(Icon, { name: it.icon, size: 26, strokeWidth: 1.4 })),
            h('span', { className: 'body-s' }, it.label));
        })) : null));
  }

  /* ---------- Disclaimer ---------- */
  function Disclaimer(p) {
    return h('aside', { className: cx('sf-disclaimer caption', p.className) },
      p.children || 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.');
  }

  /* ---------- SiteHeader ---------- */
  function SiteHeader(p) {
    var links = p.links || [];
    return h('header', { className: cx('sf-header', p.className) },
      h('span', { className: 'sf-header__sun', 'aria-hidden': 'true' }),
      h('a', { className: 'sf-header__brand', href: p.homeHref || '/', 'aria-label': 'Samurai Fungi home' },
        p.logoSrc ? h('img', { className: 'sf-logo sf-logo--ink', src: p.logoSrc, alt: 'Samurai Fungi' }) : h('span', { className: 'display-l' }, 'Samurai Fungi'),
        p.logoSrcInverse ? h('img', { className: 'sf-logo sf-logo--paper', src: p.logoSrcInverse, alt: '' }) : null),
      h('div', { className: 'sf-header__tools' },
        h('button', { type: 'button', className: 'sf-iconbtn', 'aria-label': 'Search', onClick: p.onSearch }, h(Icon, { name: 'search', size: 24, strokeWidth: 2 })),
        h('a', { className: 'sf-iconbtn', href: p.cartHref || '#', 'aria-label': 'Cart' + (p.cartCount ? ', ' + p.cartCount + ' items' : '') },
          h(Icon, { name: 'cart', size: 26, strokeWidth: 1.8 }),
          p.cartCount ? h('span', { className: 'sf-iconbtn__count' }, p.cartCount) : null)),
      h('nav', { className: 'sf-header__nav', 'aria-label': 'Main' },
        links.map(function (l, i) {
          return h('a', { key: i, href: l.href || '#', className: cx('sf-navlink nav', l.active && 'is-active'), 'aria-current': l.active ? 'page' : undefined }, l.label);
        })),
      h('svg', { className: 'sf-header__rule', viewBox: '0 0 1200 14', preserveAspectRatio: 'none', 'aria-hidden': 'true' },
        h('path', { d: 'M0 6.5C120 4 260 7.5 420 5.2S700 3.6 860 6.1 1080 4.8 1200 5.6V9C1050 10.8 940 8.2 780 10.1S520 8 380 10.4 140 8.6 0 10.6Z' }),
        h('path', { d: 'M40 12.4c160-1.2 300 .4 470-.6 60-.3 70 .5 0 1-170 .9-330-.1-470 .3-6 0-6-.6 0-.7Z', opacity: '.5' })));
  }

  var api = {
    Icon: Icon, Button: Button, QuantityStepper: QuantityStepper, Select: Select, SiteHeader: SiteHeader,
    SectionHeading: SectionHeading, BrushRule: BrushRule, FeatureRow: FeatureRow, BenefitGrid: BenefitGrid,
    IngredientList: IngredientList, ImageCard: ImageCard, CategoryCard: CategoryCard, ProductCard: ProductCard,
    Price: Price, ProductGallery: ProductGallery, ProductSummary: ProductSummary, InkBand: InkBand, Disclaimer: Disclaimer
  };
  window.SamuraiFungi = Object.assign(window.SamuraiFungi || {}, api);
})();
