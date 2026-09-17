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
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  const chips = document.querySelectorAll('.chip[data-filter]');
  const tiles = document.querySelectorAll('[data-category]');
  const searchInput = document.querySelector('#brand-search');
  if (tiles.length) {
    let activeFilter = 'all';
    let searchQuery = '';

    const applyFilters = () => {
      tiles.forEach((tile) => {
        const categoryMatch = activeFilter === 'all' || tile.getAttribute('data-category') === activeFilter;
        const nameEl = tile.querySelector('span');
        const name = nameEl ? nameEl.textContent.toLowerCase() : '';
        const searchMatch = !searchQuery || name.includes(searchQuery);
        tile.style.display = (categoryMatch && searchMatch) ? '' : 'none';
      });
    };

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
        chip.setAttribute('aria-pressed', 'true');
        activeFilter = chip.getAttribute('data-filter');
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }
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
