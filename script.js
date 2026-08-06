const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchButton = document.querySelector('.search-toggle');

menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

searchButton?.addEventListener('click', () => {
  document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' });
});
