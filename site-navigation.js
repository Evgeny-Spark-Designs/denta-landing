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
    .site-mobile-nav{display:none}.site-menu-trigger{display:none}.site-menu-trigger svg{stroke-width:1.7}
    @media(max-width:760px){
      body{padding:60px 0 calc(85px + env(safe-area-inset-bottom))}
      header[data-site-navigation]{display:none!important}
      .site-mobile-nav{position:fixed;top:0;right:0;left:0;z-index:1001;display:flex;height:60px;align-items:center;justify-content:space-between;padding:0 12px;background:rgba(40,33,32,.8);color:#f2f2f2;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
      .site-mobile-nav::after{position:absolute;right:0;bottom:0;left:0;height:1px;background:linear-gradient(to right,rgba(157,147,144,0) 0%,rgba(157,147,144,1) 50%,rgba(255,255,255,0) 100%);content:""}
      .site-mobile-nav ul{display:flex;margin:0;padding:0;list-style:none}.site-mobile-nav li{display:flex;align-items:center}.site-mobile-nav a,.site-mobile-nav button{display:flex;align-items:center;justify-content:center;box-sizing:content-box;width:20px;height:20px;padding:20px 10px;border:0;background:transparent;color:inherit;cursor:pointer}.site-mobile-nav svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round}
      .site-mobile-nav .site-mobile-logo{position:absolute;left:50%;display:flex;width:auto;height:60px;padding:0;color:inherit;font:500 21px/1 var(--text,Arial,sans-serif);letter-spacing:.08em;text-transform:uppercase;transform:translateX(-50%)}.site-mobile-nav .site-mobile-logo svg{width:100px;height:18px;fill:currentColor;stroke:none}.site-mobile-nav [aria-current="page"]{color:var(--orange,#f37021)}
      .site-mobile-tabbar{position:fixed;right:0;bottom:0;left:0;z-index:1001;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:end;height:calc(85px + env(safe-area-inset-bottom));padding:8px 16px calc(5px + env(safe-area-inset-bottom));background:rgba(40,33,32,.92);border-top:1px solid rgba(255,255,255,.12);color:#fff;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
      .site-mobile-tabbar a{display:flex;min-width:0;height:72px;flex-direction:column;align-items:center;justify-content:flex-end;gap:2px;color:inherit;font:400 9px/1.1 var(--text,Arial,sans-serif);letter-spacing:.04em;text-align:center;text-decoration:none}.site-mobile-tabbar svg{display:block;width:36px;height:36px;fill:none;stroke:currentColor;stroke-width:1.5}.site-mobile-tabbar .site-mobile-tabbar-home{position:relative;z-index:1;justify-content:center;transform:translateY(-14px)}.site-mobile-tabbar .site-mobile-tabbar-home svg{width:69px;height:69px;filter:drop-shadow(0 0 6px rgba(255,255,255,.35))}.site-mobile-tabbar .site-mobile-tabbar-home span{display:none}.site-mobile-tabbar [aria-current="page"]{color:var(--orange,#f37021)}
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
    mobileNav.innerHTML = `<ul><li><a href="index.html" aria-label="Online store"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.56 8.21c0 2.04.87 4.08 2.1 5.5L10 19.12l5.34-5.41c1.22-1.42 2.1-3.46 2.1-5.5C17.44 3.96 14.11.5 10 .5S2.56 3.96 2.56 8.21Z"></path><path d="M10.06 10.37a2.31 2.31 0 1 0 0-4.63 2.31 2.31 0 0 0 0 4.63Z"></path></svg></a></li><li><a href="catalog.html" aria-label="Full catalog"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 18.5c4.7 0 8.5-3.8 8.5-8.5S14.7 1.5 10 1.5 1.5 5.3 1.5 10 5.3 18.5 10 18.5Z"></path><path d="M6 10h8M10 6v8"></path></svg></a></li></ul><a class="site-mobile-logo" href="index.html" aria-label="Home"><svg viewBox="0 0 100 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M78.175 17.244h2.07c.142 0 .235-.093.235-.236v-6.505c0-.143.093-.236.235-.236h6.11c.26 0 .42.068.514.143l7.707 6.79s.069.05.118.05h3.197c.236 0 .236-.21-.186-.589l-8.928-7.707 8.222-7.69c.329-.328.329-.514.093-.514h-3.197a.172.172 0 0 0-.118.05l-7.262 6.79c-.068.093-.26.143-.514.143h-5.756c-.142 0-.235-.093-.235-.236V.985c0-.142-.093-.235-.236-.235h-2.07c-.142 0-.235.093-.235.235v16.03c0 .142.093.229.236.229ZM26.76 7.12h2.07c.142 0 .235-.093.235-.236v-1.81c0-.891.849-1.784 1.692-1.784h12.64c.848 0 1.69.893 1.69 1.785v1.81c0 .142.094.235.236.235h2.07c.142 0 .235-.093.235-.236v-2.07c0-2.28-1.834-4.064-4.163-4.064H30.682c-2.323 0-4.157 1.784-4.157 4.065v2.07c0 .142.093.235.235.235ZM26.525 11.116v2.07c0 2.255 1.859 4.064 4.157 4.064h12.783c2.33 0 4.157-1.81 4.157-4.065v-2.07c0-.142-.093-.235-.235-.235h-2.07c-.142 0-.235.093-.235.236v1.81c0 .891-.843 1.784-1.692 1.784H30.75c-.849 0-1.691-.893-1.691-1.785v-1.81c0-.142-.093-.235-.236-.235h-2.07c-.142 0-.228.093-.228.236ZM72.673 6.202V4.816c0-2.28-1.81-4.065-4.158-4.065h-15.39c-.143 0-.236.093-.236.235v16.03c0 .142.093.235.235.235h2.07c.142 0 .235-.093.235-.235v-6.513c0-.142.093-.235.236-.235h5.502c.26 0 .42.068.514.143l7.472 6.79s.068.05.118.05h3.123c.235 0 .47-.186.025-.589l-7.33-6.394h3.432c2.324 0 4.152-1.784 4.152-4.064ZM55.665 7.727c-.143 0-.236-.093-.236-.236V3.526c0-.143.093-.236.236-.236h12.782c.849 0 1.691.893 1.691 1.785v.867c0 .892-.848 1.785-1.691 1.785H55.665ZM21.704 6.27V4.816c0-2.28-1.81-4.065-4.157-4.065H2.156c-.143 0-.242.093-.242.235v16.03c0 .142.093.235.236.235h15.397c2.33 0 4.157-1.741 4.157-4.021v-1.506c0-1.363-1.27-2.726-2.54-2.726 1.27 0 2.54-1.363 2.54-2.726Zm-2.54 6.649c0 .892-.843 1.784-1.692 1.784H4.69c-.143 0-.236-.092-.236-.235v-3.972c0-.142.093-.235.236-.235h12.782c.85 0 1.692.892 1.692 1.784v.874Zm0-6.977c0 .892-.843 1.785-1.692 1.785H4.69c-.143 0-.236-.093-.236-.236V3.526c0-.143.093-.236.236-.236h12.782c.85 0 1.692.893 1.692 1.785v.867Z"></path></svg></a><ul><li><a href="bundles.html" aria-label="Bundles"><svg viewBox="0 0 20 22" aria-hidden="true"><path d="M5 11C5-2.33 15-2.33 15 11"></path><path d="M.5 7.93c0-.24.19-.41.48-.41h18.05c.28 0 .47.17.47.41v12.19c0 .24-.19.4-.47.4H.98a.52.52 0 0 1-.48-.4V7.93Z"></path></svg></a></li><li><a href="about.html" aria-label="About us"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Z"></path><path d="m19 19-5-5"></path></svg></a></li><li><a href="about.html#contact" aria-label="Contacts"><svg viewBox="0 0 20 22" aria-hidden="true"><path d="M10 21h7.16c2.4 0 1.83-1.58 1.65-2.33a9.82 9.82 0 0 0-1.93-3.94 9.15 9.15 0 0 0-3.4-2.61c-1.07-.47-1.35.56-3.48.56-2.07 0-2.44-1.02-3.53-.54a9.18 9.18 0 0 0-3.51 2.78 9.86 9.86 0 0 0-1.87 4.19C.97 19.7.67 21 2.74 21H10Zm0-11c1.13 0 2.22-.47 3.01-1.32A4.63 4.63 0 0 0 14.26 5.5a4.63 4.63 0 0 0-1.25-3.18A4.15 4.15 0 0 0 10 1c-1.13 0-2.22.47-3.01 1.32A4.63 4.63 0 0 0 5.74 5.5a4.63 4.63 0 0 0 1.25 3.18A4.15 4.15 0 0 0 10 10Z"></path></svg></a></li></ul>`;
    mobileNav.querySelector('ul:first-child li:first-child')?.remove();
    mobileNav.querySelector('ul:last-child li:last-child')?.remove();
    mobileNav.querySelector('.site-mobile-logo').textContent = 'Dentavel';
    const mobileTabbar = document.createElement('nav');
    mobileTabbar.className = 'site-mobile-tabbar';
    mobileTabbar.setAttribute('aria-label', 'Mobile navigation');
    mobileTabbar.innerHTML = `<a href="index.html"><svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="9.75" cy="9.75" r="2.75"></circle><circle cx="18" cy="9.75" r="2.75"></circle><circle cx="26.25" cy="9.75" r="2.75"></circle><circle cx="9.75" cy="18" r="2.75"></circle><circle cx="18" cy="18" r="2.75"></circle><circle cx="26.25" cy="18" r="2.75"></circle><circle cx="9.75" cy="26.25" r="2.75"></circle><circle cx="18" cy="26.25" r="2.75"></circle><circle cx="26.25" cy="26.25" r="2.75"></circle></svg><span>Online store</span></a><a href="catalog.html"><svg viewBox="0 0 37 36" aria-hidden="true"><path d="M9.405 15.856c0 2.448 1.05 4.895 2.52 6.597l5.694 5.77a1 1 0 0 0 1.423 0l5.693-5.77c1.47-1.702 2.52-4.15 2.52-6.597 0-5.107-3.99-9.256-8.926-9.256-4.935 0-8.924 4.15-8.924 9.256Z"></path><circle cx="18.405" cy="15.664" r="2.74"></circle></svg><span>Full catalog</span></a><a class="site-mobile-tabbar-home" href="index.html" aria-label="Home"><svg viewBox="0 0 69 69" aria-hidden="true"><circle cx="34.5" cy="34.5" r="23.25"></circle><path d="M43.343 36.5h-3.518v3.391H28.906V36.5h-3.518v3.13c0 1.957 1.051 2.87 3.381 2.87h11.239c2.33 0 3.381-.87 3.381-2.87l-.046-3.13ZM40.078 27.5H28.786c-2.342 0-3.397.876-3.397 2.891V33.5h3.535v-3.416h10.925V33.5h3.535v-3.11c.092-1.97-.964-2.89-3.305-2.89Z" fill="currentColor" stroke="none"></path></svg><span>Home</span></a><a href="bundles.html"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M11 15.1C11 .43 25 .43 25 15.1"></path><path d="M7 12.6c0-.3.22-.5.55-.5h20.9c.33 0 .55.2.55.5v15c0 .3-.22.5-.55.5H7.55a.55.55 0 0 1-.55-.5v-15Z"></path></svg><span>Bundles</span></a><a href="about.html"><svg viewBox="0 0 36 36" aria-hidden="true"><path d="M18 28h8.754c2.93 0 2.235-1.817 2.015-2.68a12.3 12.3 0 0 0-2.36-4.534 11.4 11.4 0 0 0-4.159-2.998c-1.309-.54-1.645.644-4.25.644-2.524 0-2.988-1.173-4.32-.621a11.46 11.46 0 0 0-4.29 3.198A12.2 12.2 0 0 0 7.103 25.826C6.964 26.505 6.593 28 9.13 28H18Zm0-12.65a5.21 5.21 0 1 0 0-10.35 5.21 5.21 0 0 0 0 10.35Z"></path></svg><span>About us</span></a>`;
    const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    [mobileNav, mobileTabbar].forEach(menu => menu.querySelectorAll('a').forEach(link => {
      const target = (link.getAttribute('href') || '').toLowerCase();
      if (target === currentPage || (currentPage === '' && target === 'index.html')) link.setAttribute('aria-current', 'page');
    }));
    document.body.append(mobileNav);
    document.body.append(mobileTabbar);

    const cartBadge = actions.querySelector('.site-cart-count');
    const cartSummary = drawer.querySelector('.site-cart-summary');
    let storedCart = [];
    try {
      const parsedCart = JSON.parse(localStorage.getItem('denta-cart') || '[]');
      if (Array.isArray(parsedCart)) storedCart = parsedCart;
    } catch (_) {}
    const storedCount = Number(localStorage.getItem('denta-cart-count') || 0);
    let cartCount = Math.max(Number.isFinite(storedCount) ? storedCount : 0, storedCart.length);
    localStorage.setItem('denta-cart-count', String(cartCount));
    const renderCart = () => {
      cartBadge.textContent = cartCount;
      cartBadge.hidden = cartCount === 0;
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
