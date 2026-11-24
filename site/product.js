// Product page for one MyPothecary extract: product.html?p=<slug> (defaults to lions-mane).
(function () {
  var S = window.SamuraiFungi;
  var F = window.SFSite;
  var h = React.createElement;
  var A = F.A;

  // Benefit copy exists only for Lion's Mane (from the product mockup). Other products show no benefit claims until approved copy exists.
  var BENEFITS = {
    'lions-mane': [
      { icon: 'brain', title: 'Cognitive Support', text: 'Supports healthy memory and mental clarity.' },
      { icon: 'target', title: 'Focus & Clarity', text: 'Helps support everyday focus and cognitive performance.' },
      { icon: 'lotus', title: 'Mood & Well-Being', text: 'Supports emotional balance and overall well-being.' }
    ]
  };

  var FEATURES = [
    { icon: 'mushroom', label: 'Fruiting Bodies Only' },
    { icon: 'ultrasound', label: 'Ultrasound Extraction' },
    { icon: 'flask', label: 'Dual Extract' },
    { icon: 'sprout', label: 'Small-Batch Crafted' }
  ];

  var slug = new URLSearchParams(location.search).get('p') || 'lions-mane';
  var product = F.PRODUCTS.filter(function (p) { return p.slug === slug; })[0];

  function gallery(p) {
    var imgs = [];
    if (p.slug === 'lions-mane') imgs.push({ src: A + 'Products/hero-lions-mane.jpg', alt: 'Lion’s Mane extract bottle among lion’s mane mushrooms on a forest floor' });
    imgs.push({ src: A + 'Products/' + p.image, alt: p.name + ' ' + p.line + ' dropper bottle' });
    imgs.push({ src: A + 'Categories/category-fresh.jpg', alt: 'Fresh mushroom fruiting bodies' });
    imgs.push({ src: A + 'Categories/category-tinctures.jpg', alt: 'Amber MyPothecary extract bottles' });
    return imgs;
  }

  function ingredients(p) {
    return [
      p.type === 'single'
        ? { icon: 'mushroom', label: p.mushroom + ' Fruiting Bodies' }
        : { icon: 'mushroom', label: 'Mushroom Fruiting Body Blend' },
      { icon: 'droplet', label: 'Purified Water' },
      { icon: 'flask', label: 'Food Grade Alcohol' }
    ];
  }

  function BuySection(p) {
    return h('section', { className: 'product-top container' },
      h(S.ProductGallery, { images: gallery(p) }),
      h(S.ProductSummary, {
        name: p.name,
        subtitle: p.line,
        tagline: 'Fruiting body extract crafted in small batches.',
        price: p.price,
        features: FEATURES,
        onAddToCart: function (q) { alert('Added ' + q + ' × ' + p.name + ' to your cart.'); }
      }));
  }

  function Benefits(p) {
    var items = BENEFITS[p.slug];
    if (!items) return null;
    return h('section', { className: 'container product-benefits', 'aria-label': 'Benefits' }, h(S.BenefitGrid, { items: items }));
  }

  function UseAndInside(p) {
    return h('section', { className: 'product-use section container' },
      h('div', { className: 'product-use__how' },
        h('img', { className: 'product-use__img', src: A + 'Categories/category-tinctures.jpg', alt: '' }),
        h('div', null,
          h(S.SectionHeading, { size: 'm', title: 'How to Use' }),
          h('p', { className: 'body product-use__text' }, 'Take 1 full dropper daily (1.5 mL). Add to water, coffee, tea, or your favorite beverage.'))),
      h('div', { className: 'product-use__inside' },
        h(S.SectionHeading, { size: 'm', title: 'What’s Inside' }),
        h(S.IngredientList, { items: ingredients(p) })));
  }

  function WhyOurs() {
    return h('section', { className: 'product-why section container', 'aria-labelledby': 'why-title' },
      h(S.SectionHeading, { title: h('span', { id: 'why-title' }, 'Why Ours') }),
      h('div', { className: 'product-why__grid' },
        h(S.ImageCard, { image: A + 'Categories/category-tinctures.jpg', icon: 'ultrasound', title: 'Ultrasound-Assisted Dual Extraction' }),
        h(S.ImageCard, { image: A + 'Categories/category-fresh.jpg', title: 'Fruiting Body Only' }),
        h(S.ImageCard, { image: A + 'Categories/category-grow-kits.jpg', icon: 'no-grain', title: 'No Grain Fillers' })));
  }

  function Approach(p) {
    var subject = p.type === 'single' ? p.name : 'these mushrooms';
    return h(S.InkBand, { image: A + 'Imagery/mushroom-strip.jpg', title: 'Our Approach' },
      'We keep our claims conservative and our process transparent. Research on ' + subject + ' is promising and still evolving.');
  }

  function NotFound() {
    return h('section', { className: 'section container product-missing' },
      h(S.SectionHeading, { title: 'We couldn’t find that extract' }),
      h('p', { className: 'body' }, 'It may have moved or sold out.'),
      h(S.Button, { href: 'extracts.html', iconAfter: 'arrow-right' }, 'Shop all extracts'));
  }

  if (product) {
    document.title = product.name + ' ' + product.line + ' — Samurai Fungi';
  }

  F.mount(function Product() {
    return h(React.Fragment, null,
      h(F.Header, { active: 'shop' }),
      h('main', { id: 'main' },
        product
          ? h(React.Fragment, null, h(BuySection, product), h(Benefits, product), h(UseAndInside, product), h(WhyOurs), h(Approach, product))
          : h(NotFound)),
      h(F.Footer, { consult: true }));
  });
})();
