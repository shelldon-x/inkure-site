/* ═══════════════════════════════════════════════════════════
   INKURE v6 — Layout Global + Scripts Compartilhados
   Header · Menu mobile · Modal marketplaces · Footer · Sticky CTA

   v6 melhorias:
   · Focus trap no modal e menu (acessibilidade WCAG 2.4.3)
   · Microcopy A/B ready (data-cta-variant ou window.INKURE_CTA_VARIANT)
   · Tracking events para marketplaces (GA4/Clarity/Pixel ready)
   · Race condition resolvida (early modal shim)
   · Reduced motion respeitado
   · Cleanup idempotente
   · Logo com fallback automático (logo-light.svg → logo.svg)
   ═══════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  /* ─── Config global ─── */
  var WHATSAPP_NUMBER  = window.INKURE_WHATSAPP_NUMBER  || '5511972416790';
  var INSTAGRAM_HANDLE = window.INKURE_INSTAGRAM || 'inkure.care';
  var EMAIL            = window.INKURE_EMAIL            || 'contato@inkure.com.br';
  var MARKETPLACE_QUERY = window.INKURE_MARKETPLACE_QUERY || 'inkure tattoo skincare';
  var MARKETPLACE_URLS = {
    amazon: 'https://www.amazon.com.br/s?k=' + encodeURIComponent(MARKETPLACE_QUERY),
    shopee: 'https://shopee.com.br/search?keyword=' + encodeURIComponent(MARKETPLACE_QUERY),
    ml: 'https://lista.mercadolivre.com.br/' + encodeURIComponent(MARKETPLACE_QUERY).replace(/%20/g,'-')
  };

  /* ─── Microcopy A/B variants ─── */
  var CTA_VARIANTS = {
    A: { primary: 'Onde comprar →', short: 'Onde comprar', secondary: 'Adquirir a linha' },
    B: { primary: 'Quero a linha →', short: 'Comprar agora', secondary: 'Comprar Inkure' },
    C: { primary: 'Comprar agora →', short: 'Comprar', secondary: 'Quero conhecer' }
  };
  var bodyVariant = (document.body && document.body.dataset.ctaVariant) || '';
  var variant = bodyVariant || window.INKURE_CTA_VARIANT || 'A';
  var COPY = CTA_VARIANTS[variant] || CTA_VARIANTS.A;

  /* ─── Reduced motion ─── */
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ═══════════════════════════════════════════════════════════
     EARLY MODAL SHIM — race condition fix
     ═══════════════════════════════════════════════════════════ */
  var pendingModalOpen = false;
  if(typeof window.openModal !== 'function'){
    window.openModal = function(){ pendingModalOpen = true; };
    window.abrirModalCompra = window.openModal;
  }
  if(typeof window.closeModal !== 'function'){
    window.closeModal = function(){};
    window.fecharModal = window.closeModal;
  }

  /* ═══════════════════════════════════════════════════════════
     LIMPEZA — remove layout antigo (idempotente)
     ═══════════════════════════════════════════════════════════ */
  function removeLegacyGlobals(){
    if(document.querySelector('[data-global-layout="true"]')) return false;
    document.querySelectorAll('nav.nv:not([data-global-layout]), .nv-mob:not([data-global-layout]), #buyModal:not([data-global-layout]), #stickyCTA:not([data-global-layout]), footer.ft:not([data-global-layout]), footer.ft-site:not([data-global-layout])')
      .forEach(function(el){ el.remove(); });
    return true;
  }

  /* ═══════════════════════════════════════════════════════════
     LAYOUT HTML
     ═══════════════════════════════════════════════════════════ */
  function layoutHTML(){
    return ''+
    '<nav class="nv" data-global-layout="true" aria-label="Navegação principal"><div class="nv-i">'+
      '<a href="/" class="nv-l" aria-label="Inkure — início"><img class="site-logo-icon" src="/assets/logo.svg" alt="" aria-hidden="true" width="16" height="26"><span>inkure</span></a>'+
      '<div class="nv-desk">'+
        '<a href="/#conceito">Conceito</a>'+
        '<a href="/#linha">Linha</a>'+
        '<a href="/guia-tatuagem-completo">Guia completo</a>'+
        '<a href="/#revenda">Revenda</a>'+
        '<button class="nv-btn" type="button" data-buy-cta data-cta-location="nav-desktop">'+COPY.short+'</button>'+
        '<a class="ig-link" href="https://instagram.com/'+INSTAGRAM_HANDLE+'" target="_blank" rel="noopener noreferrer" aria-label="Instagram @'+INSTAGRAM_HANDLE+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>@'+INSTAGRAM_HANDLE+'</a>'+
      '</div>'+
      '<button class="hb" id="hb" aria-label="Abrir menu" aria-expanded="false" aria-controls="mob"><span></span><span></span><span></span></button>'+
    '</div></nav>'+

    '<div class="nv-mob" id="mob" data-global-layout="true">'+
      '<a href="/">Início</a>'+
      '<a href="/#conceito">Conceito</a>'+
      '<a href="/#linha">Linha</a>'+
      '<a href="/guia-tatuagem-completo">Guia completo</a>'+
      '<a href="/#revenda">Revenda</a>'+
      '<button type="button" data-action="open-modal" data-buy-cta data-cta-location="nav-mobile">'+COPY.short+'</button>'+
      '<a class="ig-link" href="https://instagram.com/'+INSTAGRAM_HANDLE+'" target="_blank" rel="noopener noreferrer" aria-label="Instagram @'+INSTAGRAM_HANDLE+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>@'+INSTAGRAM_HANDLE+'</a>'+
    '</div>'+

    '<div class="modal-overlay" id="buyModal" role="dialog" aria-modal="true" aria-labelledby="buyModalTitle" data-global-layout="true">'+
      '<div class="modal" role="document">'+
        '<button class="modal-close" aria-label="Fechar modal" type="button">✕</button>'+
        '<h3 id="buyModalTitle">Onde comprar</h3>'+
        '<p>Escolha o canal de compra preferido. Entrega rápida em todo o Brasil.</p>'+
        '<div class="ch-grid">'+
          '<a href="'+MARKETPLACE_URLS.amazon+'" target="_blank" rel="noopener noreferrer" class="ch-link ch-amazon" data-marketplace="amazon" data-cta-location="modal">'+
            '<div class="ch-icon"><img src="/assets/icons/amazon.svg" alt="" width="36" height="36"></div>'+
            '<span class="ch-name">Amazon<span class="ch-sub">Buscar “Inkure tattoo skincare”</span></span><span class="ch-arrow" aria-hidden="true">→</span>'+
          '</a>'+
          '<a href="'+MARKETPLACE_URLS.shopee+'" target="_blank" rel="noopener noreferrer" class="ch-link ch-shopee" data-marketplace="shopee" data-cta-location="modal">'+
            '<div class="ch-icon"><img src="/assets/icons/shopee.svg" alt="" width="36" height="36"></div>'+
            '<span class="ch-name">Shopee<span class="ch-sub">Buscar “Inkure tattoo skincare”</span></span><span class="ch-arrow" aria-hidden="true">→</span>'+
          '</a>'+
          '<a href="'+MARKETPLACE_URLS.ml+'" target="_blank" rel="noopener noreferrer" class="ch-link ch-ml" data-marketplace="mercado-livre" data-cta-location="modal">'+
            '<div class="ch-icon"><img src="/assets/icons/mercado-livre.svg" alt="" width="36" height="36"></div>'+
            '<span class="ch-name">Mercado Livre<span class="ch-sub">Buscar “Inkure tattoo skincare”</span></span><span class="ch-arrow" aria-hidden="true">→</span>'+
          '</a>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<button id="stickyCTA" class="sticky-cta" type="button" aria-label="'+COPY.short+'" data-buy-cta data-cta-location="sticky-mobile" data-global-layout="true">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'+
      COPY.short+
    '</button>'+

    '<footer class="ft-site" data-global-layout="true">'+
      '<div class="ft-inner">'+
        '<div class="ft-main">'+
          '<div class="ft-brand">'+
            '<a href="/" class="ft-logo" aria-label="Inkure — início"><img class="site-logo-icon-light" src="/assets/logo-light.svg" alt="" aria-hidden="true" width="18" height="29" onerror="this.classList.add(\'fallback\');this.src=\'/assets/logo.svg\';this.onerror=null"><span>inkure</span></a>'+
            '<p>Tattoo skincare premium para preservar a arte na pele por décadas.</p>'+
          '</div>'+
          '<div class="ft-cols">'+
            '<div class="ft-col"><h4>Navegação</h4><a href="/guia-tatuagem-completo">Guia completo</a><a href="/#linha">Linha completa</a><a href="/tatuagem-cicatrizacao-cuidados">Cicatrização</a><a href="/produtos-para-tatuagem">Produtos</a><a href="/#revenda">Revenda</a></div>'+
            '<div class="ft-col"><h4>Institucional</h4><a href="/#conceito">Sobre a Inkure</a><a href="/como-cuidar-da-tatuagem">Cuidados</a><button type="button" data-buy-cta data-cta-location="footer">'+COPY.short+'</button><a href="/melhor-creme-para-tatuagem">Perguntas frequentes</a><a href="mailto:'+EMAIL+'">Contato</a></div>'+
            '<div class="ft-col"><h4>Conecte-se</h4><a class="ig-link" href="https://instagram.com/'+INSTAGRAM_HANDLE+'" target="_blank" rel="noopener noreferrer" aria-label="Instagram @'+INSTAGRAM_HANDLE+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>@'+INSTAGRAM_HANDLE+'</a></div>'+
          '</div>'+
        '</div>'+
        '<div class="ft-market">'+
          '<p class="ft-market-title">Onde comprar</p>'+
          '<div class="ft-buy">'+
            '<a href="'+MARKETPLACE_URLS.amazon+'" target="_blank" rel="noopener noreferrer" data-marketplace="amazon" data-cta-location="footer-marketplace"><span><img src="/assets/icons/amazon.svg" alt="" width="34" height="34"></span><small>Amazon</small></a>'+
            '<a href="'+MARKETPLACE_URLS.shopee+'" target="_blank" rel="noopener noreferrer" data-marketplace="shopee" data-cta-location="footer-marketplace"><span><img src="/assets/icons/shopee.svg" alt="" width="34" height="34"></span><small>Shopee</small></a>'+
            '<a href="'+MARKETPLACE_URLS.ml+'" target="_blank" rel="noopener noreferrer" data-marketplace="mercado-livre" data-cta-location="footer-marketplace"><span><img src="/assets/icons/mercado-livre.svg" alt="" width="34" height="34"></span><small>Mercado Livre</small></a>'+
          '</div>'+
        '</div>'+
        '<div class="ft-bottom">© 2026 Inkure · Todos os direitos reservados.</div>'+
      '</div>'+
    '</footer>';
  }

  function injectLayout(){
    var didCleanup = removeLegacyGlobals();
    if(!didCleanup) return;
    document.body.insertAdjacentHTML('afterbegin', layoutHTML());
    var footer = document.querySelector('footer.ft-site[data-global-layout="true"]');
    if(footer) document.body.appendChild(footer);
    document.body.classList.add('global-layout-ready');
  }

  /* ─── Scroll reveal (respeita reduced motion) ─── */
  function initReveal(){
    var els = document.querySelectorAll('.rv');
    if(!els.length) return;
    if(prefersReducedMotion || !('IntersectionObserver' in window)){
      els.forEach(function(el){ el.classList.add('show'); });
      return;
    }
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('show'); obs.unobserve(e.target); }
      });
    }, { threshold: .1 });
    els.forEach(function(el){ obs.observe(el); });
  }

  /* ─── Menu mobile + focus trap ─── */
  function initMenu(){
    var hb  = document.getElementById('hb');
    var mob = document.getElementById('mob');
    if(!hb || !mob) return;

    var lastFocused = null;

    function openMenu(){
      lastFocused = document.activeElement;
      hb.classList.add('open'); mob.classList.add('open');
      hb.setAttribute('aria-expanded','true'); hb.setAttribute('aria-label','Fechar menu');
      document.body.style.overflow = 'hidden';
      var firstLink = mob.querySelector('a, button');
      if(firstLink) setTimeout(function(){ firstLink.focus(); }, 50);
    }
    function closeMenu(){
      hb.classList.remove('open'); mob.classList.remove('open');
      hb.setAttribute('aria-expanded','false'); hb.setAttribute('aria-label','Abrir menu');
      document.body.style.overflow = '';
      if(lastFocused && lastFocused.focus) lastFocused.focus();
    }

    hb.addEventListener('click', function(){ hb.classList.contains('open') ? closeMenu() : openMenu(); });
    mob.addEventListener('click', function(e){ if(e.target === mob) closeMenu(); });

    mob.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        if(el.dataset.action === 'open-modal'){
          closeMenu();
          setTimeout(function(){ window.openModal(); }, 320);
        } else closeMenu();
      });
    });

    mob.addEventListener('keydown', function(e){
      if(e.key !== 'Tab') return;
      var focusables = mob.querySelectorAll('a, button');
      if(!focusables.length) return;
      var first = focusables[0], last = focusables[focusables.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && hb.classList.contains('open')) closeMenu();
    });

    window.closeMenu = closeMenu;
  }

  /* ─── Modal "Onde comprar" + focus trap ─── */
  function initModal(){
    var modal = document.getElementById('buyModal');
    if(!modal) return;
    var lastFocused = null;

    function openModal(){
      lastFocused = document.activeElement;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      var firstLink = modal.querySelector('a, button');
      if(firstLink) setTimeout(function(){ firstLink.focus(); }, 50);
      track('modal_buy_opened');
    }
    function closeModal(){
      modal.classList.remove('open');
      document.body.style.overflow = '';
      if(lastFocused && lastFocused.focus) lastFocused.focus();
    }

    modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
    var closeBtn = modal.querySelector('.modal-close');
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('keydown', function(e){
      if(e.key !== 'Tab') return;
      var focusables = modal.querySelectorAll('a, button:not([disabled])');
      if(!focusables.length) return;
      var first = focusables[0], last = focusables[focusables.length - 1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    });

    window.openModal       = openModal;
    window.closeModal      = closeModal;
    window.abrirModalCompra= openModal;
    window.fecharModal     = closeModal;

    if(pendingModalOpen){
      pendingModalOpen = false;
      openModal();
    }
  }

  /* ─── Sticky CTA mobile ─── */
  function initStickyCTA(){
    var btn = document.getElementById('stickyCTA');
    if(!btn) return;
    var threshold = 600;
    var ticking = false;

    function update(){
      var y = window.pageYOffset || document.documentElement.scrollTop;
      var modal = document.getElementById('buyModal');
      var modalOpen = modal && modal.classList.contains('open');
      var menuOpen = document.getElementById('mob') && document.getElementById('mob').classList.contains('open');
      var footer = document.querySelector('.ft-site');
      var footerVisible = false;
      if(footer){
        var r = footer.getBoundingClientRect();
        footerVisible = r.top < (window.innerHeight - 40);
      }
      if(y > threshold && !modalOpen && !menuOpen && !footerVisible){
        btn.classList.add('show');
        btn.classList.remove('near-footer');
      } else {
        btn.classList.remove('show');
        if(footerVisible) btn.classList.add('near-footer');
        else btn.classList.remove('near-footer');
      }
      ticking = false;
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }

  /* ─── CTA wiring (event delegation) ─── */
  function initCTAs(){
    document.addEventListener('click', function(e){
      var trigger = e.target.closest('[data-buy-cta]');
      if(trigger){
        e.preventDefault();
        track('click_buy_cta', { location: trigger.dataset.ctaLocation || 'unknown' });
        window.openModal();
        return;
      }
      var marketplace = e.target.closest('[data-marketplace]');
      if(marketplace){
        track('click_marketplace', {
          marketplace: marketplace.dataset.marketplace,
          location: marketplace.dataset.ctaLocation || 'unknown'
        });
      }
    });
  }

  /* ─── Tracking (GA4 / Pixel / Clarity ready) ─── */
  function track(eventName, params){
    params = params || {};
    try {
      if(typeof window.gtag === 'function'){
        window.gtag('event', eventName, params);
      } else if(typeof window.dataLayer !== 'undefined' && window.dataLayer.push){
        var obj = { event: eventName };
        for(var k in params){ if(params.hasOwnProperty(k)) obj[k] = params[k]; }
        window.dataLayer.push(obj);
      }
      if(typeof window.fbq === 'function'){
        window.fbq('trackCustom', eventName, params);
      }
      if(typeof window.clarity === 'function'){
        window.clarity('event', eventName);
      }
    } catch(err){
      if(window.console && window.console.warn) console.warn('Inkure tracking error:', err);
    }
  }
  window.inkureTrack = track;

  /* ─── Form revenda → WhatsApp ─── */
  function sendWhatsApp(e){
    e.preventDefault();
    var f = e.target;
    var get = function(id){ var el = f.querySelector('#'+id); return el ? (el.value||'').trim() : ''; };
    var nome    = get('fname');
    var studio  = get('fstudio')  || 'Não informado';
    var cidade  = get('fcidade');
    var email   = get('femail');
    var whats   = get('fwhats');
    var tipo    = get('ftipo')    || 'Não informado';
    var msg     = get('fmsg')     || 'Sem mensagem adicional';

    if(!nome || !cidade || !email || !whats){
      track('form_revenda_invalid');
      return;
    }
    var texto = '*Interesse em revenda — Inkure*'
      + '\n\n*Nome:* ' + nome
      + '\n*Studio / Empresa:* ' + studio
      + '\n*Cidade / Estado:* ' + cidade
      + '\n*E-mail:* ' + email
      + '\n*WhatsApp:* ' + whats
      + '\n*Perfil:* ' + tipo
      + '\n*Mensagem:* ' + msg;
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
    track('form_revenda_submit');
    window.open(url, '_blank', 'noopener');
    f.reset();
  }
  window.sendWhatsApp = sendWhatsApp;

  /* ─── Init ─── */
  function init(){
    injectLayout();
    initReveal();
    initMenu();
    initModal();
    initStickyCTA();
    initCTAs();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
