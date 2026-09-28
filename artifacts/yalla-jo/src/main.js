import './styles.css';

const destinations = [
  {
    slug: 'petra',
    name: 'Petra',
    region: 'Ma’an · Ancient wonder',
    category: 'History',
    rating: '4.9',
    stops: 8,
    points: 145,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Al_Khazneh_Petra_edit_2.jpg',
    tint: 'rose',
    icon: 'arch',
    tagline: 'A city carved into rose-coloured cliffs.',
    description: 'Walk through the Siq and let the Treasury appear slowly. Petra rewards the unhurried traveller with stories in every fold of stone.',
    why: 'You like layered history, long walks, and places that reveal themselves one quiet turn at a time.',
    time: '3.5 hours',
    distance: '235 km from Amman',
    route: ['Madaba · Mosaic Map', 'Mount Nebo · Moses’ Viewpoint', 'Wadi Mujib · Canyon Viewpoint', 'Little Petra · Hidden Siq']
  },
  {
    slug: 'wadi-rum',
    name: 'Wadi Rum',
    region: 'Aqaba · Desert adventure',
    category: 'Nature',
    rating: '4.8',
    stops: 6,
    points: 120,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Wadi_Rum%2C_Jordan.jpg',
    tint: 'sand',
    icon: 'sun',
    tagline: 'The quiet, copper-coloured edge of the world.',
    description: 'Follow old caravan paths between sandstone towers, then stay for the sky. The desert is not empty; it is full of small, patient details.',
    why: 'You are drawn to wide horizons, night skies, and the feeling of being properly away.',
    time: 'Full day',
    distance: '320 km from Amman',
    route: ['Aqaba · Red Sea Morning', 'Khazali Canyon · Ancient Inscriptions', 'Lawrence’s Spring · Desert Well', 'Um Frouth · Stone Arch']
  },
  {
    slug: 'jerash',
    name: 'Jerash',
    region: 'Jerash · Roman ruins',
    category: 'History',
    rating: '4.7',
    stops: 5,
    points: 98,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Jerash_oval.jpg',
    tint: 'stone',
    icon: 'columns',
    tagline: 'Where an ancient city still holds its rhythm.',
    description: 'Trace the colonnaded street, pause in the Oval Plaza, and imagine the sound of a city that has been welcoming visitors for two thousand years.',
    why: 'You notice architecture, echoes, and the human scale behind grand monuments.',
    time: 'Half day',
    distance: '50 km from Amman',
    route: ['Amman · Morning Coffee', 'Hadrian’s Arch · City Gate', 'Oval Plaza · A Gathering Place', 'Temple of Artemis · Hilltop Light']
  },
  {
    slug: 'dead-sea',
    name: 'Dead Sea',
    region: 'Balqa · Natural wonder',
    category: 'Nature',
    rating: '4.6',
    stops: 4,
    points: 76,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dead_Sea%2C_Jordan.jpg',
    tint: 'water',
    icon: 'wave',
    tagline: 'A horizon that makes time feel weightless.',
    description: 'Float at the lowest point on earth, then look west as the light turns the salt shore silver. Come for the water, stay for the pause.',
    why: 'You want a slower day, open horizons, and a little space between one thought and the next.',
    time: 'Half day',
    distance: '55 km from Amman',
    route: ['Wadi Mujib · Canyon Viewpoint', 'Sowayma · Salt Shore', 'Dead Sea Panorama · Horizon', 'Ma’in · Hot Springs']
  },
  {
    slug: 'madaba',
    name: 'Madaba',
    region: 'Madaba · Mosaic city',
    category: 'Culture',
    rating: '4.5',
    stops: 5,
    points: 84,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Madaba_map.jpg',
    tint: 'tile',
    icon: 'mosaic',
    tagline: 'Small streets, bright tiles, deep history.',
    description: 'Look down and find a map of the holy land beneath your feet. Madaba is made for wandering: workshops, courtyards, and generous cups of tea.',
    why: 'You collect details, enjoy local craft, and prefer a story told by people who live there.',
    time: 'Half day',
    distance: '35 km from Amman',
    route: ['St George’s Church · Mosaic Map', 'Madaba Market · Local Craft', 'Mount Nebo · Wide View', 'Haret Jdoudna · Courtyard Lunch']
  },
  {
    slug: 'ajloun',
    name: 'Ajloun',
    region: 'Ajloun · Forest country',
    category: 'Nature',
    rating: '4.6',
    stops: 4,
    points: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Ajloun_Castle_2009.jpg',
    tint: 'forest',
    icon: 'castle',
    tagline: 'Pine-scented hills and a castle with a view.',
    description: 'Head north for cooler air, olive groves, and the high windows of Ajloun Castle. This is Jordan in a greener key.',
    why: 'You like the road less travelled, forest walks, and views that stretch further than expected.',
    time: 'Full day',
    distance: '76 km from Amman',
    route: ['Ajloun Forest Reserve · Green Trails', 'Ajloun Castle · Hilltop History', 'Orjan · Olive Groves', 'Rasoun · Village Table']
  }
];

