// Current test script — no stylesheet injection.

// Keep the approved 22 August hero visible as a fallback.
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.setProperty('background-image', "url('assets/heritage-landscape.png')", 'important');
  hero.style.setProperty('background-position', 'center center', 'important');
  hero.style.setProperty('background-size', '100% 100%', 'important');
  hero.style.setProperty('background-repeat', 'no-repeat', 'important');
}

// Match the approved Featured Author reference.
const authorCard = document.querySelector('.author-homepage-feature');
const authorPhoto = document.querySelector('.author-homepage-feature > img');
const authorCopy = document.querySelector('.author-homepage-feature .featured-copy');
const authorBody = document.querySelector('.author-homepage-feature .featured-copy > p:not(.eyebrow)');
const authorActions = document.querySelector('.author-homepage-feature .actions');
const authorButton = document.querySelector('.author-homepage-feature .button');

if (authorCard) {
  authorCard.style.setProperty('display', 'grid', 'important');
  authorCard.style.setProperty('grid-template-columns', '190px minmax(0, 1fr)', 'important');
  authorCard.style.setProperty('column-gap', '20px', 'important');
  authorCard.style.setProperty('align-items', 'center', 'important');
  authorCard.style.setProperty('padding', '18px 22px', 'important');
  authorCard.style.setProperty('overflow', 'hidden', 'important');
}
if (authorPhoto) {
  authorPhoto.style.setProperty('grid-column', '1', 'important');
  authorPhoto.style.setProperty('width', '176px', 'important');
  authorPhoto.style.setProperty('height', '176px', 'important');
  authorPhoto.style.setProperty('min-width', '176px', 'important');
  authorPhoto.style.setProperty('min-height', '176px', 'important');
  authorPhoto.style.setProperty('max-width', '176px', 'important');
  authorPhoto.style.setProperty('max-height', '176px', 'important');
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
  authorBody.style.setProperty('line-height', '1.45', 'important');
  authorBody.style.setProperty('margin', '8px 0 0', 'important');
}
if (authorActions) authorActions.style.setProperty('margin-top', '16px', 'important');
if (authorButton) {
  authorButton.style.setProperty('width', 'auto', 'important');
  authorButton.style.setProperty('max-width', '100%', 'important');
  authorButton.style.setProperty('padding', '9px 15px', 'important');
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
  websiteLink.style.setProperty('margin-top', '10px', 'important');
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
    const size = window.innerWidth <= 520 ? '160px' : '170px';
    authorPhoto.style.setProperty('grid-column', '1', 'important');
    ['width','height','min-width','min-height','max-width','max-height'].forEach(p => authorPhoto.style.setProperty(p, size, 'important'));
    authorCopy.style.setProperty('grid-column', '1', 'important');
  } else {
    authorCard.style.setProperty('grid-template-columns', '190px minmax(0, 1fr)', 'important');
    authorCard.style.removeProperty('row-gap');
    ['width','height','min-width','min-height','max-width','max-height'].forEach(p => authorPhoto.style.setProperty(p, '176px', 'important'));
    authorPhoto.style.setProperty('grid-column', '1', 'important');
    authorCopy.style.setProperty('grid-column', '2', 'important');
  }
};
applyAuthorResponsiveLayout();
window.addEventListener('resize', applyAuthorResponsiveLayout);

// Low-maintenance Facebook-community feature using the verified John Speed map asset.
const community = document.querySelector('.community-facebook-feature');
if (community) {
  community.innerHTML = `
    <div class="ornate-flourish" aria-hidden="true">❦</div>
    <h2>Northamptonshire’s History Starts With You</h2>
    <div class="mini-flourish">— ✦ —</div>
    <p class="community-tagline">Discover what is happening around Northamptonshire.</p>
    <p class="community-copy"><em>Together we can celebrate, explore and preserve our county’s heritage.</em></p>
    <div class="mini-flourish">— ✦ —</div>
    <div class="facebook-map-panel">
      <h3>Northants History Network on Facebook</h3>
      <div class="mini-flourish">— ✦ —</div>
      <a class="facebook-map-link" href="https://www.facebook.com/groups/northantshistorynetwork/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Northants History Network Facebook community">
        <img src="assets/John Speed Map 1610.jpg" alt="John Speed's 1610 map of Northampton">
      </a>
      <p>Join our Facebook community for local history conversations, events, discoveries and shared memories from across Northamptonshire.</p>
    </div>
    <a class="facebook-cta" href="https://www.facebook.com/groups/northantshistorynetwork/" target="_blank" rel="noopener noreferrer">Visit Our Facebook Community →</a>`;

  const facebookStyle = document.createElement('style');
  facebookStyle.textContent = `
    .community-facebook-feature{width:min(1080px,calc(100% - 48px))!important;margin:28px auto 24px!important;padding:18px 18px 14px!important;text-align:center!important}
    .community-facebook-feature .ornate-flourish{width:280px!important;height:34px!important;margin:0 auto 2px!important}
    .community-facebook-feature h2{font-size:clamp(30px,3vw,43px)!important;line-height:1.02!important;margin:0 auto 4px!important}
    .community-facebook-feature .mini-flourish{margin:4px auto!important}
    .community-facebook-feature .community-tagline{font-size:20px!important;margin:7px auto 2px!important}
    .community-facebook-feature .community-copy{font-size:18px!important;margin:0 auto 8px!important}
    .facebook-map-panel{margin:10px auto 12px!important;padding:14px 16px 16px!important;border:1px solid #e1c99f!important;border-radius:10px!important;background:rgba(255,255,255,.08)!important}
    .facebook-map-panel h3{font-size:24px!important;line-height:1.05!important;margin:0!important}
    .facebook-map-link{display:block!important;max-width:780px!important;margin:12px auto 10px!important;border-radius:10px!important;overflow:hidden!important;border:1px solid #d8c29b!important;background:#f7f0e3!important;text-decoration:none!important}
    .facebook-map-link img{display:block!important;width:100%!important;height:auto!important;max-height:430px!important;object-fit:contain!important;background:#f6f0e5!important}
    .facebook-map-panel p{max-width:820px!important;margin:10px auto 0!important;font-size:17px!important;line-height:1.45!important;color:#345349!important}
    .community-facebook-feature .facebook-cta{display:block!important;margin-top:12px!important;padding:16px 20px!important;font-size:24px!important;border-radius:10px!important}
    @media(max-width:800px){.community-facebook-feature{width:min(calc(100% - 28px),680px)!important}.facebook-map-link{max-width:100%!important}.facebook-map-panel h3{font-size:21px!important}.community-facebook-feature .facebook-cta{font-size:20px!important}}
  `;
  document.head.appendChild(facebookStyle);
}

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
