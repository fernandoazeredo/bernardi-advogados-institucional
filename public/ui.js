/* Bernardi & Bernardi — interações do site (sem dependências) */
(function () {
  var L = (document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
  if (L !== 'en' && L !== 'es') L = 'pt';

  var STR = {
    pt: {
      ck: 'Este site não utiliza cookies de rastreamento. Apenas o mapa da seção Contato, fornecido pelo Google, pode registrar dados de navegação.',
      ckLink: 'Política de Privacidade', ckHref: 'privacidade.html', ckBtn: 'Entendi',
      eNome: 'Informe o seu nome para que possamos retornar o contato.',
      eContato: 'Informe ao menos um meio de contato: e-mail ou telefone.',
      eEmail: 'O e-mail informado parece incompleto. Verifique antes de enviar.',
      eDesc: 'Descreva a matéria em ao menos uma frase — isso permite direcionar o atendimento.',
      eLgpd: 'É necessário autorizar o tratamento dos dados para prosseguir.',
      eNews: 'Informe um e-mail válido para receber o Alerta Regulatório.',
      tTitulo: 'Solicitação de avaliação preliminar', tNome: 'Nome', tEmpresa: 'Empresa', tEmail: 'E-mail',
      tTel: 'Telefone', tSetor: 'Setor', tNatureza: 'Natureza da matéria', tDesc: 'Descrição',
      subject: 'Avaliação preliminar', newsSubject: 'Alerta Regulatório B&B — inscrição',
      newsBody: 'Desejo receber o Alerta Regulatório.',
      cvClosed: 'Ver trajetória completa  +', cvOpen: 'Recolher  −'
    },
    en: {
      ck: 'This site uses no tracking cookies. Only the map in the Contact section, provided by Google, may record browsing data.',
      ckLink: 'Privacy Policy', ckHref: 'privacy-en.html', ckBtn: 'Got it',
      eNome: 'Please provide your name so that we can get back to you.',
      eContato: 'Please provide at least one means of contact: e-mail or phone.',
      eEmail: 'The e-mail address appears incomplete. Please check before sending.',
      eDesc: 'Please describe the matter in at least one sentence — this helps us direct your request.',
      eLgpd: 'You must authorise the processing of your data to proceed.',
      eNews: 'Please provide a valid e-mail address to receive the Regulatory Alert.',
      tTitulo: 'Request for preliminary assessment', tNome: 'Name', tEmpresa: 'Company', tEmail: 'E-mail',
      tTel: 'Phone', tSetor: 'Sector', tNatureza: 'Matter', tDesc: 'Description',
      subject: 'Preliminary assessment', newsSubject: 'B&B Regulatory Alert — subscription',
      newsBody: 'I would like to receive the Regulatory Alert.',
      cvClosed: 'View full profile  +', cvOpen: 'Collapse  −'
    },
    es: {
      ck: 'Este sitio no utiliza cookies de seguimiento. Solo el mapa de la sección Contacto, proporcionado por Google, puede registrar datos de navegación.',
      ckLink: 'Política de Privacidad', ckHref: 'privacidad-es.html', ckBtn: 'Entendido',
      eNome: 'Indique su nombre para que podamos responderle.',
      eContato: 'Indique al menos un medio de contacto: correo o teléfono.',
      eEmail: 'El correo indicado parece incompleto. Verifíquelo antes de enviar.',
      eDesc: 'Describa el asunto en al menos una frase — eso permite dirigir la atención.',
      eLgpd: 'Es necesario autorizar el tratamiento de los datos para continuar.',
      eNews: 'Indique un correo válido para recibir la Alerta Regulatoria.',
      tTitulo: 'Solicitud de evaluación preliminar', tNome: 'Nombre', tEmpresa: 'Empresa', tEmail: 'E-mail',
      tTel: 'Teléfono', tSetor: 'Sector', tNatureza: 'Asunto', tDesc: 'Descripción',
      subject: 'Evaluación preliminar', newsSubject: 'Alerta Regulatoria B&B — suscripción',
      newsBody: 'Deseo recibir la Alerta Regulatoria.',
      cvClosed: 'Ver trayectoria completa  +', cvOpen: 'Contraer  −'
    }
  }[L];

  var MAIL = 'bernardi@bernardiadvogados.adv.br';
  var WHATS = 'https://wa.me/5521999166368';
  var RE_MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function installResponsiveUi() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var inner = nav.firstElementChild;
    if (!inner) return;
    var links = inner.lastElementChild;
    if (!links || links.tagName === 'A') return;
    inner.classList.add('bb-nav-inner');
    links.classList.add('bb-nav-links');
    var news = document.getElementById('c-news');
    if (news && news.parentElement) news.parentElement.classList.add('bb-news-form');
    var whatsapp = document.querySelector('a[aria-label="WhatsApp"]');
    if (whatsapp) {
      var whatsMessage = L === 'en'
        ? 'Hello, I visited the Bernardi & Bernardi website and would like to get in touch.'
        : (L === 'es'
          ? 'Hola, visité el sitio web de Bernardi & Bernardi y me gustaría ponerme en contacto.'
          : 'Olá, visitei o site Bernardi & Bernardi e gostaria de entrar em contato.');
      whatsapp.href = WHATS + '?text=' + encodeURIComponent(whatsMessage);
      whatsapp.setAttribute('aria-label', 'WhatsApp — Dr. Zilto Bernardi Freitas');
      whatsapp.setAttribute('title', 'Falar com Dr. Zilto Bernardi Freitas');
      whatsapp.style.width = '54px';
      whatsapp.style.height = '54px';
      whatsapp.style.padding = '0';
      whatsapp.style.gap = '0';
      whatsapp.style.borderRadius = '50%';
      whatsapp.style.background = '#1FAE5B';
      whatsapp.style.color = '#FFFFFF';
      whatsapp.style.borderColor = 'rgba(255,255,255,.45)';
      whatsapp.style.fontSize = '.72rem';
      whatsapp.style.fontWeight = '500';
      whatsapp.innerHTML = '<svg aria-hidden="true" viewBox="0 0 32 32" width="27" height="27" fill="currentColor"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.6A12 12 0 1 0 16 3Zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.5-.3-3.3.8.8-3.2-.3-.5A9.7 9.7 0 1 1 16 24.8Zm5.4-7.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3 .9 4.1.8.7-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z"/></svg>';
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'bb-menu-button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', L === 'en' ? 'Open menu' : (L === 'es' ? 'Abrir menú' : 'Abrir menu'));
    button.innerHTML = '<span></span><span></span><span></span>';
    inner.insertBefore(button, links);

    var backdrop = document.createElement('button');
    backdrop.type = 'button';
    backdrop.className = 'bb-menu-backdrop';
    backdrop.setAttribute('aria-label', L === 'en' ? 'Close menu' : (L === 'es' ? 'Cerrar menú' : 'Fechar menu'));
    document.body.appendChild(backdrop);

    function closeMenu() {
      document.documentElement.classList.remove('bb-menu-open');
      button.setAttribute('aria-expanded', 'false');
    }
    function toggleMenu() {
      var open = !document.documentElement.classList.contains('bb-menu-open');
      document.documentElement.classList.toggle('bb-menu-open', open);
      button.setAttribute('aria-expanded', String(open));
    }
    button.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', closeMenu);
    Array.prototype.forEach.call(links.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () {
        closeMenu();
        var href = a.getAttribute('href') || '';
        if (href.charAt(0) === '#') {
          var target = document.querySelector(href);
          if (target) setTimeout(function () {
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
          }, 30);
        }
      });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1120) closeMenu(); });

    var style = document.createElement('style');
    style.textContent = [
      'html{scroll-behavior:smooth;scroll-padding-top:90px}',
      '.bb-menu-button,.bb-menu-backdrop{display:none}',
      'footer>div{justify-content:center!important;text-align:center!important}',
      'footer>div>*{text-align:center!important}',
      '@media(max-width:1120px){',
      '  .bb-nav-inner{height:72px!important;flex-wrap:nowrap!important;padding-top:0!important;padding-bottom:0!important}',
      '  .bb-nav-inner>a>span:last-child{max-width:220px}',
      '  .bb-menu-button{display:flex;margin-left:auto;width:46px;height:46px;border:1px solid rgba(196,161,94,.55);border-radius:2px;background:transparent;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer;z-index:132}',
      '  .bb-menu-button span{display:block;width:23px;height:2px;background:#DCC08C;transition:transform .25s,opacity .25s}',
      '  .bb-menu-open .bb-menu-button span:nth-child(1){transform:translateY(8px) rotate(45deg)}',
      '  .bb-menu-open .bb-menu-button span:nth-child(2){opacity:0}',
      '  .bb-menu-open .bb-menu-button span:nth-child(3){transform:translateY(-8px) rotate(-45deg)}',
      '  .bb-nav-links{position:fixed!important;top:0;right:0;width:min(86vw,390px);height:100dvh;margin:0!important;padding:94px 28px 34px!important;background:#0C1F16;box-shadow:-16px 0 50px rgba(0,0,0,.35);display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:6px!important;overflow-y:auto;transform:translateX(105%);transition:transform .28s ease;z-index:130}',
      '  .bb-nav-links>a{display:block!important;width:100%!important;padding:13px 8px!important;border:0!important;border-bottom:1px solid rgba(255,255,255,.1)!important;text-align:left!important}',
      '  .bb-nav-links>span{width:100%!important;margin-top:12px!important;padding:18px 8px 0!important;border-left:0!important;border-top:1px solid rgba(196,161,94,.3)!important}',
      '  .bb-menu-open .bb-nav-links{transform:translateX(0)}',
      '  .bb-menu-backdrop{position:fixed;inset:0;border:0;background:rgba(0,0,0,.5);z-index:110}',
      '  .bb-menu-open .bb-menu-backdrop{display:block}',
      '  .bb-menu-open{overflow:hidden}',
      '  #rail{display:none!important}',
      '}',
      '@media(max-width:720px){',
      '  .bb-nav-inner{height:68px!important;padding-left:16px!important;padding-right:16px!important}',
      '  .bb-nav-inner>a{gap:9px!important}',
      '  .bb-nav-inner>a>span:first-child{width:38px!important;height:38px!important}',
      '  .bb-nav-inner>a>span:last-child>span:first-child{font-size:.88rem!important}',
      '  .bb-nav-inner>a>span:last-child>span:last-child{font-size:.47rem!important;letter-spacing:.24em!important}',
      '  [id]{scroll-margin-top:78px}',
      '  #c-news{width:100%!important;min-width:0!important;flex:none!important}',
      '  #c-news+button{width:100%!important}',
      '  #c-news:where(input){display:block!important}',
      '  .bb-news-form{display:flex!important;flex-direction:column!important;align-items:stretch!important}',
      '  footer>div{flex-direction:column!important;align-items:center!important;gap:12px!important}',
      '}',
      '@media(max-width:420px){.bb-nav-inner>a>span:last-child{display:none!important}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ---------- estados de hover / foco em atributos data-* ---------- */
  function parse(css) {
    var out = [];
    (css || '').split(';').forEach(function (d) {
      var i = d.indexOf(':');
      if (i < 0) return;
      out.push([d.slice(0, i).trim(), d.slice(i + 1).trim()]);
    });
    return out;
  }
  function bindState(attr, onEvents, offEvents) {
    Array.prototype.forEach.call(document.querySelectorAll('[' + attr + ']'), function (el) {
      var decls = parse(el.getAttribute(attr)), prev = null;
      function on() {
        if (prev) return;
        prev = decls.map(function (d) { return [d[0], el.style.getPropertyValue(d[0])]; });
        decls.forEach(function (d) { el.style.setProperty(d[0], d[1]); });
      }
      function off() {
        if (!prev) return;
        prev.forEach(function (d) { d[1] ? el.style.setProperty(d[0], d[1]) : el.style.removeProperty(d[0]); });
        prev = null;
      }
      onEvents.forEach(function (e) { el.addEventListener(e, on); });
      offEvents.forEach(function (e) { el.addEventListener(e, off); });
    });
  }

  /* ---------- entrada suave dos blocos ---------- */
  function reveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;
    els.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .8s ease, transform .8s ease';
    });
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function hashScroll() {
    if (!location.hash) return;
    var t = location.hash;
    setTimeout(function () {
      var e = document.querySelector(t);
      if (e) window.scrollTo({ top: e.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    }, 450);
  }

  /* ---------- aviso de cookies (páginas com seção de contato) ---------- */
  function cookies() {
    if (!document.getElementById('contato')) return;
    try { if (localStorage.getItem('bb-cookies-ok')) return; } catch (err) { return; }
    var b = document.createElement('div');
    b.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:120;background:rgba(12,31,22,.97);border-top:1px solid rgba(196,161,94,.35);color:#C8D6CC;font-size:.84rem;font-weight:300;padding:16px 24px;display:flex;gap:20px;align-items:center;justify-content:center;flex-wrap:wrap';
    var s = document.createElement('span');
    s.style.maxWidth = '760px';
    s.textContent = STR.ck + ' ';
    var a = document.createElement('a');
    a.href = STR.ckHref; a.textContent = STR.ckLink;
    a.style.cssText = 'color:#DCC08C;text-decoration:underline';
    s.appendChild(a);
    var k = document.createElement('button');
    k.type = 'button'; k.textContent = STR.ckBtn;
    k.style.cssText = 'background:#C4A15E;color:#0C1F16;border:none;border-radius:2px;padding:10px 22px;font-family:inherit;font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:500;cursor:pointer';
    k.addEventListener('click', function () {
      try { localStorage.setItem('bb-cookies-ok', '1'); } catch (err) {}
      b.remove();
    });
    b.appendChild(s); b.appendChild(k);
    document.body.appendChild(b);
  }

  /* ---------- formulário de contato ---------- */
  function v(id) { var e = document.getElementById(id); return e ? String(e.value || '').trim() : ''; }
  function erro(m) {
    var b = document.getElementById('c-erro');
    if (b) {
      b.textContent = m || '';
      b.style.display = m ? 'block' : 'none';
      if (m) b.scrollIntoView ? null : null;
    }
    return null;
  }
  function dados() {
    var d = {
      nome: v('c-nome'), empresa: v('c-empresa'), email: v('c-email'), tel: v('c-tel'),
      setor: v('c-setor'), natureza: v('c-natureza'), desc: v('c-desc')
    };
    var ok = document.getElementById('c-lgpd');
    if (!d.nome) return erro(STR.eNome);
    if (!d.email && !d.tel) return erro(STR.eContato);
    if (d.email && !RE_MAIL.test(d.email)) return erro(STR.eEmail);
    if (d.desc.length < 20) return erro(STR.eDesc);
    if (ok && !ok.checked) return erro(STR.eLgpd);
    erro(null);
    return d;
  }
  function texto(d) {
    return [STR.tTitulo, '', STR.tNome + ': ' + d.nome, STR.tEmpresa + ': ' + (d.empresa || '—'),
      STR.tEmail + ': ' + (d.email || '—'), STR.tTel + ': ' + (d.tel || '—'),
      STR.tSetor + ': ' + d.setor, STR.tNatureza + ': ' + d.natureza, '', STR.tDesc + ':', d.desc].join('\n');
  }
  function enviarFormulario(assunto, campos) {
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/' + MAIL;
    form.style.display = 'none';
    var dadosForm = Object.assign({
      _subject: assunto,
      _template: 'table',
      _captcha: 'false',
      _next: location.href.split('#')[0] + '?enviado=1#contato'
    }, campos);
    Object.keys(dadosForm).forEach(function (nome) {
      var input = document.createElement('input');
      input.type = 'hidden'; input.name = nome; input.value = dadosForm[nome];
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
  }
  window.bb = {
    enviarEmail: function () {
      var d = dados(); if (!d) return;
      enviarFormulario(STR.subject + ' · ' + d.natureza + ' · ' + (d.empresa || d.nome), {
        Nome: d.nome, Empresa: d.empresa || '—', Email: d.email || '—', Telefone: d.tel || '—',
        Setor: d.setor, Materia: d.natureza, Descricao: d.desc
      });
    },
    enviarWhats: function () {
      var d = dados(); if (!d) return;
      window.open(WHATS + '?text=' + encodeURIComponent(texto(d)), '_blank', 'noopener');
    },
    assinarAlerta: function () {
      var e = v('c-news');
      if (!RE_MAIL.test(e)) { erro(STR.eNews); return; }
      erro(null);
      enviarFormulario(STR.newsSubject, { Mensagem: STR.newsBody, Email: e });
    }
  };

  /* ---------- currículos recolhíveis (página da equipe) ---------- */
  function curriculos() {
    var host = document.getElementById('socio-fundador');
    if (!host) return;
    var fa = host.querySelector('article');
    if (fa && !fa.id) fa.id = 'zilto';
    var reg = {};
    Array.prototype.forEach.call(document.querySelectorAll('button[data-cv]'), function (btn) {
      var id = btn.getAttribute('data-cv');
      var box = document.getElementById('cv-' + id);
      if (!box) return;
      var art = btn.closest ? btn.closest('article') : null;
      reg[id] = { box: box, btn: btn, art: art || document.getElementById(id) || host };
    });
    var ids = ['zilto', 'luciano', 'ulisses', 'carlos-eduardo', 'clarice'].filter(function (id) { return !reg[id]; });
    ids.forEach(function (id) {
      var art = document.getElementById(id); if (!art) return;
      var col = art.children[1]; if (!col) return;
      var kids = Array.prototype.slice.call(col.children);
      var i = -1;
      kids.forEach(function (el, n) { if (i < 0 && el.tagName !== 'P') i = n; });
      if (i < 0) return;
      var box = document.createElement('div');
      kids.slice(i).forEach(function (el) { box.appendChild(el); });
      box.style.display = 'none';
      var dark = (id === 'zilto');
      var btn = document.createElement('button');
      btn.type = 'button'; btn.textContent = STR.cvClosed;
      btn.style.cssText = 'background:none;border:none;border-bottom:1px solid ' + (dark ? 'rgba(196,161,94,.7)' : '#C4A15E') +
        ';color:' + (dark ? '#DCC08C' : '#1E4634') +
        ';font-family:inherit;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding:0 0 5px;margin-top:4px;cursor:pointer';
      col.appendChild(btn); col.appendChild(box);
      reg[id] = { box: box, btn: btn, art: art };
    });
    function only(id) {
      Object.keys(reg).forEach(function (k) {
        var r = reg[k], on = (k === id);
        r.box.style.display = on ? '' : 'none';
        r.btn.textContent = on ? STR.cvOpen : STR.cvClosed;
      });
    }
    function goTo(r) {
      window.scrollTo({ top: r.art.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    }
    Object.keys(reg).forEach(function (id) {
      var r = reg[id];
      r.btn.addEventListener('click', function () {
        var isOpen = r.box.style.display !== 'none';
        only(isOpen ? null : id);
        if (!isOpen) goTo(r);
      });
    });
    var raw = (location.hash || '').replace('#', '');
    var key = (raw === 'socio-fundador') ? 'zilto' : raw;
    if (reg[key]) setTimeout(function () { only(key); goTo(reg[key]); }, 350);
  }

  // ← Voltar: retorna ao ponto exato de partida quando a navegação veio do próprio site
  function voltar() {
    var links = Array.prototype.slice.call(document.querySelectorAll('a')).filter(function (a) {
      return a.textContent.indexOf('\u2190') >= 0 && a.getAttribute('href') && a.getAttribute('href').charAt(0) !== '#';
    });
    if (!links.length) return;
    var ref = document.referrer, sameSite = false, samePage = false;
    if (ref) {
      try {
        var u = new URL(ref, location.href);
        sameSite = (u.origin === location.origin);
        samePage = sameSite && (u.pathname === location.pathname);
      } catch (err) {}
    }
    var canBack = sameSite && !samePage && history.length > 1;
    links.forEach(function (a) {
      if (canBack) {
        var u2 = new URL(ref, location.href);
        var file = u2.pathname.split('/').pop();
        a.setAttribute('href', (file || './') + u2.search + u2.hash);
      }
      a.addEventListener('click', function (e) {
        if (!canBack) return;
        e.preventDefault();
        history.back();
      });
    });
  }

  function init() {
    installResponsiveUi();
    bindState('data-hover', ['mouseenter'], ['mouseleave']);
    bindState('data-focus', ['focus'], ['blur']);
    bindState('data-press', ['mousedown'], ['mouseup', 'mouseleave']);
    reveal();
    cookies();
    curriculos();
    hashScroll();
    voltar();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
