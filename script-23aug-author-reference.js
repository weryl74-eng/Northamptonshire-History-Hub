// Current test script — reference author layout, uncached filename.

const hero = document.querySelector('.hero');
if (hero) {
  hero.style.setProperty('background-image', "url('assets/heritage-landscape.png')", 'important');
  hero.style.setProperty('background-position', 'center center', 'important');
  hero.style.setProperty('background-size', '100% 100%', 'important');
  hero.style.setProperty('background-repeat', 'no-repeat', 'important');
}

const authorCard = document.querySelector('.author-homepage-feature');
const authorPhoto = document.querySelector('.author-homepage-feature > img');
const authorCopy = document.querySelector('.author-homepage-feature .featured-copy');
const authorBody = document.querySelector('.author-homepage-feature .featured-copy > p:not(.eyebrow)');
const authorActions = document.querySelector('.author-homepage-feature .actions');
const authorButton = document.querySelector('.author-homepage-feature .button');

if (authorCard) {
  authorCard.style.setProperty('display', 'grid', 'important');
  authorCard.style.setProperty('grid-template-columns', '185px minmax(0, 1fr)', 'important');
  authorCard.style.setProperty('column-gap', '22px', 'important');
  authorCard.style.setProperty('align-items', 'center', 'important');
  authorCard.style.setProperty('padding', '18px 22px', 'important');
  authorCard.style.setProperty('overflow', 'hidden', 'important');
}

if (authorPhoto) {
  authorPhoto.style.setProperty('grid-column', '1', 'important');
  authorPhoto.style.setProperty('width', '170px', 'important');
  authorPhoto.style.setProperty('height', '170px', 'important');
  authorPhoto.style.setProperty('min-width', '170px', 'important');
  authorPhoto.style.setProperty('min-height', '170px', 'important');
  authorPhoto.style.setProperty('max-width', '170px', 'important');
  authorPhoto.style.setProperty('max-height', '170px', 'important');
  authorPhoto.style.setProperty('object-fit', 'cover', 'important');
  authorPhoto.style.setProperty('border-radius', '50%', 'important');
  authorPhoto.style.setProperty('justify-self', 'center', 'important');
  authorPhoto.style.setProperty('align-self', 'center', 'important');
  authorPhoto.style.setProperty('transform', 'none', 'important');
  authorPhoto.style.setProperty('margin', '0', 'important');
}

if (authorCopy) {
  authorCopy.style.setProperty('grid-column', '2', 'important');
  authorCopy.style.setProperty('min-width', '0', 'important');
  authorCopy.style.setProperty('width', '100%', 'important');
  authorCopy.style.setProperty('padding', '0', 'important');
}

if (authorBody) {
  authorBody.style.setProperty('max-width', 'none', 'important');
  authorBody.style.setProperty('line-height', '1.42', 'important');
  authorBody.style.setProperty('margin', '7px 0 0', 'important');
}

if (authorActions) authorActions.style.setProperty('margin-top', '14px', 'important');

if (authorButton) {
  authorButton.style.setProperty('width', 'auto', 'important');
  authorButton.style.setProperty('max-width', '100%', 'important');
  authorButton.style.setProperty('padding', '9px 14px', 'important');
  authorButton.style.setProperty('line-height', '1.2', 'important');
  authorButton.style.setProperty('white-space', 'normal', 'important');
}

if (authorCopy && !authorCopy.querySelector('.author-website-link')) {
  const websiteLink = document.createElement('a');
  websiteLink.className = 'author-website-link';
  websiteLink.href = 'https://jackpreston.co.uk/';
  websiteLink.target = '_blank';
  websiteLink.rel = 'noopener noreferrer';
  websiteLink.textContent = '◉  Visit Jack’s website jackpreston.co.uk →';
  websiteLink.style.setProperty('display', 'block', 'important');
  websiteLink.style.setProperty('margin-top', '9px', 'important');
  websiteLink.style.setProperty('color', 'var(--nhn-green)', 'important');
  websiteLink.style.setProperty('font-size', '14px', 'important');
  websiteLink.style.setProperty('text-decoration', 'none', 'important');
  authorCopy.appendChild(websiteLink);
}

const applyAuthorResponsiveLayout = () => {
  if (!authorCard || !authorPhoto || !authorCopy) return;
  if (window.innerWidth <= 800) {
    authorCard.style.setProperty('grid-template-columns', '1fr', 'important');
    authorCard.style.setProperty('row-gap', '14px', 'important');
    authorPhoto.style.setProperty('grid-column', '1', 'important');
    authorPhoto.style.setProperty('width', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorPhoto.style.setProperty('height', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorPhoto.style.setProperty('min-width', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorPhoto.style.setProperty('min-height', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorPhoto.style.setProperty('max-width', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorPhoto.style.setProperty('max-height', window.innerWidth <= 520 ? '150px' : '165px', 'important');
    authorCopy.style.setProperty('grid-column', '1', 'important');
  } else {
    authorCard.style.setProperty('grid-template-columns', '185px minmax(0, 1fr)', 'important');
    authorCard.style.removeProperty('row-gap');
    authorPhoto.style.setProperty('width', '170px', 'important');
    authorPhoto.style.setProperty('height', '170px', 'important');
    authorPhoto.style.setProperty('min-width', '170px', 'important');
    authorPhoto.style.setProperty('min-height', '170px', 'important');
    authorPhoto.style.setProperty('max-width', '170px', 'important');
    authorPhoto.style.setProperty('max-height', '170px', 'important');
    authorCopy.style.setProperty('grid-column', '2', 'important');
  }
};
applyAuthorResponsiveLayout();
window.addEventListener('resize', applyAuthorResponsiveLayout);

const searchButton = document.querySelector('.search-toggle');
searchButton?.addEventListener('click', () => {
  const query = window.prompt('Search the Northamptonshire History Gateway');
  if (!query) return;
  const text = query.trim().toLowerCase();
  const sections = [...document.querySelectorAll('main section, main aside')];
  const match = sections.find((section) => section.textContent.toLowerCase().includes(text));
  if (match) match.scrollIntoView({ behavior: 'smooth', block: 'start' });
  else window.alert('No matching section was found on this page yet.');
});

const eraSlider = document.querySelector('.era-slider');
const slideTimeline = (direction) => {
  if (!eraSlider) return;
  const card = eraSlider.querySelector('article');
  const distance = card ? card.getBoundingClientRect().width + 18 : 240;
  eraSlider.scrollBy({ left: distance * direction, behavior: 'smooth' });
};
document.querySelector('.timeline-prev')?.addEventListener('click', () => slideTimeline(-1));
document.querySelector('.timeline-next')?.addEventListener('click', () => slideTimeline(1));