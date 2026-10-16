(() => {
  const products = [
    'E390 Endo Motor', 'C-SMART-I PILOT', 'OLED Endodontic Motor',
    'Curing Light PREMIUM', 'Composite Resin Heater', 'E220 Digital Shade Guide',
    'UltraClear HD Mirror Set', 'ProLight X LED Lamp'
  ];

  const styles = `
    header[data-site-navigation]{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important}
    header[data-site-navigation] > .brand{grid-column:1;justify-self:start}
    header[data-site-navigation] > nav{grid-column:2;justify-self:center;display:flex!important;align-items:center!important;justify-content:center!important;white-space:nowrap}
    .site-nav-actions{grid-column:3;justify-self:end;display:flex;align-items:center;gap:7px;min-width:84px;justify-content:flex-end}
    header[data-site-navigation][data-header-layout="catalog"] .site-nav-actions{margin-right:clamp(24px,1.65vw,32px)}
    .site-nav-button{width:38px;height:38px;display:grid;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer;transition:background .2s ease,color .2s ease}.site-nav-button:hover{background:rgba(255,255,255,.09);color:var(--orange,#f36d24)}
    .site-nav-button svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.site-cart{position:relative}.site-cart-count{position:absolute;right:-2px;top:-1px;min-width:14px;height:14px;padding:0 3px;display:grid;place-items:center;border-radius:20px;background:var(--orange,#f36d24);color:#21130d;font:700 8px/1 Arial,sans-serif}
    .site-search{grid-column:2;display:none;align-items:center;width:min(620px,45vw);height:42px;padding:0 8px 0 17px;border:1px solid color-mix(in srgb,currentColor 28%,transparent);border-radius:999px;background:rgba(20,17,15,.28);color:inherit}.site-search svg{width:16px;height:16px;flex:0 0 auto;fill:none;stroke:currentColor;stroke-width:1.5}.site-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:inherit;font:500 13px var(--text,Arial,sans-serif)}.site-search input::placeholder{color:currentColor;opacity:.55}.site-search button{width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;font-size:20px;line-height:1;cursor:pointer}.site-search button:hover{background:rgba(255,255,255,.1)}
    header[data-site-navigation].search-open > nav{display:none!important}header[data-site-navigation].search-open > .site-search{display:flex}
    .site-cart-drawer{position:fixed;z-index:1000;right:20px;top:20px;width:min(390px,calc(100vw - 40px));padding:26px;border:1px solid var(--line,rgba(255,255,255,.2));border-radius:18px;background:var(--panel,#26211e);color:var(--ink,#f2f2f2);box-shadow:0 28px 80px rgba(0,0,0,.35);transform:translateY(-14px);opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease}.site-cart-drawer.is-open{transform:translateY(0);opacity:1;pointer-events:auto}.site-cart-drawer header{display:flex;align-items:center;justify-content:space-between}.site-cart-drawer h2{margin:0;font:400 28px/.95 var(--display,Arial,sans-serif);letter-spacing:-.05em}.site-cart-close{border:0;background:transparent;color:inherit;font-size:22px;cursor:pointer}.site-cart-drawer p{margin:30px 0 0;color:var(--muted,#b9b1ad);font:14px/1.5 var(--text,Arial,sans-serif)}.site-search-results{width:min(1840px,calc(100% - 48px));margin:18px auto 0;color:var(--muted,#b9b1ad);font:13px var(--text,Arial,sans-serif)}.product[hidden]{display:none!important}
    @media(max-width:760px){header[data-site-navigation]{grid-template-columns:1fr auto!important}header[data-site-navigation] > nav{display:none!important}.site-nav-actions{grid-column:2}.site-search{grid-column:1 / -1;grid-row:2;width:calc(100% - 24px);justify-self:center;margin:0 0 10px}header[data-site-navigation].search-open{height:auto!important;min-height:70px}header[data-site-navigation].search-open > .site-search{display:flex}.site-nav-button{width:34px;height:34px}}
  `;

  const inject = () => {
    const header = document.querySelector('header.topbar, header.top');
    if (!header || header.dataset.siteNavigation) return;
    header.dataset.siteNavigation = 'true';
    if (header.closest('.catalog-hero')) header.dataset.headerLayout = 'catalog';
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
    actions.innerHTML = `<button class="site-nav-button site-search-trigger" type="button" aria-label="Search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.3 4.3"></path></svg></button><button class="site-nav-button site-cart" type="button" aria-label="Open shopping cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h2l1.7 10.1h10.1l2-7.2H7"></path><circle cx="9" cy="19.1" r="1"></circle><circle cx="17" cy="19.1" r="1"></circle></svg><span class="site-cart-count">0</span></button>`;
    header.append(actions);

    const drawer = document.createElement('aside');
    drawer.className = 'site-cart-drawer';
    drawer.setAttribute('aria-label', 'Shopping cart');
    drawer.innerHTML = '<header><h2>Shopping cart</h2><button class="site-cart-close" type="button" aria-label="Close shopping cart">×</button></header><p class="site-cart-summary">Your cart is ready for selected equipment.</p>';
    document.body.append(drawer);

    const cartBadge = actions.querySelector('.site-cart-count');
    const cartSummary = drawer.querySelector('.site-cart-summary');
    let cartCount = Number(localStorage.getItem('denta-cart-count') || 0);
    const renderCart = () => {
      cartBadge.textContent = cartCount;
      cartBadge.hidden = cartCount === 0;
      cartSummary.textContent = cartCount ? `${cartCount} ${cartCount === 1 ? 'item' : 'items'} selected for your clinical workflow.` : 'Your cart is ready for selected equipment.';
    };
    renderCart();

    const input = search.querySelector('input');
    const closeSearch = () => { header.classList.remove('search-open'); actions.querySelector('.site-search-trigger').focus(); };
    actions.querySelector('.site-search-trigger').addEventListener('click', () => { header.classList.add('search-open'); input.focus(); });
    search.querySelector('button').addEventListener('click', closeSearch);
    search.addEventListener('submit', event => {
      event.preventDefault();
      const query = input.value.trim().toLowerCase();
      if (!query) return;
      const match = products.find(name => name.toLowerCase().includes(query));
      window.location.href = `catalog.html?search=${encodeURIComponent(match || input.value.trim())}`;
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && header.classList.contains('search-open')) closeSearch(); });
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
