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

const eraSlider = document.querySelector('.era-slider');
const slideTimeline = (direction) => {
  if (!eraSlider) return;
  const card = eraSlider.querySelector('article');
  const distance = card ? card.getBoundingClientRect().width + 14 : 240;
  eraSlider.scrollBy({ left: distance * direction, behavior: 'smooth' });
};
document.querySelector('.timeline-prev')?.addEventListener('click', () => slideTimeline(-1));
document.querySelector('.timeline-next')?.addEventListener('click', () => slideTimeline(1));

const authorFormDialog = document.querySelector('#author-form-dialog');
document.querySelector('[data-open-author-form]')?.addEventListener('click', () => {
  authorFormDialog?.showModal();
  document.body.classList.add('author-dialog-open');
});
document.querySelector('[data-close-author-form]')?.addEventListener('click', () => {
  authorFormDialog?.close();
});
authorFormDialog?.addEventListener('close', () => {
  document.body.classList.remove('author-dialog-open');
});
authorFormDialog?.addEventListener('click', (event) => {
  if (event.target === authorFormDialog) authorFormDialog.close();
});
