/* ==========================================================================
   Team19 Media — Interaktionen
   Alles progressive enhancement: ohne JS bleibt die Seite voll nutzbar.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* --- Header: solide Fläche ab dem ersten Scroll --------------------- */
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle('is-solid', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --- Mobile-Drawer -------------------------------------------------- */
  function initDrawer() {
    var header = document.querySelector('.header');
    var toggle = document.querySelector('.header__toggle');
    var drawer = document.getElementById('drawer');
    if (!header || !toggle || !drawer) return;

    var close = function () {
      header.classList.remove('is-open');
      drawer.classList.remove('is-visible');
      document.body.classList.remove('is-locked');
      toggle.setAttribute('aria-expanded', 'false');
      window.setTimeout(function () {
        if (!header.classList.contains('is-open')) drawer.hidden = true;
      }, 300);
    };

    toggle.addEventListener('click', function () {
      var open = !header.classList.contains('is-open');
      if (open) {
        drawer.hidden = false;
        // Reflow erzwingen, damit die Transition greift
        void drawer.offsetHeight;
        header.classList.add('is-open');
        drawer.classList.add('is-visible');
        document.body.classList.add('is-locked');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        close();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        close();
        toggle.focus();
      }
    });

    // Untermenü im Drawer aufklappen
    drawer.querySelectorAll('.drawer__sub-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = document.getElementById(btn.getAttribute('aria-controls'));
        if (!sub) return;
        var open = sub.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* --- Hero-Wortrotator ---------------------------------------------- */
  function initRotator() {
    var rotator = document.querySelector('[data-rotator]');
    if (!rotator) return;

    var items = Array.prototype.slice.call(rotator.children);
    if (items.length < 2 || reduceMotion) return;

    var index = 0;
    window.setInterval(function () {
      var current = items[index];
      index = (index + 1) % items.length;
      var next = items[index];

      current.classList.remove('is-active');
      current.classList.add('is-leaving');
      next.classList.add('is-active');

      window.setTimeout(function () {
        // Ohne abgeschaltete Transition würde das Wort von oben wieder
        // durch den sichtbaren Bereich nach unten laufen.
        current.style.transition = 'none';
        current.classList.remove('is-leaving');
        void current.offsetHeight;
        current.style.transition = '';
      }, 660);
    }, 2600);
  }

  /* --- Scroll-Reveal -------------------------------------------------- */
  function initReveal() {
    var targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    targets.forEach(function (el, i) {
      // Gestaffelte Verzögerung innerhalb einer Gruppe
      var group = el.closest('[data-stagger]');
      if (group) {
        var siblings = Array.prototype.slice.call(group.querySelectorAll('.reveal'));
        el.style.setProperty('--reveal-delay', (siblings.indexOf(el) * 0.07) + 's');
      }
      io.observe(el);
    });
  }

  /* --- Endlos-Marquee: Inhalt duplizieren ---------------------------- */
  function initMarquee() {
    document.querySelectorAll('.marquee').forEach(function (marquee) {
      var track = marquee.querySelector('.marquee__track');
      if (!track || track.dataset.cloned === 'true') return;

      // Track so oft füllen, dass er mindestens die Viewport-Breite überdeckt
      var original = track.innerHTML;
      var guard = 0;
      while (track.scrollWidth < marquee.offsetWidth * 2 && guard < 6) {
        track.insertAdjacentHTML('beforeend', original);
        guard++;
      }

      var clone = track.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.dataset.cloned = 'true';
      marquee.appendChild(clone);
    });
  }

  /* --- Weicher Schimmer folgt der Maus (Hero) ------------------------ */
  function initGlow() {
    var hero = document.querySelector('[data-glow-host]');
    var glow = hero && hero.querySelector('.hero__glow');
    if (!hero || !glow || !finePointer || reduceMotion) return;

    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      glow.style.transform = 'translate(' + (x - rect.width / 2) * 0.35 + 'px, ' +
        (y * 0.35 - 40) + 'px) translate(-50%, -55%)';
    });
  }

  /* --- Spotlight im dunklen Band ------------------------------------- */
  function initSpotlight() {
    if (!finePointer || reduceMotion) return;

    document.querySelectorAll('[data-spotlight]').forEach(function (band) {
      var spot = band.querySelector('.band-dark__spot');
      if (!spot) return;

      band.addEventListener('pointermove', function (e) {
        var rect = band.getBoundingClientRect();
        spot.style.left = (e.clientX - rect.left) + 'px';
        spot.style.top = (e.clientY - rect.top) + 'px';
      });
    });
  }

  /* --- Dezentes 3D-Tilt auf Karten ---------------------------------- */
  function initTilt() {
    if (!finePointer || reduceMotion) return;

    document.querySelectorAll('.tilt').forEach(function (card) {
      var reset = function () { card.style.transform = ''; };

      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        // Maximal 4 Grad — soll auffallen, aber nicht albern wirken
        card.style.transform =
          'perspective(900px) rotateY(' + (px * 4).toFixed(2) + 'deg) rotateX(' +
          (-py * 4).toFixed(2) + 'deg) translateY(-4px)';
      });

      card.addEventListener('pointerleave', reset);
      card.addEventListener('blur', reset, true);
    });
  }

  /* --- Zahlen hochzählen -------------------------------------------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.dataset.countTo; });
      return;
    }

    var run = function (el) {
      var target = parseFloat(el.dataset.countTo);
      var prefix = el.dataset.countPrefix || '';
      var suffix = el.dataset.countSuffix || '';
      var duration = 1100;
      var start = performance.now();

      var tick = function (now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { io.observe(el); });
  }

  /* --- Fortschrittsbalken der Leistungs-Liste ----------------------- */
  function initServiceProgress() {
    var list = document.querySelector('[data-progress-source]');
    var bar = document.querySelector('[data-progress-bar]');
    if (!list || !bar) return;

    var update = function () {
      var rect = list.getBoundingClientRect();
      var vh = window.innerHeight;
      var total = rect.height - vh * 0.4;
      var scrolled = vh * 0.6 - rect.top;
      var pct = total > 0 ? Math.max(0, Math.min(1, scrolled / total)) : 0;
      bar.style.width = (pct * 100).toFixed(1) + '%';
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* --- Referenzen-Filter -------------------------------------------- */
  function initFilters() {
    var group = document.querySelector('[data-filters]');
    if (!group) return;

    var buttons = Array.prototype.slice.call(group.querySelectorAll('.filter'));
    var items = Array.prototype.slice.call(
      document.querySelectorAll('[data-work-grid] .work')
    );

    var apply = function (value) {
      items.forEach(function (item) {
        var match = value === 'alle' || item.dataset.category === value;
        item.hidden = !match;
        if (match && !reduceMotion) {
          // Einblend-Animation neu starten
          item.style.animation = 'none';
          void item.offsetHeight;
          item.style.animation = '';
        }
      });
    };

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
        btn.setAttribute('aria-selected', 'true');
        apply(btn.dataset.filter);
      });
    });
  }

  /* --- Formulare: Client-Validierung + Hinweis ----------------------- */
  function initForms() {
    document.querySelectorAll('form[data-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        if (!form.checkValidity()) return; // Browser zeigt seine Meldungen

        // Kein Endpoint konfiguriert -> Absenden abfangen und Hinweis zeigen.
        if (!form.getAttribute('action')) {
          e.preventDefault();
          var status = form.querySelector('.form__status');
          if (status) {
            status.hidden = false;
            status.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
          }
        }
      });
    });
  }

  /* --- Aktiven Menüpunkt markieren ---------------------------------- */
  function initCurrentNav() {
    var here = document.body.dataset.page;
    if (!here) return;

    document.querySelectorAll('[data-nav]').forEach(function (link) {
      if (link.dataset.nav === here) {
        link.setAttribute('aria-current', 'page');
        var item = link.closest('.nav__item');
        if (item) item.classList.add('nav__item--current');
      }
    });
  }

  /* --- Start --------------------------------------------------------- */
  function init() {
    initHeader();
    initDrawer();
    initCurrentNav();
    initRotator();
    initReveal();
    initMarquee();
    initGlow();
    initSpotlight();
    initTilt();
    initCounters();
    initServiceProgress();
    initFilters();
    initForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
