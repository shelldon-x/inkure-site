/* ═══════════════════════════════════════════════════════════
   INKURE — Scripts compartilhados
   Modal "Onde comprar" · Menu mobile · Scroll reveal
   ═══════════════════════════════════════════════════════════ */
(function(){
  'use strict';

  // ─── Scroll reveal ───
  function initReveal(){
    var els = document.querySelectorAll('.rv');
    if(!els.length || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .1 });
    els.forEach(function(el){ obs.observe(el); });
  }

  // ─── Menu hamburguer ───
  function initMenu(){
    var hb  = document.getElementById('hb');
    var mob = document.getElementById('mob');
    if(!hb || !mob) return;

    function openMenu(){
      hb.classList.add('open');
      mob.classList.add('open');
      hb.setAttribute('aria-expanded','true');
      hb.setAttribute('aria-label','Fechar menu');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu(){
      hb.classList.remove('open');
      mob.classList.remove('open');
      hb.setAttribute('aria-expanded','false');
      hb.setAttribute('aria-label','Abrir menu');
      document.body.style.overflow = '';
    }

    hb.addEventListener('click', function(){
      hb.classList.contains('open') ? closeMenu() : openMenu();
    });
    mob.addEventListener('click', function(e){
      if(e.target === mob) closeMenu();
    });

    // Fechar ao clicar em qualquer link/botão dentro do menu mobile
    mob.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        // botão "Onde comprar" dentro do mobile abre modal após fechar menu
        if(el.dataset.action === 'open-modal'){
          closeMenu();
          setTimeout(openModal, 320);
        } else {
          closeMenu();
        }
      });
    });

    // ESC fecha menu
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && hb.classList.contains('open')) closeMenu();
    });

    // Exporta para escopo global
    window.closeMenu = closeMenu;
  }

  // ─── Modal "Onde comprar" ───
  function initModal(){
    var modal = document.getElementById('buyModal');
    if(!modal) return;

    function openModal(){
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeModal(){
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    modal.addEventListener('click', function(e){
      if(e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Botão de fechar explícito
    var closeBtn = modal.querySelector('.modal-close');
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    // Exporta para escopo global (para handlers onclick inline de CTAs)
    window.openModal = openModal;
    window.closeModal = closeModal;
    // Aliases usados no prompt original
    window.abrirModalCompra = openModal;
    window.fecharModal = closeModal;
  }

  // ─── Init ao carregar DOM ───
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initReveal();
      initMenu();
      initModal();
    });
  } else {
    initReveal();
    initMenu();
    initModal();
  }
})();
