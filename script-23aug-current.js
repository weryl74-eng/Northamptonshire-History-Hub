// Current test script — 23 Aug 2026. No stylesheet injection.

// Keep the approved 22 August hero visible as a fallback.
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.setProperty('background-image', "url('assets/heritage-landscape.png')", 'important');
  hero.style.setProperty('background-position', 'center center', 'important');
  hero.style.setProperty('background-size', '100% 100%', 'important');
  hero.style.setProperty('background-repeat', 'no-repeat', 'important');
}

const searchButton = document.querySelector('.search-toggle');
searchButton?.addEventListener('click', () => {
  const query = window.prompt('Search the Northamptonshire History Gateway');
  if (!query) return;
  const text = query.trim().toLowerCase();
  const sections = [...document.querySelectorAll('main section, main aside')];
  const match = sections.find((section) => section.textContent.toLowerCase().includes(text));
  if (match) {
    match.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.alert('No matching section was found on this page yet.');
  }
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
