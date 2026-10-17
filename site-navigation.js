(() => {
  const products = [
    'Cordless Endo Motor + Apex', 'COXO C-SMART-I PILOT', 'OLED Endo Motor',
    'Curing Light PREMIUM (Detection)', 'Composite Resin Heater (8 Slots)', 'E220 Shade Matching Device',
    'UltraClear HD Mirror 24mm Set', 'ProLight X LED Photo Lamp'
  ];

  const styles = `
    header[data-site-navigation]{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important}
    header[data-site-navigation] > .brand{grid-column:1;justify-self:start}
    header[data-site-navigation] > nav{grid-column:2;justify-self:center;display:flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap}
    .site-nav-actions{grid-column:3;justify-self:end;display:flex;align-items:center;gap:8px;min-width:92px;justify-content:flex-end}
    header[data-site-navigation][data-header-layout="catalog"] .site-nav-actions{margin-right:clamp(24px,1.65vw,32px)}
    .site-nav-button{width:42px;height:42px;display:grid;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer;transition:background .2s ease,color .2s ease}.site-nav-button:hover{background:rgba(255,255,255,.09);color:var(--orange,#f36d24)}
    .site-nav-button svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.site-cart{position:relative}.site-cart-count{position:absolute;right:-2px;top:-1px;min-width:15px;height:15px;padding:0 3px;display:grid;place-items:center;border-radius:20px;background:var(--orange,#f36d24);color:#21130d;font:700 9px/1 Arial,sans-serif}
    .site-search{grid-column:2;display:none;align-items:center;width:min(620px,45vw);height:42px;padding:0 8px 0 17px;border:1px solid color-mix(in srgb,currentColor 28%,transparent);border-radius:999px;background:rgba(20,17,15,.28);color:inherit}.site-search svg{width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:1.5}.site-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:inherit;font:500 13px var(--text,Arial,sans-serif)}.site-search input::placeholder{color:currentColor;opacity:.55}.site-search button{width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;font-size:20px;line-height:1;cursor:pointer}.site-search button:hover{background:rgba(255,255,255,.1)}
    header[data-site-navigation].search-open > nav{display:none!important}header[data-site-navigation].search-open > .site-search{display:flex}
    .site-cart-drawer{position:fixed;z-index:1000;right:20px;top:20px;width:min(390px,calc(100vw - 40px));padding:26px;border:1px solid var(--line,rgba(255,255,255,.2));border-radius:18px;background:var(--panel,#26211e);color:var(--ink,#f2f2f2);box-shadow:0 28px 80px rgba(0,0,0,.35);transform:translateY(-14px);opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease}.site-cart-drawer.is-open{transform:translateY(0);opacity:1;pointer-events:auto}.site-cart-drawer header{display:flex;align-items:center;justify-content:space-between}.site-cart-drawer h2{margin:0;font:400 28px/.95 var(--display,Arial,sans-serif);letter-spacing:-.05em}.site-cart-close{border:0;background:transparent;color:inherit;font-size:22px;cursor:pointer}.site-cart-drawer p{margin:30px 0 0;color:var(--muted,#b9b1ad);font:14px/1.5 var(--text,Arial,sans-serif)}.site-search-results{width:min(1840px,calc(100% - 48px));margin:18px auto 0;color:var(--muted,#b9b1ad);font:13px var(--text,Arial,sans-serif)}.product[hidden]{display:none!important}
    /* Mobile layout: desktop rules remain untouched; card grids never exceed two columns. */
    @media(max-width:760px){
      html,body{max-width:100%;overflow-x:hidden}.products,.bundle-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important}.products .product-visual{aspect-ratio:.84!important;padding:22px 12px!important}.products .product-copy{padding-top:12px!important}.products .product h2{font-size:clamp(16px,4.35vw,20px)!important;line-height:1.1!important}.products .product-bottom{gap:6px!important;font-size:clamp(14px,3.8vw,17px)!important}.products .status{font-size:10px!important}.products .product-add{right:10px!important;top:10px!important}.products .product-add::before,.products .product-add::after{width:16px!important}
      .bundle-grid .bundle{min-height:0!important;border-radius:14px!important}.bundle-grid .visual{min-height:148px!important;padding:12px!important}.bundle-grid .visual img{height:148px!important}.bundle-grid .content{padding:15px!important}.bundle-grid .number{font-size:8px!important}.bundle-grid .content h2{margin:9px 0 12px!important;font-size:clamp(23px,6vw,31px)!important}.bundle-grid .items{font-size:11px!important}.bundle-grid .items li{padding:6px 0!important}.bundle-grid .price-row{padding-top:13px!important}.bundle-grid .price{font-size:29px!important}.bundle-grid .save{font-size:8px!important}.bundle-grid .bundle-link{margin-top:12px!important;padding-top:11px!important;font-size:9px!important}
      .categories-row{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-auto-flow:row!important;grid-auto-columns:auto!important;gap:12px!important;overflow:visible!important;padding-bottom:0!important}.category-card{min-width:0!important}.showcase-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:repeat(2,48vw)!important;gap:12px!important}.showcase-card:nth-child(n){grid-column:auto!important;grid-row:auto!important}.showcase-card span{left:14px!important;bottom:14px!important;font-size:18px!important}
      .catalog-surface .details{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important}.catalog-surface .detail{min-height:0!important;padding:20px!important}.catalog-surface .detail h2{font-size:clamp(25px,7vw,36px)!important}.catalog-surface .detail p{font-size:13px!important}.catalog-surface .detail a{margin-top:18px!important;font-size:13px!important}
      .bundle-teasers{grid-template-columns:1fr!important}.bundle-teaser{grid-template-columns:108px 1fr!important;min-height:176px!important}.bundle-teaser-copy{padding:16px!important}.bundle-teaser-copy h3{font-size:27px!important}.bundle-teaser-copy p{font-size:12px!important}
      .site-cart-drawer{right:12px;top:12px;width:calc(100vw - 24px);padding:22px}.site-search-results{width:calc(100% - 24px)}
    }
    @media(max-width:440px){.bundle-grid{grid-template-columns:1fr!important}.showcase-grid{grid-template-columns:1fr!important;grid-template-rows:repeat(4,58vw)!important}.catalog-surface .details{grid-template-columns:1fr!important}}
    .site-menu-trigger{display:none}.site-menu-trigger svg{stroke-width:1.7}
    @media(max-width:760px){
      body{padding-bottom:calc(88px + env(safe-area-inset-bottom))}
      header[data-site-navigation]{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;min-height:70px}
      header[data-site-navigation] > .brand{grid-column:2;justify-self:center;padding-left:0!important}
      header[data-site-navigation] > nav{display:none!important}
      .site-nav-actions{position:static;grid-column:3;gap:2px;min-width:0}.site-nav-button{width:38px;height:38px}
      .site-menu-trigger{position:absolute;z-index:2;left:12px;top:50%;display:grid;transform:translateY(-50%)}
      .site-nav-actions .site-cart{display:none}
      .site-search{grid-column:1/3;grid-row:1;width:100%;height:38px;margin:0;padding-left:13px}
      header[data-site-navigation].search-open > .brand{display:none}
      header[data-site-navigation].search-open > .site-search{display:flex}
      header[data-site-navigation].search-open > .site-nav-actions{grid-column:3}
      header[data-site-navigation].search-open .site-menu-trigger{display:none}
      header[data-site-navigation].menu-open > nav{position:absolute;z-index:1001;top:calc(100% + 10px);left:12px;right:12px;display:flex!important;flex-direction:column;align-items:stretch!important;gap:0;height:auto!important;padding:8px;border:1px solid color-mix(in srgb,currentColor 22%,transparent);border-radius:14px;background:var(--panel,#26211e);color:var(--ink,#f2f2f2);box-shadow:0 18px 42px rgba(0,0,0,.28)}
      header[data-site-navigation].menu-open > nav a{padding:13px 12px;font-size:12px;text-align:left;opacity:1}
      header[data-site-navigation].menu-open > nav a + a{border-top:1px solid color-mix(in srgb,currentColor 13%,transparent)}
      .site-mobile-nav{position:fixed;z-index:1100;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:center;height:calc(88px + env(safe-area-inset-bottom));padding:8px 12px calc(8px + env(safe-area-inset-bottom));background:rgba(25,22,20,.66);box-shadow:0 -14px 36px rgba(0,0,0,.16);backdrop-filter:blur(28px) saturate(125%);-webkit-backdrop-filter:blur(28px) saturate(125%);color:#eee8e2}
      .site-mobile-nav a,.site-mobile-nav button{display:flex;min-width:0;height:58px;align-items:flex-end;justify-content:center;padding:0 2px 9px;border:0;background:transparent;color:inherit;font:500 10px/1.1 var(--text,Arial,sans-serif);letter-spacing:.06em;text-align:center;text-transform:uppercase;cursor:pointer}.site-mobile-nav .site-mobile-home{align-self:start;width:66px;height:66px;justify-self:center;margin-top:-30px;padding:0;border:1px solid var(--orange,#f36d24);border-radius:22px;background:rgba(39,33,30,.88);box-shadow:0 0 0 6px rgba(25,22,20,.5);font-size:0}.site-mobile-home span{display:grid;width:25px;height:19px;grid-template-columns:1fr 1fr;gap:4px}.site-mobile-home i{display:block;background:var(--orange,#f36d24);border-radius:2px 6px 2px 6px}.site-mobile-home i:nth-child(2),.site-mobile-home i:nth-child(3){border-radius:6px 2px 6px 2px}.site-mobile-nav [aria-current="page"]{color:var(--orange,#f36d24)}.site-mobile-cart{position:relative}.site-mobile-cart-count{position:absolute;top:12px;left:calc(50% + 14px);min-width:14px;height:14px;padding:0 2px;display:grid;place-items:center;border-radius:50%;background:var(--orange,#f36d24);color:#24150c;font:700 8px/1 Arial,sans-serif}
    }
  `;

  const inject = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: node => /^(SCRIPT|STYLE)$/i.test(node.parentElement?.tagName || '') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => { node.nodeValue = node.nodeValue.replace(/\bDenta\b/g, 'Dentovel').replace(/\bDentiphoto\b/g, 'Dentovel'); });
    document.title = document.title.replace(/\bDenta\b/g, 'Dentovel').replace(/\bDentiphoto\b/g, 'Dentovel');
    document.querySelectorAll('a[href*="dentiphoto.com"]').forEach(link => {
      const isEmail = (link.getAttribute('href') || '').startsWith('mailto:');
      link.href = isEmail ? 'mailto:support@dentovel.com' : 'https://dentovel.com';
      link.textContent = isEmail ? 'support@dentovel.com' : 'dentovel.com';
    });
    const header = document.querySelector('header.topbar, header.top');
    if (!header || header.dataset.siteNavigation) return;
    header.dataset.siteNavigation = 'true';
    if (header.closest('.catalog-hero, .about-hero')) header.dataset.headerLayout = 'catalog';
    const nav = header.querySelector(':scope > nav');
    if (!nav) return;

    const links = [...nav.querySelectorAll('a')];
    const storeLink = links.find(link => /^(?:index\.html(?:#store)?|#store)$/i.test(link.getAttribute('href') || ''));
    if (storeLink) {
      storeLink.href = 'index.html';
      storeLink.textContent = 'Home';
    }
    if (!links.some(link => /bundles\.html(?:$|[?#])/.test(link.getAttribute('href') || ''))) {
      const bundles = document.createElement('a');
      bundles.href = 'bundles.html';
      bundles.textContent = 'Bundles';
      const catalog = links.find(link => /catalog\.html(?:$|[?#])/.test(link.getAttribute('href') || ''));
      if (catalog) catalog.after(bundles);
      else nav.append(bundles);
    }

    const style = document.createElement('style');
    style.textContent = styles;
    document.head.append(style);

    const search = document.createElement('form');
    search.className = 'site-search';
    search.setAttribute('role', 'search');
    search.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.3 4.3"></path></svg><input type="search" aria-label="Search the catalog" placeholder="Search the catalog"><button type="button" aria-label="Close search">×</button>`;
    header.insertBefore(search, nav.nextSibling);

    const actions = document.createElement('div');
    actions.className = 'site-nav-actions';
    actions.innerHTML = `<button class="site-nav-button site-search-trigger" type="button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.3 4.3"></path></svg></button><button class="site-nav-button site-cart" type="button" aria-label="Open shopping cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h2l1.7 10.1h10.1l2-7.2H7"></path><circle cx="9" cy="19.1" r="1"></circle><circle cx="17" cy="19.1" r="1"></circle></svg><span class="site-cart-count">0</span></button><button class="site-nav-button site-menu-trigger" type="button" aria-label="Open navigation" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>`;
    header.append(actions);

    const drawer = document.createElement('aside');
    drawer.className = 'site-cart-drawer';
    drawer.setAttribute('aria-label', 'Shopping cart');
    drawer.innerHTML = '<header><h2>Shopping cart</h2><button class="site-cart-close" type="button" aria-label="Close shopping cart">×</button></header><p class="site-cart-summary">Your cart is ready for selected equipment.</p>';
    document.body.append(drawer);

    const mobileNav = document.createElement('nav');
    mobileNav.className = 'site-mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    mobileNav.innerHTML = `<a class="site-mobile-catalog" href="catalog.html">Catalog</a><a class="site-mobile-bundles" href="bundles.html">Bundles</a><a class="site-mobile-home" href="index.html" aria-label="Home"><span aria-hidden="true"><i></i><i></i><i></i><i></i></span></a><button class="site-mobile-cart" type="button" aria-label="Open shopping cart">Cart<span class="site-mobile-cart-count">0</span></button><a class="site-mobile-about" href="about.html">About</a>`;
    const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    mobileNav.querySelectorAll('a').forEach(link => {
      const target = (link.getAttribute('href') || '').toLowerCase();
      if (target === currentPage || (currentPage === '' && target === 'index.html')) link.setAttribute('aria-current', 'page');
    });
    document.body.append(mobileNav);

    const cartBadge = actions.querySelector('.site-cart-count');
    const mobileCartBadge = mobileNav.querySelector('.site-mobile-cart-count');
    const cartSummary = drawer.querySelector('.site-cart-summary');
    let cartCount = Number(localStorage.getItem('denta-cart-count') || 0);
    const renderCart = () => {
      cartBadge.textContent = cartCount;
      cartBadge.hidden = cartCount === 0;
      mobileCartBadge.textContent = cartCount;
      mobileCartBadge.hidden = cartCount === 0;
      cartSummary.textContent = cartCount ? `${cartCount} ${cartCount === 1 ? 'item' : 'items'} selected for your clinical workflow.` : 'Your cart is ready for selected equipment.';
    };
    renderCart();

    const input = search.querySelector('input');
    const menuTrigger = actions.querySelector('.site-menu-trigger');
    const closeMenu = () => {
      header.classList.remove('menu-open');
      menuTrigger.setAttribute('aria-expanded', 'false');
      menuTrigger.setAttribute('aria-label', 'Open navigation');
    };
    const closeSearch = () => { header.classList.remove('search-open'); actions.querySelector('.site-search-trigger').focus(); };
    actions.querySelector('.site-search-trigger').addEventListener('click', () => {
      if (header.classList.contains('search-open')) closeSearch();
      else { closeMenu(); header.classList.add('search-open'); input.focus(); }
    });
    menuTrigger.addEventListener('click', () => {
      if (header.classList.contains('menu-open')) {
        closeMenu();
      } else {
        header.classList.remove('search-open');
        header.classList.add('menu-open');
        menuTrigger.setAttribute('aria-expanded', 'true');
        menuTrigger.setAttribute('aria-label', 'Close navigation');
      }
    });
    search.querySelector('button').addEventListener('click', closeSearch);
    search.addEventListener('submit', event => {
      event.preventDefault();
      const query = input.value.trim().toLowerCase();
      if (!query) return;
      const match = products.find(name => name.toLowerCase().includes(query));
      window.location.href = `catalog.html?search=${encodeURIComponent(match || input.value.trim())}`;
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (header.classList.contains('search-open')) closeSearch();
      if (header.classList.contains('menu-open')) { closeMenu(); menuTrigger.focus(); }
    });
    document.addEventListener('click', event => {
      if (!header.classList.contains('menu-open') || header.contains(event.target)) return;
      closeMenu();
    });
    actions.querySelector('.site-cart').addEventListener('click', () => drawer.classList.add('is-open'));
    mobileNav.querySelector('.site-mobile-cart').addEventListener('click', () => drawer.classList.add('is-open'));
    drawer.querySelector('.site-cart-close').addEventListener('click', () => drawer.classList.remove('is-open'));
    document.addEventListener('click', event => {
      const add = event.target.closest('[data-cart],[data-recommendation-cart],#addToCart,.bundle-add');
      if (!add || add.closest('.site-nav-actions')) return;
      cartCount += 1;
      localStorage.setItem('denta-cart-count', String(cartCount));
      renderCart();
    });

    const catalogQuery = new URLSearchParams(location.search).get('search');
    const catalogProducts = document.querySelectorAll('.product');
    if (catalogQuery && catalogProducts.length) {
      const query = catalogQuery.toLowerCase();
      let visible = 0;
      catalogProducts.forEach(card => {
        const matches = card.textContent.toLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      const note = document.createElement('p');
      note.className = 'site-search-results';
      note.textContent = `${visible} ${visible === 1 ? 'result' : 'results'} for “${catalogQuery}”`;
      (document.querySelector('.catalog-bar') || document.querySelector('main')).after(note);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
