const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dialog = document.querySelector('.search-dialog');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});

navLinks.addEventListener('click', event => {
  if (event.target.matches('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('.search-toggle').addEventListener('click', () => {
  dialog.showModal();
  requestAnimationFrame(() => dialog.querySelector('input').focus());
});

dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
