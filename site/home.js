// Samurai Fungi homepage, composed from the design system (window.SamuraiFungi) and shared site pieces (window.SFSite).
(function () {
  var S = window.SamuraiFungi;
  var F = window.SFSite;
  var h = React.createElement;
  var A = F.A;

  var CATEGORIES = [
    { image: 'category-fresh.jpg', icon: 'mushroom', title: 'Fresh Mushrooms', tagline: 'Grown locally', linkLabel: 'Shop fresh', href: '#shop' },
    { image: 'category-tinctures.jpg', icon: 'dropper', title: 'Hand Crafted Tinctures', tagline: 'Tradition + science', linkLabel: 'Shop extracts', href: 'extracts.html' },
    { image: 'category-grow-kits.jpg', icon: 'sprout', title: 'Grow Kits', tagline: 'Grow your own mushrooms at home', linkLabel: 'Shop grow kits', href: '#shop' },
    { image: 'category-recipes.jpg', icon: 'book', title: 'Recipes', tagline: 'Learn. Grow. Explore.', linkLabel: 'View resources', href: '#shop' },
    { image: 'category-workshops.jpg', icon: 'people', title: 'Workshops', tagline: 'Hands-on learning', linkLabel: 'See events', href: '#shop' },
    { image: 'category-cultures.jpg', icon: 'culture-dish', title: 'Liquid Cultures', tagline: 'Clean. Vigorous. Reliable.', linkLabel: 'Shop cultures', href: '#shop' },
    { image: 'category-more.jpg', icon: 'leaf', title: 'More', tagline: 'Give back to the earth', linkLabel: 'Learn more', href: '#shop' }
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
        cta: { label: 'Our process', href: 'extracts.html#uae' },
        pillars: PILLARS
      }, 'We combine time-honored growing practices with modern science to create high-quality mushroom products — from cultivation to extraction — all with integrity and purpose.'));
  }

  function Markets() {
    return h('section', { className: 'home-markets container', id: 'markets' },
      h('div', { className: 'home-markets__copy' },
        h(S.SectionHeading, { eyebrow: 'Community rooted', title: 'Find Us at Local Markets' }),
        h('p', { className: 'body home-markets__text' },
          'Fresh mushrooms, tinctures and grow kits — plus seasonal specials and events near you. Check our market schedule, pop-ups and stockists.'),
        h(S.Button, { variant: 'band', href: '#markets', iconAfter: 'arrow-right' }, 'How to find us')),
      h('div', { className: 'home-markets__media' },
        h('img', { src: A + 'Categories/category-workshops.jpg', alt: 'People gathered around a table of fresh oyster mushrooms' })));
  }

  F.mount(function Home() {
    return h(React.Fragment, null,
      h(F.Header, {}),
      h('main', { id: 'main' }, h(Hero), h(Categories), h(Process), h(Markets)),
      h(F.Footer, {}));
  });
})();