const icon = (name, size = 18) => {
  const paths = {
    search: `<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>`,
    arrow: `<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>`,
    back: `<path d="M20 12H5"/><path d="m11 18-6-6 6-6"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
    close: `<path d="m6 6 12 12M18 6 6 18"/>`,
    pin: `<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>`,
    arch: `<path d="M5 19V9l7-5 7 5v10M3 19h18M8 19v-5h8v5"/>`,
    columns: `<path d="M5 19V7h3v12M10.5 19V7h3v12M16 19V7h3v12M3 7h18M3 19h18"/>`,
    wave: `<path d="M3 14c3-5 5 5 8 0s5 5 10-2"/><path d="M3 9c3-5 5 5 8 0s5 5 10-2"/>`,
    mosaic: `<path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"/>`,
    castle: `<path d="M4 20V9h4V6h3v3h2V6h3v3h4v11M2 20h20M8 20v-5h8v5"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
    compass: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>`
  };
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.compass}</svg>`;
};

function nav(active = '') {
  return `<header class="site-header">
    <a class="brand" href="#/" aria-label="Yalla Jo home"><span class="brand-mark">${icon('pin', 16)}</span><span>YALLA JO</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a class="${active === 'discover' ? 'active' : ''}" href="#/discover">Discover</a>
      <a href="#/discover">My journey</a>
      <a href="#/discover">Passport</a>
    </nav>
    <div class="header-actions"><span class="language">عربي <span class="language-dot"></span></span><a class="button button-plum button-small" href="#/discover">Start journey ${icon('arrow', 14)}</a></div>
    <button class="menu-button" type="button" aria-label="Open navigation" data-menu>${icon('menu', 21)}</button>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><span>YALLA JO</span><span>Made for the curious traveller · Jordan</span><span>© 2024</span></footer>`;
}

function landing() {
  return `<div class="page page-home">${nav()}
    <main>
      <section class="hero shell">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span class="eyebrow-line"></span> A different way to see Jordan</div>
          <h1>The road is part<br>of the <em>journey.</em></h1>
          <p class="hero-lede">We do not change where you go — we change what you notice on the way. Uncover Jordan’s hidden stories, one meaningful stop at a time.</p>
          <div class="hero-actions"><a class="button button-plum" href="#/discover">Start exploring ${icon('arrow', 16)}</a><a class="text-link" href="#/discover">See how it works <span>↗</span></a></div>
          <div class="hero-stats"><div><strong>47<span>+</span></strong><small>hidden stops</small></div><div><strong>12</strong><small>Jordanian cities</small></div><div><strong>2.4k</strong><small>curious explorers</small></div></div>
        </div>
        <div class="hero-art reveal reveal-delay">
          <div class="hero-art-top"><span class="mini-label">${icon('pin', 13)} Jordan, slowly</span><span class="journey-pill">01 / 03 · Welcome</span></div>
          <div class="landscape" role="img" aria-label="An illustrated Jordanian desert road">
            <div class="moon"></div><div class="mountain mountain-back"></div><div class="mountain mountain-mid"></div><div class="mountain mountain-front"></div>
            <div class="road"></div><div class="road-line"></div><div class="waypoint waypoint-one"></div><div class="waypoint waypoint-two"></div><div class="waypoint waypoint-three"></div><div class="landmark"><div class="landmark-roof"></div><div class="landmark-body"></div></div>
          </div>
          <div class="next-stop"><span class="stop-icon">${icon('arch', 16)}</span><span><small>Next stop</small><strong>Petra Treasury</strong></span><b>+20 pts</b></div>
        </div>
      </section>
      <section class="intro-strip shell"><span class="section-kicker">Start with a feeling</span><p>Not a list of places.<br><strong>A collection of moments.</strong></p><a href="#/discover" class="round-arrow" aria-label="Discover places">${icon('arrow', 18)}</a></section>
      <section class="featured shell">
        <div class="section-heading"><div><span class="section-kicker">A little further</span><h2>Places worth taking<br>the long way to.</h2></div><a class="text-link" href="#/discover">View all destinations ${icon('arrow', 14)}</a></div>
        <div class="feature-grid">${destinations.slice(0, 3).map((d, i) => destinationCard(d, i === 0 ? 'large' : '')).join('')}</div>
      </section>
      <section class="quote-section"><div class="quote-inner"><span class="quote-mark">“</span><blockquote>Jordan is not a place you tick off.<br>It is a place that stays with you.</blockquote><div class="quote-rule"></div><span class="quote-credit">A note from the road · YALLA JO</span></div></section>
    </main>${footer()}</div>`;
}

function destinationCard(d, size = '') {
  return `<a class="destination-card ${size}" href="#/destination/${d.slug}" data-destination="${d.slug}">
    <div class="card-image tint-${d.tint}" style="--image: url('${d.image}')"><span class="card-rating">${d.rating}</span><span class="card-icon">${icon(d.icon, 15)}</span></div>
    <div class="card-body"><div class="card-kicker">${d.category} <span>·</span> ${d.region.split(' · ')[0]}</div><h3>${d.name}</h3><p>${d.tagline}</p><div class="card-meta"><span>${icon('pin', 13)} ${d.stops} stops along the way</span><span>${d.points} pts</span></div></div>
  </a>`;
}

function discover() {
  return `<div class="page page-discover">${nav('discover')}<main class="discover-main shell">
    <div class="page-heading reveal"><a class="back-link" href="#/">${icon('back', 15)} Back home</a><span class="journey-pill">02 / 03 · Destinations</span><h1>Search destinations</h1><p>Find the places that make you curious — then see what is waiting along the way.</p></div>
    <div class="search-wrap reveal reveal-delay">${icon('search', 19)}<input id="destination-search" type="search" placeholder="Search Jordan’s wonders..." autocomplete="off"><span class="search-count" id="search-count">6 places</span></div>
    <div class="filters reveal reveal-delay-2" role="group" aria-label="Filter destinations"><span class="filter-label">Browse by</span><button class="filter-chip active" data-filter="All">All places</button><button class="filter-chip" data-filter="History">${icon('arch', 14)} History</button><button class="filter-chip" data-filter="Nature">${icon('wave', 14)} Nature</button><button class="filter-chip" data-filter="Culture">${icon('mosaic', 14)} Culture</button><button class="filter-chip" data-filter="Adventure">${icon('sun', 14)} Adventure</button></div>
    <div class="destination-grid" id="destination-grid">${destinations.map(d => destinationCard(d)).join('')}</div><div class="empty-state" id="empty-state" hidden><span class="empty-icon">${icon('compass', 24)}</span><h2>No hidden stop found</h2><p>Try a different word or browse all of Jordan.</p><button class="button button-outline" data-reset>Show all places</button></div>
    </main>${footer()}</div>`;
}

function overview(slug) {
  const d = destinations.find(item => item.slug === slug) || destinations[0];
  return `<div class="page page-overview">${nav()}<main class="overview-main shell">
    <a class="back-link" href="#/discover">${icon('back', 15)} Back to destinations</a>
    <section class="overview-hero tint-${d.tint}" style="--image: url('${d.image}')"><div class="overview-hero-content"><span class="journey-pill">${d.category} · Jordan</span><h1>${d.name}</h1><p>${d.tagline}</p><div class="overview-rating">${icon(d.icon, 15)} <strong>${d.rating}</strong><span>One of Jordan’s essential stops</span></div></div></section>
    <section class="overview-content">
      <div class="overview-story"><span class="section-kicker">A little context</span><h2>${d.description}</h2><p class="story-why">${icon('compass', 17)} <strong>Why it suits you</strong></p><div class="why-tags"><span>${d.category}</span><span>Slow travel</span><span>Local stories</span></div><p class="why-copy">${d.why}</p>
        <div class="route-heading"><span class="section-kicker">Stops along the way</span><span>${d.stops} places to notice</span></div><div class="route-list">${d.route.map((stop, i) => `<div class="route-stop"><span class="route-dot ${i === 0 ? 'filled' : ''}">${i + 1}</span><span><strong>${stop.split(' · ')[0]}</strong><small>${stop.split(' · ')[1]}</small></span><b>+${15 + i * 5} pts</b></div>`).join('')}</div>
      </div>
      <aside class="journey-card"><div class="journey-card-top"><span class="card-icon">${icon(d.icon, 18)}</span><span class="journey-pill">Your next chapter</span></div><h3>Ready to discover ${d.name}?</h3><p>${d.stops} small surprises are waiting along your route.</p><div class="points-row"><span>Potential points</span><strong>+${d.points} pts</strong></div><div class="progress"><span style="width: 72%"></span></div><a class="button button-plum" href="#/discover">Choose this route ${icon('arrow', 15)}</a><a class="change-link" href="#/discover">Choose a different destination</a></aside>
    </section>
    </main>${footer()}</div>`;
}

function route() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  if (hash.startsWith('/destination/')) return overview(hash.split('/')[2]);
  if (hash === '/discover') return discover();
  return landing();
}

function render() {
  document.querySelector('#app').innerHTML = route();
  window.scrollTo({ top: 0, behavior: 'instant' });
  bindInteractions();
}

function bindInteractions() {
  const search = document.querySelector('#destination-search');
  const grid = document.querySelector('#destination-grid');
  const count = document.querySelector('#search-count');
  const empty = document.querySelector('#empty-state');
  let filter = 'All';
  const update = () => {
    if (!grid) return;
    const term = (search?.value || '').toLowerCase().trim();
    const cards = [...grid.querySelectorAll('[data-destination]')];
    let visible = 0;
    cards.forEach(card => {
      const d = destinations.find(item => item.slug === card.dataset.destination);
      const matches = (!term || `${d.name} ${d.region} ${d.category} ${d.tagline}`.toLowerCase().includes(term)) && (filter === 'All' || d.category === filter || (filter === 'Adventure' && ['Petra', 'Wadi Rum'].includes(d.name)));
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'place' : 'places'}`;
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener('input', update);
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active'); filter = button.dataset.filter; update();
  }));
  document.querySelector('[data-reset]')?.addEventListener('click', () => { if (search) search.value = ''; filter = 'All'; document.querySelector('[data-filter="All"]')?.click(); update(); });
  const menuButton = document.querySelector('[data-menu]');
  menuButton?.addEventListener('click', () => document.querySelector('.main-nav')?.classList.toggle('open'));
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);