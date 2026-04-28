/* ═══════════════════════════════════════════════════════════
   INKURE — Layout Global + Scripts Compartilhados
   Header · Menu mobile · Modal marketplaces · Footer · Sticky CTA
   Fonte única de verdade para componentes globais.
   ═══════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  var WHATSAPP_NUMBER = window.INKURE_WHATSAPP_NUMBER || '5511972416790';

  function removeLegacyGlobals(){
    document.querySelectorAll('nav.nv, .nv-mob, #buyModal, #stickyCTA, footer.ft, footer.ft-site').forEach(function(el){ el.remove(); });
  }

  function layoutHTML(){
    return ''+
    '<nav class="nv" data-global-layout="true"><div class="nv-i">'+
      '<a href="/" class="nv-l" aria-label="Inkure — início"><img class="site-logo-icon" src="/assets/logo.svg" alt="" aria-hidden="true"><span>inkure</span></a>'+
      '<div class="nv-desk">'+
        '<a href="/#conceito">Conceito</a>'+
        '<a href="/#linha">Linha</a>'+
        '<a href="/guia-tatuagem-completo">Guia completo</a>'+
        '<a href="/#revenda">Revenda</a>'+
        '<button class="nv-btn" onclick="openModal()" type="button">Onde comprar</button>'+
        '<a href="https://instagram.com/tattoo.skincare" target="_blank" rel="noopener noreferrer">Instagram</a>'+
      '</div>'+
      '<button class="hb" id="hb" aria-label="Abrir menu" aria-expanded="false" aria-controls="mob"><span></span><span></span><span></span></button>'+
    '</div></nav>'+
    '<div class="nv-mob" id="mob" data-global-layout="true">'+
      '<a href="/">Início</a>'+
      '<a href="/#conceito">Conceito</a>'+
      '<a href="/#linha">Linha</a>'+
      '<a href="/guia-tatuagem-completo">Guia completo</a>'+
      '<a href="/#revenda">Revenda</a>'+
      '<button type="button" data-action="open-modal">Onde comprar</button>'+
      '<a href="https://instagram.com/tattoo.skincare" target="_blank" rel="noopener noreferrer">Instagram</a>'+
    '</div>'+
    '<div class="modal-overlay" id="buyModal" role="dialog" aria-modal="true" aria-label="Onde comprar" data-global-layout="true">'+
      '<div class="modal">'+
        '<button class="modal-close" aria-label="Fechar">✕</button>'+
        '<h3>Onde comprar</h3>'+
        '<p>Escolha o canal de compra preferido. Entrega rápida em todo o Brasil.</p>'+
        '<div class="ch-grid">'+
          '<a href="https://www.amazon.com.br/" target="_blank" rel="noopener noreferrer" class="ch-link ch-amazon"><div class="ch-icon"><img src="/assets/icons/amazon.svg" alt=""></div><span class="ch-name">Amazon</span><span class="ch-arrow">→</span></a>'+
          '<a href="https://shopee.com.br/" target="_blank" rel="noopener noreferrer" class="ch-link ch-shopee"><div class="ch-icon"><img src="/assets/icons/shopee.svg" alt=""></div><span class="ch-name">Shopee</span><span class="ch-arrow">→</span></a>'+
          '<a href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer" class="ch-link ch-ml"><div class="ch-icon"><img src="/assets/icons/mercado-livre.svg" alt=""></div><span class="ch-name">Mercado Livre</span><span class="ch-arrow">→</span></a>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<button id="stickyCTA" class="sticky-cta" onclick="openModal()" type="button" aria-label="Onde comprar" data-global-layout="true">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>Onde comprar'+
    '</button>'+
    '<footer class="ft-site" data-global-layout="true">'+
      '<div class="ft-inner">'+
        '<div class="ft-main">'+
          '<div class="ft-brand">'+
            '<a href="/" class="ft-logo" aria-label="Inkure — início"><img class="site-logo-icon" src="/assets/logo.svg" alt="" aria-hidden="true"><span>inkure</span></a>'+
            '<p>Tattoo skincare premium para preservar a arte na pele por décadas.</p>'+
          '</div>'+
          '<div class="ft-cols">'+
            '<div class="ft-col"><h4>Navegação</h4><a href="/guia-tatuagem-completo">Guia completo</a><a href="/#linha">Linha completa</a><a href="/tatuagem-cicatrizacao-cuidados">Cicatrização</a><a href="/produtos-para-tatuagem">Produtos</a><a href="/#revenda">Revenda</a></div>'+
            '<div class="ft-col"><h4>Institucional</h4><a href="/#conceito">Sobre a Inkure</a><a href="/como-cuidar-da-tatuagem">Cuidados</a><button type="button" onclick="openModal()">Onde comprar</button><a href="/melhor-creme-para-tatuagem">Perguntas frequentes</a><a href="mailto:contato@inkure.com.br">Contato</a></div>'+
            '<div class="ft-col"><h4>Conecte-se</h4><a href="https://instagram.com/tattoo.skincare" target="_blank" rel="noopener noreferrer">Instagram</a></div>'+
          '</div>'+
        '</div>'+
        '<div class="ft-market">'+
          '<p class="ft-market-title">Onde comprar</p>'+
          '<div class="ft-buy">'+
            '<a href="https://www.amazon.com.br/" target="_blank" rel="noopener noreferrer"><span><img src="/assets/icons/amazon.svg" alt=""></span><small>Amazon</small></a>'+
            '<a href="https://shopee.com.br/" target="_blank" rel="noopener noreferrer"><span><img src="/assets/icons/shopee.svg" alt=""></span><small>Shopee</small></a>'+
            '<a href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer"><span><img src="/assets/icons/mercado-livre.svg" alt=""></span><small>Mercado Livre</small></a>'+
          '</div>'+
        '</div>'+
        '<div class="ft-bottom">© 2026 Inkure · Todos os direitos reservados.</div>'+
      '</div>'+
    '</footer>';;
  }

  function injectLayout(){
    removeLegacyGlobals();
    document.body.insertAdjacentHTML('afterbegin', layoutHTML());
    var footer = document.querySelector('footer.ft-site[data-global-layout="true"]');
    if(footer) document.body.appendChild(footer);
    document.body.classList.add('global-layout-ready');
  }

  function initReveal(){
    var els = document.querySelectorAll('.rv');
    if(!els.length || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('show'); obs.unobserve(e.target); }
      });
    }, { threshold: .1 });
    els.forEach(function(el){ obs.observe(el); });
  }

  function initMenu(){
    var hb  = document.getElementById('hb');
    var mob = document.getElementById('mob');
    if(!hb || !mob) return;

    function openMenu(){
      hb.classList.add('open'); mob.classList.add('open');
      hb.setAttribute('aria-expanded','true'); hb.setAttribute('aria-label','Fechar menu');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      hb.classList.remove('open'); mob.classList.remove('open');
      hb.setAttribute('aria-expanded','false'); hb.setAttribute('aria-label','Abrir menu');
      document.body.style.overflow = '';
    }

    hb.addEventListener('click', function(){ hb.classList.contains('open') ? closeMenu() : openMenu(); });
    mob.addEventListener('click', function(e){ if(e.target === mob) closeMenu(); });
    mob.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        if(el.dataset.action === 'open-modal'){ closeMenu(); setTimeout(openModal, 320); }
        else { closeMenu(); }
      });
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && hb.classList.contains('open')) closeMenu(); });
    window.closeMenu = closeMenu;
  }

  function initModal(){
    var modal = document.getElementById('buyModal');
    if(!modal) return;

    function openModal(){ modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeModal(){ modal.classList.remove('open'); document.body.style.overflow = ''; }

    modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
    var closeBtn = modal.querySelector('.modal-close');
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    window.openModal = openModal;
    window.closeModal = closeModal;
    window.abrirModalCompra = openModal;
    window.fecharModal = closeModal;
  }

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

  function init(){
    injectLayout();
    initReveal();
    initMenu();
    initModal();
    initStickyCTA();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
