// Current test script — no stylesheet injection.

// Keep the approved 22 August hero visible as a fallback.
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.setProperty('background-image', "url('assets/heritage-landscape.png')", 'important');
  hero.style.setProperty('background-position', 'center center', 'important');
  hero.style.setProperty('background-size', '100% 100%', 'important');
  hero.style.setProperty('background-repeat', 'no-repeat', 'important');
}

// Delicate hero controls: keep the current test artwork (including the cleaner Hazelrigg House),
// softly veil the baked-in button area, and show the real links as lightweight webpage controls.
if (hero) {
  const siteNav = hero.querySelector('.site-nav');
  const brand = hero.querySelector('.brand');
  const heroActions = hero.querySelector('.hero-actions');

  if (!hero.querySelector('.hero-control-veil')) {
    const veil = document.createElement('div');
    veil.className = 'hero-control-veil';
    veil.setAttribute('aria-hidden', 'true');
    veil.style.setProperty('position', 'absolute', 'important');
    veil.style.setProperty('z-index', '6', 'important');
    veil.style.setProperty('top', '3.8%', 'important');
    veil.style.setProperty('right', '0', 'important');
    veil.style.setProperty('width', '40%', 'important');
    veil.style.setProperty('height', '11.8%', 'important');
    veil.style.setProperty('pointer-events', 'none', 'important');
    veil.style.setProperty('background', 'linear-gradient(90deg, rgba(247,239,224,0) 0%, rgba(247,239,224,.98) 9%, #f7efe0 22%, #f7efe0 100%)', 'important');
    hero.appendChild(veil);
  }

  if (siteNav) {
    siteNav.style.setProperty('display', 'block', 'important');
    siteNav.style.setProperty('position', 'absolute', 'important');
    siteNav.style.setProperty('inset', '0', 'important');
    siteNav.style.setProperty('width', '100%', 'important');
    siteNav.style.setProperty('max-width', 'none', 'important');
    siteNav.style.setProperty('z-index', '7', 'important');
    siteNav.style.setProperty('pointer-events', 'none', 'important');
    siteNav.style.setProperty('padding', '0', 'important');
  }
  if (brand) brand.style.setProperty('display', 'none', 'important');

  if (heroActions) {
    heroActions.style.setProperty('display', 'flex', 'important');
    heroActions.style.setProperty('position', 'absolute', 'important');
    heroActions.style.setProperty('right', '4.1%', 'important');
    heroActions.style.setProperty('top', '5.5%', 'important');
    heroActions.style.setProperty('gap', '28px', 'important');
    heroActions.style.setProperty('align-items', 'center', 'important');
    heroActions.style.setProperty('padding', '0', 'important');
    heroActions.style.setProperty('z-index', '8', 'important');
    heroActions.style.setProperty('pointer-events', 'auto', 'important');

    [...heroActions.children].forEach((item) => {
      item.style.setProperty('border', '0', 'important');
      item.style.setProperty('border-radius', '0', 'important');
      item.style.setProperty('background', 'transparent', 'important');
      item.style.setProperty('box-shadow', 'none', 'important');
      item.style.setProperty('padding', '4px 0', 'important');
      item.style.setProperty('color', '#17392f', 'important');
      item.style.setProperty('font-family', '"Cormorant Garamond", Georgia, serif', 'important');
      item.style.setProperty('font-size', '15px', 'important');
      item.style.setProperty('font-weight', '600', 'important');
      item.style.setProperty('letter-spacing', '.02em', 'important');
      item.style.setProperty('text-transform', 'none', 'important');
      item.style.setProperty('text-decoration', 'none', 'important');
      item.style.setProperty('text-shadow', '0 1px 3px rgba(255,255,255,.9)', 'important');
    });
  }

  const applyHeroResponsiveControls = () => {
    if (!heroActions) return;
    if (window.innerWidth <= 700) {
      heroActions.style.setProperty('right', '2.2%', 'important');
      heroActions.style.setProperty('top', '5.0%', 'important');
      heroActions.style.setProperty('gap', window.innerWidth <= 480 ? '8px' : '14px', 'important');
      [...heroActions.children].forEach((item) => item.style.setProperty('font-size', window.innerWidth <= 480 ? '10px' : '12px', 'important'));
    } else {
      heroActions.style.setProperty('right', '4.1%', 'important');
      heroActions.style.setProperty('top', '5.5%', 'important');
      heroActions.style.setProperty('gap', '28px', 'important');
      [...heroActions.children].forEach((item) => item.style.setProperty('font-size', '15px', 'important'));
    }
  };
  applyHeroResponsiveControls();
  window.addEventListener('resize', applyHeroResponsiveControls);
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

// Facebook community test: three real current posts supplied by Cheryl.
const community = document.querySelector('.community-facebook-feature');
if (community) {
  const hiddenHeritageUrl = 'https://www.facebook.com/hiddenheritagegenealogy/posts/pfbid02X4GioPPi1LYxgZmoeeCTLjnBTtWKPp6xBgdsaPQVyDyQoBsSsbsSiJ3ZEag3VBFHl';
  const greatFireUrl = 'https://www.facebook.com/reel/1431671272352303';
  const delapreUrl = 'https://www.facebook.com/delapreabbey.org/posts/pfbid02sB5Aggypi96f8rwvNL73afoCWzX52uBGDLuH1B24SdJBPA854qRopT6fihBWmErXl';
  const plugin = url => `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`;
  const reelPlugin = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(greatFireUrl)}&show_text=true&width=500`;

  community.innerHTML = `
    <div class="ornate-flourish" aria-hidden="true">❦</div>
    <h2>Northamptonshire’s History Starts With You</h2>
    <div class="mini-flourish">— ✦ —</div>
    <p class="community-tagline">Discover what is happening around Northamptonshire.</p>
    <p class="community-copy"><em>Together we can celebrate, explore and preserve our county’s heritage.</em></p>
    <div class="mini-flourish">— ✦ —</div>
    <div class="facebook-glimpse facebook-real-posts">
      <h3>A Glimpse of Our Facebook Community Recent Posts</h3>
      <div class="mini-flourish">— ✦ —</div>
      <div class="facebook-embed-grid">
        <div class="facebook-embed-card"><iframe src="${plugin(hiddenHeritageUrl)}" title="Hidden Heritage Facebook post" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
        <div class="facebook-embed-card"><iframe src="${reelPlugin}" title="Great Fire of Northampton Facebook post" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
        <div class="facebook-embed-card"><iframe src="${plugin(delapreUrl)}" title="Delapré Abbey Facebook post" loading="lazy" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
      </div>
    </div>
    <a class="facebook-cta" href="https://www.facebook.com/groups/872721351232099/" target="_blank" rel="noopener noreferrer">Visit Our Facebook Community →</a>`;

  const facebookStyle = document.createElement('style');
  facebookStyle.textContent = `
    .community-facebook-feature{width:min(1180px,calc(100% - 40px))!important;margin:24px auto 22px!important;padding:16px 16px 20px!important;text-align:center!important}
    .community-facebook-feature .ornate-flourish{width:270px!important;height:34px!important;margin:0 auto 2px!important}
    .community-facebook-feature h2{font-size:clamp(28px,2.7vw,39px)!important;line-height:1.04!important;margin:0 auto 4px!important}
    .community-facebook-feature .community-tagline{font-size:18px!important;margin:6px auto 2px!important}
    .community-facebook-feature .community-copy{font-size:17px!important;margin:0 auto 8px!important}
    .facebook-real-posts{padding:10px 10px 12px!important;margin:10px auto 14px!important;overflow:hidden!important}
    .facebook-real-posts h3{font-size:21px!important;margin:0 0 2px!important;text-transform:uppercase!important}
    .facebook-embed-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;align-items:start!important;margin-top:7px!important}
    .facebook-embed-card{height:400px!important;overflow:hidden!important;border:1px solid #e4d6c1!important;border-radius:8px!important;background:#fff!important}
    .facebook-embed-card iframe{display:block!important;width:100%!important;height:500px!important;border:0!important;background:#fff!important;transform:scale(.80)!important;transform-origin:top left!important;width:125%!important}
    .community-facebook-feature .facebook-cta{margin-top:12px!important}
    @media(max-width:1000px){.facebook-embed-grid{grid-template-columns:1fr!important}.facebook-embed-card{width:min(440px,100%)!important;margin:0 auto!important;height:500px!important}.facebook-embed-card iframe{height:625px!important}}
    @media(max-width:600px){.community-facebook-feature{width:min(calc(100% - 20px),680px)!important;padding:14px 8px 18px!important}.facebook-real-posts{padding:8px 5px 10px!important}.facebook-real-posts h3{font-size:19px!important}.facebook-embed-card{height:470px!important}.facebook-embed-card iframe{height:588px!important}}
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