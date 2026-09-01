const dot = document.querySelector('.cursor-dot');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

if (dot) {
  window.addEventListener('pointermove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const items = document.querySelectorAll(
  '.about-grid,.service-grid article,.project,.project-list>div,.stack-grid,.time-row,.capability-card,.numbers div,.testimonial-grid blockquote,.contact-copy,.contact-list'
);
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    obs.unobserve(entry.target);
  });
}, { threshold: 0.1 });

items.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = `opacity .65s ease ${Math.min(i * .035, .35)}s, transform .65s ease ${Math.min(i * .035, .35)}s`;
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);


/* Fixed centered navigation: keep the active section visually indicated. */
(() => {
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const updateActiveNav = () => {
    const y = window.scrollY + Math.min(window.innerHeight * 0.28, 220);
    let current = sections[0];

    sections.forEach(section => {
      if (section.offsetTop <= y) current = section;
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'nav-active',
        link.getAttribute('href') === `#${current.id}`
      );
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav();
})();




/* Navbar overlap-safe scroll controller */
(() => {
  const header = document.querySelector('.topbar-refined');
  const links = [...document.querySelectorAll('.topbar-refined .nav a')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function syncNav() {
    if (header) header.classList.toggle('nav-scrolled', window.scrollY > 32);

    if (!sections.length) return;
    const probe = window.scrollY + Math.min(window.innerHeight * 0.30, 240);
    let current = sections[0];

    for (const section of sections) {
      if (section.offsetTop <= probe) current = section;
    }

    links.forEach(link => {
      link.classList.toggle(
        'nav-active',
        link.getAttribute('href') === `#${current.id}`
      );
    });
  }

  window.addEventListener('scroll', syncNav, {passive:true});
  window.addEventListener('resize', syncNav);
  syncNav();
})();


/* Keep only the custom red dot visible for pointer devices. */
(() => {
  const cursor = document.querySelector('.cursor-dot');
  if (!cursor || !window.matchMedia('(pointer:fine)').matches) return;

  cursor.style.display = 'block';

  window.addEventListener('pointerleave', () => {
    cursor.style.opacity = '0';
  });
  window.addEventListener('pointerenter', () => {
    cursor.style.opacity = '1';
  });
})();


/* Navigation follows the actual page order after the experience section moved. */
(() => {
  const nav = document.querySelector('.topbar-refined .nav');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a')];
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const update = () => {
    const probe = window.scrollY + Math.min(window.innerHeight * .33, 260);
    let active = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= probe) active = s;
    }
    links.forEach(a => a.classList.toggle(
      'nav-active',
      a.getAttribute('href') === `#${active.id}`
    ));
  };

  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update);
  update();
})();


/* =========================================================
   PORTFOLIO LOADER CONTROL
   ========================================================= */
(() => {
  const loader = document.getElementById('portfolioLoader');
  if (!loader) return;

  const finishLoader = () => {
    loader.classList.add('is-hidden');
    document.body.classList.remove('portfolio-loading');
    window.setTimeout(() => loader.remove(), 850);
  };

  // Let the visual animation breathe before revealing the portfolio.
  const minimumTime = 2400;
  const startTime = performance.now();

  const ready = () => {
    const elapsed = performance.now() - startTime;
    window.setTimeout(finishLoader, Math.max(0, minimumTime - elapsed));
  };

  if (document.readyState === 'complete') {
    ready();
  } else {
    window.addEventListener('load', ready, {once:true});
  }

  // Safety release in case a resource stalls.
  window.setTimeout(finishLoader, 5000);
})();


/* Universal interaction safeguards */
(() => {
  document.documentElement.classList.toggle(
    'touch-device',
    window.matchMedia('(pointer:coarse)').matches
  );

  window.addEventListener('orientationchange', () => {
    document.documentElement.classList.toggle(
      'touch-device',
      window.matchMedia('(pointer:coarse)').matches
    );
  }, {passive:true});
})();
