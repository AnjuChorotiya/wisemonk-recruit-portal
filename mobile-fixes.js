/* Wisemonk Recruit — mobile hamburger drawer toggle
   Loaded by every recruit-*.html alongside mobile-fixes.css.
   Only activates when the viewport is <= 880px wide. */
(function () {
  const MQ = window.matchMedia('(max-width: 880px)');
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Inject the hamburger button once
  let btn = document.getElementById('wmMobileMenu');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'wmMobileMenu';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Open navigation');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    document.body.appendChild(btn);
  }

  function setVisibility() {
    btn.style.display = MQ.matches ? 'flex' : 'none';
    if (!MQ.matches) document.body.classList.remove('sidebar-open');
  }
  setVisibility();
  MQ.addEventListener('change', setVisibility);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('sidebar-open');
  });

  // Close drawer when tapping outside the sidebar
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('sidebar-open')) return;
    if (sidebar.contains(e.target)) return;
    if (e.target === btn || btn.contains(e.target)) return;
    document.body.classList.remove('sidebar-open');
  });

  // Close on nav-item click (so links inside the sidebar actually navigate)
  sidebar.addEventListener('click', (e) => {
    const link = e.target.closest('a, .nav-item, button[onclick]');
    if (link && MQ.matches) {
      // tiny delay so the navigation isn't pre-empted by the close animation
      setTimeout(() => document.body.classList.remove('sidebar-open'), 80);
    }
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.body.classList.remove('sidebar-open');
  });
})();
