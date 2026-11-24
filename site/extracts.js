// MyPothecary Extracts category page.
(function () {
  var S = window.SamuraiFungi;
  var F = window.SFSite;
  var h = React.createElement;
  var A = F.A;

  var FILTERS = [
    { value: 'all', label: 'All Products' },
    { value: 'single', label: 'Single Extracts' },
    { value: 'blend', label: 'Mushroom Blends' }
  ];
  var SORTS = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: low to high' },
    { value: 'price-desc', label: 'Price: high to low' },
    { value: 'name', label: 'Name' }
  ];

  function Intro() {
    return h('section', { className: 'shop-intro container' },
      h(S.SectionHeading, {
        size: 'xl',
        title: 'MyPothecary Extracts',
        lede: 'Small-batch mushroom extracts crafted with traditional wisdom, modern methods, and transparent process.'
      }));
  }

  function UAE() {
    return h('div', { id: 'uae' },
      h(S.InkBand, { image: A + 'Categories/category-tinctures.jpg', title: 'Ultrasound-Assisted Extraction (UAE)' },
        h('p', null, 'Our extracts are crafted using Ultrasound-Assisted Extraction to help draw out a broad range of mushroom compounds.'),
        h(S.FeatureRow, {
          tone: 'band', iconSize: 36, className: 'shop-uae__features',
          items: [
            { icon: 'flask', label: 'Small-Batch Crafted' },
            { icon: 'mushroom', label: 'Fruiting Body Focused' },
            { icon: 'ultrasound', label: 'Modern Extraction' }
          ]
        })));
  }

  function Shop() {
    var f = React.useState('all'), s = React.useState('featured');
    var list = F.PRODUCTS.filter(function (p) { return f[0] === 'all' || p.type === f[0]; }).slice();
    if (s[0] === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
    if (s[0] === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
    if (s[0] === 'name') list.sort(function (a, b) { return a.name.localeCompare(b.name); });

    return h('section', { className: 'shop-grid section container', 'aria-labelledby': 'shop-title' },
      h('div', { className: 'shop-grid__bar' },
        h(S.SectionHeading, { title: h('span', { id: 'shop-title' }, 'Shop Extracts') }),
        h('div', { className: 'shop-grid__controls' },
          h(S.Select, { label: 'Filter:', options: FILTERS, value: f[0], onChange: function (e) { f[1](e.target.value); } }),
          h(S.Select, { label: 'Sort:', options: SORTS, value: s[0], onChange: function (e) { s[1](e.target.value); } }))),
      h('p', { className: 'sr-only', 'aria-live': 'polite' }, list.length + ' products shown'),
      h('ul', { className: 'shop-grid__list' },
        list.map(function (p) {
          return h('li', { key: p.slug },
            h(S.ProductCard, {
              image: A + 'Products/' + p.image,
              imageAlt: p.name + ' ' + p.line + ' dropper bottle',
              name: p.name, subtitle: p.line, price: p.price,
              href: 'product.html?p=' + p.slug
            }));
        })));
  }

  F.mount(function Extracts() {
    return h(React.Fragment, null,
      h(F.Header, { active: 'shop' }),
      h('main', { id: 'main' }, h(Intro), h(UAE), h(Shop)),
      h(F.Footer, { consult: true }));
  });
})();
