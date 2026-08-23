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

// Match the approved Facebook-community reference without fabricating posts.
const community = document.querySelector('.community-facebook-feature');
if (community) {
  community.innerHTML = `
    <div class="ornate-flourish" aria-hidden="true">❦</div>
    <h2>Northamptonshire’s History Starts With You</h2>
    <div class="mini-flourish">— ✦ —</div>
    <p class="community-tagline">Discover what is happening around Northamptonshire.</p>
    <p class="community-copy"><em>Together we can celebrate, explore and preserve our county’s heritage.</em></p>
    <div class="mini-flourish">— ✦ —</div>
    <div class="facebook-glimpse">
      <h3>A glimpse of our Facebook community recent posts</h3>
      <div class="mini-flourish">— ✦ —</div>
      <div class="facebook-reference-grid">
        <a href="https://www.facebook.com/groups/northantshistorynetwork/" target="_blank" rel="noopener noreferrer" class="facebook-reference-card"><span class="facebook-badge">f</span><strong>Northants History Network</strong><span>Local history discussions</span><small>Open the Facebook community →</small></a>
        <a href="https://www.facebook.com/groups/northantshistorynetwork/" target="_blank" rel="noopener noreferrer" class="facebook-reference-card"><span class="facebook-badge">f</span><strong>Northants History Network</strong><span>Events and heritage updates</span><small>Open the Facebook community →</small></a>
        <a href="https://www.facebook.com/groups/northantshistorynetwork/" target="_blank" rel="noopener noreferrer" class="facebook-reference-card"><span class="facebook-badge">f</span><strong>Northants History Network</strong><span>Community discoveries</span><small>Open the Facebook community →</small></a>
      </div>
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
    .community-facebook-feature .facebook-glimpse{margin:10px auto 12px!important;padding:12px 14px 14px!important;border:1px solid #e1c99f!important;border-radius:10px!important;background:rgba(255,255,255,.08)!important}
    .community-facebook-feature .facebook-glimpse h3{font-size:24px!important;line-height:1.05!important;margin:0!important}
    .facebook-reference-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;margin-top:10px!important}
    .facebook-reference-card{min-height:190px!important;padding:16px!important;border:1px solid #ddd3c3!important;border-radius:9px!important;background:#fff!important;color:#24463c!important;text-decoration:none!important;text-align:left!important;display:flex!important;flex-direction:column!important;box-shadow:0 2px 7px rgb(44 55 48/.06)!important}
    .facebook-reference-card .facebook-badge{align-self:flex-end!important;width:31px!important;height:31px!important;border-radius:50%!important;background:#1877f2!important;color:white!important;display:grid!important;place-items:center!important;font:700 24px Arial,sans-serif!important;margin-bottom:-24px!important}
    .facebook-reference-card strong{font-size:16px!important;margin:0 38px 18px 0!important}
    .facebook-reference-card>span:not(.facebook-badge){font-size:17px!important;line-height:1.35!important;flex:1!important}
    .facebook-reference-card small{font-size:13px!important;margin-top:18px!important;color:#49665d!important}
    .community-facebook-feature .facebook-cta{margin-top:12px!important;padding:16px 20px!important;font-size:24px!important;border-radius:10px!important}
    @media(max-width:800px){.facebook-reference-grid{grid-template-columns:1fr!important}.facebook-reference-card{min-height:120px!important}.community-facebook-feature{width:min(calc(100% - 28px),680px)!important}}
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
