// Samurai Fungi homepage, composed from the design system (window.SamuraiFungi).
(function () {
  var S = window.SamuraiFungi;
  var h = React.createElement;
  var A = '../design-system/assets/';

  var NAV = [
    { label: 'Shop', href: '#shop' },
    { label: 'Fresh Mushrooms', href: '#fresh' },
    { label: 'Grow Kits', href: '#grow-kits' },
    { label: 'Education', href: '#education' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Compost', href: '#compost' },
    { label: 'About', href: '#about' }
  ];

  var CATEGORIES = [
    { image: 'category-fresh.jpg', icon: 'mushroom', title: 'Fresh Mushrooms', tagline: 'Grown locally', linkLabel: 'Shop fresh', href: '#fresh' },
    { image: 'category-tinctures.jpg', icon: 'dropper', title: 'Hand Crafted Tinctures', tagline: 'Tradition + science', linkLabel: 'Shop extracts', href: '#extracts' },
    { image: 'category-grow-kits.jpg', icon: 'sprout', title: 'Grow Kits', tagline: 'Grow your own mushrooms at home', linkLabel: 'Shop grow kits', href: '#grow-kits' },
    { image: 'category-recipes.jpg', icon: 'book', title: 'Recipes', tagline: 'Learn. Grow. Explore.', linkLabel: 'View resources', href: '#recipes' },
    { image: 'category-workshops.jpg', icon: 'people', title: 'Workshops', tagline: 'Hands-on learning', linkLabel: 'See events', href: '#workshops' },
    { image: 'category-cultures.jpg', icon: 'culture-dish', title: 'Liquid Cultures', tagline: 'Clean. Vigorous. Reliable.', linkLabel: 'Shop cultures', href: '#cultures' },
    { image: 'category-more.jpg', icon: 'leaf', title: 'More', tagline: 'Give back to the earth', linkLabel: 'Learn more', href: '#compost' }
  ];

  var PILLARS = [
    { icon: 'leaf', label: 'Pure Ingredients' },
    { icon: 'flask', label: 'Thoughtful Processes' },
    { icon: 'gear', label: 'Real Results' },
    { icon: 'mushroom', label: 'From Substrate to Supplement' }
  ];

  function Hero() {
    return h('section', { className: 'home-hero', 'aria-labelledby': 'home-title' },
      h('h1', { id: 'home-title', className: 'sr-only' }, 'Samurai Fungi: fresh mushrooms, tinctures and grow kits'),
      h('img', {
        className: 'home-hero__img',
        src: A + 'Imagery/mushroom-strip.jpg',
        alt: 'Lion’s mane, reishi, golden, pink, white and blue oyster, and chestnut mushrooms side by side'
      }));
  }

  function Categories() {
    return h('section', { className: 'home-categories container', 'aria-labelledby': 'cat-title', id: 'shop' },
      h('h2', { id: 'cat-title', className: 'sr-only' }, 'Shop by category'),
      h('ul', { className: 'home-categories__grid' },
        CATEGORIES.map(function (c) {
          return h('li', { key: c.title },
            h(S.CategoryCard, { image: A + 'Categories/' + c.image, icon: c.icon, title: c.title, tagline: c.tagline, linkLabel: c.linkLabel, href: c.href }));
        })));
  }

  function Process() {
    return h('div', { id: 'about' },
      h(S.InkBand, {
        eyebrow: 'Traditional wisdom. Modern methods.',
        title: 'Mushrooms Without Compromise.',
        cta: { label: 'Our process', href: '#process' },
        pillars: PILLARS
      }, 'We combine time-honored growing practices with modern science to create high-quality mushroom products — from cultivation to extraction — all with integrity and purpose.'));
  }

  function Markets() {
    return h('section', { className: 'home-markets container', id: 'markets' },
      h('div', { className: 'home-markets__copy' },
        h(S.SectionHeading, { eyebrow: 'Community rooted', title: 'Find Us at Local Markets', brush: true }),
        h('p', { className: 'body home-markets__text' },
          'Fresh mushrooms, tinctures and grow kits — plus seasonal specials and events near you. Check our market schedule, pop-ups and stockists.'),
        h(S.Button, { variant: 'band', href: '#markets-schedule', iconAfter: 'arrow-right' }, 'How to find us')),
      h('div', { className: 'home-markets__media' },
        h('img', { src: A + 'Categories/category-workshops.jpg', alt: 'People gathered around a table of fresh oyster mushrooms' })));
  }

  function Footer() {
    return h('footer', { className: 'home-footer' },
      h('div', { className: 'home-footer__inner container' },
        h('img', { className: 'home-footer__logo', src: A + 'Logos/samurai-fungi-lockup-paper.png', alt: 'Samurai Fungi' }),
        h('nav', { className: 'home-footer__nav', 'aria-label': 'Footer' },
          NAV.map(function (l) { return h('a', { key: l.label, href: l.href, className: 'nav' }, l.label); })),
        h(S.Disclaimer, { className: 'home-footer__legal' }),
        h('p', { className: 'caption home-footer__copy' }, '© ' + new Date().getFullYear() + ' Samurai Fungi. Grown with care.')));
  }

  function Home() {
    return h(React.Fragment, null,
      h('a', { className: 'skip-link', href: '#main' }, 'Skip to content'),
      h(S.SiteHeader, {
        logoSrc: A + 'Logos/samurai-fungi-lockup-ink.png',
        logoSrcInverse: A + 'Logos/samurai-fungi-lockup-paper.png',
        links: NAV,
        cartHref: '#cart'
      }),
      h('main', { id: 'main' }, h(Hero), h(Categories), h(Process), h(Markets)),
      h(Footer));
  }

  ReactDOM.createRoot(document.getElementById('root')).render(h(Home));
})();
