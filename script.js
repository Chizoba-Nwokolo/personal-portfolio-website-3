// =========================================================
// HAMBURGER MENU TOGGLE
// Opens/closes the mobile navigation and keeps aria-expanded in sync
// for screen reader / accessibility support.
// =========================================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');

function toggleNav() {
  const isOpen = mainNav.classList.toggle('is-open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

hamburgerBtn.addEventListener('click', toggleNav);

// Close the mobile nav automatically after a link is tapped,
// so users land on the section instead of staring at an open menu.
mainNav.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('is-open')) {
      mainNav.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
});

// =========================================================
// FOOTER YEAR
// Keeps the copyright year current without manual edits.
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();