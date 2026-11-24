// Shared pieces for every Samurai Fungi page: navigation, header, footer, product catalogue.
(function () {
  var S = window.SamuraiFungi;
  var h = React.createElement;
  var A = '../design-system/assets/';

  var NAV = [
    { key: 'shop', label: 'Shop', href: 'extracts.html' },
    { key: 'fresh', label: 'Fresh Mushrooms', href: 'index.html#shop' },
    { key: 'grow', label: 'Grow Kits', href: 'index.html#shop' },
    { key: 'education', label: 'Education', href: 'index.html#about' },
    { key: 'recipes', label: 'Recipes', href: 'index.html#shop' },
    { key: 'compost', label: 'Compost', href: 'index.html#shop' },
    { key: 'about', label: 'About', href: 'index.html#about' }
  ];

  // Prices follow the category mockup. The product mockup showed Lion's Mane at $35.00; confirm before launch.
  var PRODUCTS = [
    { slug: 'lions-mane', name: 'Lion’s Mane', line: 'Ultrasound Dual-Extract', type: 'single', price: 39.99, image: 'product-lions-mane.jpg', mushroom: 'Lion’s Mane' },
    { slug: 'cordyceps', name: 'Cordyceps', line: 'Ultrasound Dual-Extract', type: 'single', price: 39.99, image: 'product-cordyceps.jpg', mushroom: 'Cordyceps' },
    { slug: 'reishi', name: 'Reishi', line: 'Ultrasound Dual-Extract', type: 'single', price: 39.99, image: 'product-reishi.jpg', mushroom: 'Reishi' },
    { slug: 'turkey-tail', name: 'Turkey Tail', line: 'Ultrasound Dual-Extract', type: 'single', price: 39.99, image: 'product-turkey-tail.jpg', mushroom: 'Turkey Tail' },
    { slug: 'chaga', name: 'Chaga', line: 'Ultrasound Dual-Extract', type: 'single', price: 39.99, image: 'product-chaga.jpg', mushroom: 'Chaga' },
    { slug: 'core-five', name: 'Core Five Blend', line: 'Mushroom Blend', type: 'blend', price: 39.99, image: 'product-core-five.jpg' },
    { slug: 'surge', name: 'Surge', line: 'Mushroom Blend', type: 'blend', price: 39.99, image: 'product-surge.jpg' },
    { slug: '7-samurai', name: '7 Samurai', line: 'Mushroom Blend', type: 'blend', price: 44.99, image: 'product-7-samurai.jpg' }
  ];

  function Header(p) {
    return h(React.Fragment, null,
      h('a', { className: 'skip-link', href: '#main' }, 'Skip to content'),
      h(S.SiteHeader, {
        homeHref: 'index.html',
        logoSrc: A + 'Logos/samurai-fungi-lockup-ink.png',
        logoSrcInverse: A + 'Logos/samurai-fungi-lockup-paper.png',
        links: NAV.map(function (l) { return { label: l.label, href: l.href, active: l.key === p.active }; }),
        cartHref: '#cart'
      }));
  }

  function Footer(p) {
    return h('footer', { className: 'site-footer' },
      h('div', { className: 'site-footer__inner container' },
        h('img', { className: 'site-footer__logo', src: A + 'Logos/samurai-fungi-lockup-paper.png', alt: 'Samurai Fungi' }),
        h('nav', { className: 'site-footer__nav', 'aria-label': 'Footer' },
          NAV.map(function (l) { return h('a', { key: l.key, href: l.href, className: 'nav' }, l.label); })),
        h(S.Disclaimer, { className: 'site-footer__legal' },
          'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.',
          p && p.consult ? h('span', { className: 'site-footer__consult' }, 'Consult your physician before use, especially if you are pregnant, nursing, have a medical condition, or are taking medication.') : null),
        h('p', { className: 'caption site-footer__copy' }, '© ' + new Date().getFullYear() + ' Samurai Fungi. Grown with care.')));
  }

  function mount(App) {
    ReactDOM.createRoot(document.getElementById('root')).render(h(App));
  }

  window.SFSite = { A: A, NAV: NAV, PRODUCTS: PRODUCTS, Header: Header, Footer: Footer, mount: mount };
})();
