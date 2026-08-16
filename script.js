// Amalfi Hardware — shared site behavior
// Lucide icon render, mobile nav toggle, quiet scroll-reveal, filter chip state.

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  const chips = document.querySelectorAll('.chip[data-filter]');
  const tiles = document.querySelectorAll('[data-category]');
  if (chips.length && tiles.length) {
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
        chip.setAttribute('aria-pressed', 'true');
        const filter = chip.getAttribute('data-filter');
        tiles.forEach((tile) => {
          const match = filter === 'all' || tile.getAttribute('data-category') === filter;
          tile.style.display = match ? '' : 'none';
        });
      });
    });
  }

  const form = document.querySelector('.appointment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) note.textContent = 'Thank you — a member of our team will follow up to confirm your appointment.';
      form.reset();
    });
  }
});
