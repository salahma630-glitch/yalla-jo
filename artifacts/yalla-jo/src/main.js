import './styles.css';

const destinations = [
  {
    slug: 'petra',
    name: 'Petra',
    region: 'Ma’an · Ancient wonder',
    category: 'History',
    rating: '4.9',
    stops: 8,
    image: '/images/destinations/petra.jpg',
    imageAlt: 'The Treasury carved into Petra’s rose-coloured cliffs',
    tint: 'rose',
    icon: 'arch',
    tagline: 'A city carved into rose-coloured cliffs.',
    description: 'Walk through the Siq and let the Treasury appear slowly. Petra rewards the unhurried traveller with stories in every fold of stone.',
    why: 'You like layered history, long walks, and places that reveal themselves one quiet turn at a time.',
    time: '3.5 hours',
    distance: '235 km from Amman',
    bestTime: 'October — April',
    arrival: 'Start at the Petra Visitor Centre before the afternoon light reaches the Treasury.',
    bring: 'Water, sun cover, shoes with grip, and enough room in your day to slow down.',
    route: ['Madaba · Mosaic Map', 'Mount Nebo · Moses’ Viewpoint', 'Wadi Mujib · Canyon Viewpoint', 'Little Petra · Hidden Siq']
  },
  {
    slug: 'wadi-rum',
    name: 'Wadi Rum',
    region: 'Aqaba · Desert adventure',
    category: 'Nature',
    rating: '4.8',
    stops: 6,
    image: '/images/destinations/wadi-rum.jpg',
    imageAlt: 'Sandstone formations in Wadi Rum',
    tint: 'sand',
    icon: 'sun',
    tagline: 'The quiet, copper-coloured edge of the world.',
    description: 'Follow old caravan paths between sandstone towers, then stay for the sky. The desert is not empty; it is full of small, patient details.',
    why: 'You are drawn to wide horizons, night skies, and the feeling of being properly away.',
    time: 'Full day',
    distance: '320 km from Amman',
    bestTime: 'March — May · September — November',
    arrival: 'Meet your local guide at Wadi Rum Village and let the landscape set the pace.',
    bring: 'A warm layer for after sunset, water, closed shoes, and a little patience for the horizon.',
    route: ['Aqaba · Red Sea Morning', 'Khazali Canyon · Ancient Inscriptions', 'Lawrence’s Spring · Desert Well', 'Um Frouth · Stone Arch']
  },
  {
    slug: 'jerash',
    name: 'Jerash',
    region: 'Jerash · Roman ruins',
    category: 'History',
    rating: '4.7',
    image: '/images/destinations/jerash.jpg',
    imageAlt: 'The Arch of Hadrian in Jerash',
    tint: 'stone',
    icon: 'columns',
    tagline: 'Where an ancient city still holds its rhythm.',
    description: 'Trace the colonnaded street, pause in the Oval Plaza, and imagine the sound of a city that has been welcoming visitors for two thousand years.',
    why: 'You notice architecture, echoes, and the human scale behind grand monuments.',
    time: 'Half day',
    distance: '50 km from Amman',
    bestTime: 'March — May · September — November',
    arrival: 'Reach the south gate early, before the stone begins to hold the midday sun.',
    bring: 'A hat, water, and time to look up at the details between the grand columns.',
    route: ['Amman · Morning Coffee', 'Hadrian’s Arch · City Gate', 'Oval Plaza · A Gathering Place', 'Temple of Artemis · Hilltop Light']
  },
  {
    slug: 'dead-sea',
    name: 'Dead Sea',
    region: 'Balqa · Natural wonder',
    category: 'Nature',
    rating: '4.6',
    image: '/images/destinations/dead-sea.jpg',
    imageAlt: 'The Dead Sea shoreline in Jordan',
    tint: 'water',
    icon: 'wave',
    tagline: 'A horizon that makes time feel weightless.',
    description: 'Float at the lowest point on earth, then look west as the light turns the salt shore silver. Come for the water, stay for the pause.',
    why: 'You want a slower day, open horizons, and a little space between one thought and the next.',
    time: 'Half day',
    distance: '55 km from Amman',
    bestTime: 'October — May',
    arrival: 'Take the Jordan Valley road and leave a little time for the view from above.',
    bring: 'Swimwear, sandals, fresh water for rinsing, and no hurry at all.',
    route: ['Wadi Mujib · Canyon Viewpoint', 'Sowayma · Salt Shore', 'Dead Sea Panorama · Horizon', 'Ma’in · Hot Springs']
  },
  {
    slug: 'madaba',
    name: 'Madaba',
    region: 'Madaba · Mosaic city',
    category: 'Culture',
    rating: '4.5',
    image: '/images/destinations/madaba.jpg',
    imageAlt: 'A mosaic detail in Madaba',
    tint: 'tile',
    icon: 'mosaic',
    tagline: 'Small streets, bright tiles, deep history.',
    description: 'Look down and find a map of the holy land beneath your feet. Madaba is made for wandering: workshops, courtyards, and generous cups of tea.',
    why: 'You collect details, enjoy local craft, and prefer a story told by people who live there.',
    time: 'Half day',
    distance: '35 km from Amman',
    bestTime: 'All year · especially spring',
    arrival: 'Park near the old town and let the first small street decide where you begin.',
    bring: 'Curiosity, a little cash for craft, and space for a long conversation over tea.',
    route: ['St George’s Church · Mosaic Map', 'Madaba Market · Local Craft', 'Mount Nebo · Wide View', 'Haret Jdoudna · Courtyard Lunch']
  },
  {
    slug: 'ajloun',
    name: 'Ajloun',
    region: 'Ajloun · Forest country',
    category: 'Nature',
    rating: '4.6',
    image: '/images/destinations/ajloun.jpg',
    imageAlt: 'Ajloun Castle in the hills of northern Jordan',
    tint: 'forest',
    icon: 'castle',
    tagline: 'Pine-scented hills and a castle with a view.',
    description: 'Head north for cooler air, olive groves, and the high windows of Ajloun Castle. This is Jordan in a greener key.',
    why: 'You like the road less travelled, forest walks, and views that stretch further than expected.',
    time: 'Full day',
    distance: '76 km from Amman',
    bestTime: 'March — May · October — November',
    arrival: 'Take the northern road slowly; the green begins before the castle appears.',
    bring: 'Layers, walking shoes, and an appetite for a village table after the hills.',
    route: ['Ajloun Forest Reserve · Green Trails', 'Ajloun Castle · Hilltop History', 'Orjan · Olive Groves', 'Rasoun · Village Table']
  }
];

const icon = (name, size = 18) => {
  const paths = {
    search: `<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>`,
    arrow: `<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>`,
    back: `<path d="M20 12H5"/><path d="m11 18-6-6 6-6"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
    pin: `<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>`,
    arch: `<path d="M5 19V9l7-5 7 5v10M3 19h18M8 19v-5h8v5"/>`,
    columns: `<path d="M5 19V7h3v12M10.5 19V7h3v12M16 19V7h3v12M3 7h18M3 19h18"/>`,
    wave: `<path d="M3 14c3-5 5 5 8 0s5 5 10-2"/><path d="M3 9c3-5 5 5 8 0s5 5 10-2"/>`,
    mosaic: `<path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"/>`,
    castle: `<path d="M4 20V9h4V6h3v3h2V6h3v3h4v11M2 20h20M8 20v-5h8v5"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
    compass: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>`,
    check: `<path d="m5 12 4 4L19 6"/>`,
    clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
    book: `<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5zM4 5.5v16"/>`,
    people: `<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 4 5"/>`
  };
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.compass}</svg>`;
};

const preferenceKey = 'yalla-jo-preferences';
const preferenceGroups = [
  {
    key: 'feeling',
    label: 'What are you drawn to?',
    options: [
      ['history', 'Old stones & stories', 'History, archaeology, and places that remember.', 'columns'],
      ['nature', 'Open horizons', 'Quiet landscapes, fresh air, and room to wander.', 'wave'],
      ['culture', 'Local rhythm', 'Craft, food, conversation, and everyday life.', 'mosaic']
    ]
  },
  {
    key: 'pace',
    label: 'How do you like to travel?',
    options: [
      ['slow', 'Take it slowly', 'One meaningful stop is plenty for a day.', 'clock'],
      ['curious', 'Follow the feeling', 'Leave space for the unexpected turn.', 'compass'],
      ['adventurous', 'Go a little further', 'You are happy to trade certainty for a story.', 'sun']
    ]
  },
  {
    key: 'with',
    label: 'Who are you travelling with?',
    options: [
      ['solo', 'Just me', 'A route with room for your own thoughts.', 'pin'],
      ['together', 'Someone special', 'Shared details make the best memories.', 'people'],
      ['family', 'My people', 'A day with something for every curious age.', 'people']
    ]
  }
];

function readPreferences() {
  try {
    return JSON.parse(window.localStorage.getItem(preferenceKey) || '{}');
  } catch {
    return {};
  }
}

function savePreferences(next) {
  try {
    window.localStorage.setItem(preferenceKey, JSON.stringify(next));
  } catch {
    // The flow still works if storage is unavailable.
  }
}

function preferencesComplete(preferences = readPreferences()) {
  return preferenceGroups.every((group) => preferences[group.key]);
}

function nav(active = '') {
  return `<header class="site-header">
    <a class="brand" href="#/" aria-label="Yalla Jo home"><span class="brand-mark">${icon('pin', 16)}</span><span>YALLA JO</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a class="${active === 'discover' ? 'active' : ''}" href="#/discover">Discover</a>
      <a href="#/discover" aria-label="My journey, coming soon">My journey</a>
      <a href="#/discover" aria-label="Passport, coming soon">Passport</a>
    </nav>
    <div class="header-actions"><span class="language">عربي <span class="language-dot"></span></span><a class="button button-plum button-small" href="#/personalize">Start journey ${icon('arrow', 14)}</a></div>
    <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" data-menu>${icon('menu', 21)}</button>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><span>YALLA JO</span><span>Made for the curious traveller · Jordan</span><span>© 2024</span></footer>`;
}

function destinationCard(d, size = '') {
  return `<a class="destination-card ${size}" href="#/destination/${d.slug}" data-destination="${d.slug}">
    <div class="card-image tint-${d.tint}"><img class="destination-photo" src="${d.image}" alt="${d.imageAlt}" loading="lazy"><span class="image-placeholder" aria-hidden="true">Jordan destination image</span><span class="card-rating">${d.rating}</span><span class="card-icon">${icon(d.icon, 15)}</span></div>
    <div class="card-body"><div class="card-kicker">${d.category} <span>·</span> ${d.region.split(' · ')[0]}</div><h3>${d.name}</h3><p>${d.tagline}</p><div class="card-meta"><span>${icon('pin', 13)} ${d.stops} stops along the way</span><span>${d.time}</span></div></div>
  </a>`;
}

function landing() {
  return `<div class="page page-home">${nav()}
    <main>
      <section class="hero shell">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span class="eyebrow-line"></span> A different way to see Jordan</div>
          <h1>The road is part<br>of the <em>journey.</em></h1>
          <p class="hero-lede">We do not change where you go — we change what you notice on the way. Uncover Jordan’s hidden stories, one meaningful stop at a time.</p>
          <div class="hero-actions"><a class="button button-plum" href="#/personalize">Start exploring ${icon('arrow', 16)}</a><a class="text-link" href="#/path">See how it works <span>↗</span></a></div>
          <div class="hero-stats"><div><strong>47<span>+</span></strong><small>hidden stops</small></div><div><strong>12</strong><small>Jordanian cities</small></div><div><strong>2.4k</strong><small>curious explorers</small></div></div>
        </div>
        <div class="hero-art reveal reveal-delay">
          <div class="hero-art-top"><span class="mini-label">${icon('pin', 13)} Jordan, slowly</span><span class="journey-pill">01 / 03 · Welcome</span></div>
          <div class="landscape" role="img" aria-label="An illustrated Jordanian desert road">
            <div class="moon"></div><div class="mountain mountain-back"></div><div class="mountain mountain-mid"></div><div class="mountain mountain-front"></div>
            <div class="road"></div><div class="road-line"></div><div class="waypoint waypoint-one"></div><div class="waypoint waypoint-two"></div><div class="waypoint waypoint-three"></div><div class="landmark"><div class="landmark-roof"></div><div class="landmark-body"></div></div>
          </div>
          <div class="next-stop"><span class="stop-icon">${icon('arch', 16)}</span><span><small>Next stop</small><strong>Petra Treasury</strong></span><b>Take your time</b></div>
        </div>
      </section>
      <section class="intro-strip shell"><span class="section-kicker">Start with a feeling</span><p>Not a list of places.<br><strong>A collection of moments.</strong></p><a href="#/personalize" class="round-arrow" aria-label="Begin personalizing your journey">${icon('arrow', 18)}</a></section>
      <section class="featured shell">
        <div class="section-heading"><div><span class="section-kicker">A little further</span><h2>Places worth taking<br>the long way to.</h2></div><a class="text-link" href="#/discover">View all destinations ${icon('arrow', 14)}</a></div>
        <div class="feature-grid">${destinations.slice(0, 3).map((d, i) => destinationCard(d, i === 0 ? 'large' : '')).join('')}</div>
      </section>
      <section class="quote-section"><div class="quote-inner"><span class="quote-mark">“</span><blockquote>Jordan is not a place you tick off.<br>It is a place that stays with you.</blockquote><div class="quote-rule"></div><span class="quote-credit">A note from the road · YALLA JO</span></div></section>
    </main>${footer()}</div>`;
}

function progressHeader(step, title, copy, back = '#/') {
  return `<div class="flow-heading reveal"><a class="back-link" href="${back}">${icon('back', 15)} ${back === '#/' ? 'Back home' : 'Back'}</a><span class="journey-pill">${step} / 03 · Journey</span><h1>${title}</h1><p>${copy}</p></div>`;
}

function personalization() {
  const preferences = readPreferences();
  const complete = preferencesComplete(preferences);
  return `<div class="page page-flow">${nav()}<main class="flow-main shell">
    ${progressHeader('01', 'Make it yours', 'A few small choices help us show you the Jordan that feels like yours.')}
    <div class="personalization-grid">
      <section class="preference-panel">
        ${preferenceGroups.map((group) => `<fieldset class="choice-group" data-choice-group="${group.key}"><legend>${group.label}</legend><div class="choice-grid">${group.options.map(([value, label, copy, choiceIcon]) => `<button class="choice-card ${preferences[group.key] === value ? 'selected' : ''}" type="button" data-choice-group="${group.key}" data-choice="${value}" aria-pressed="${preferences[group.key] === value}"><span class="choice-icon">${icon(choiceIcon, 17)}</span><span><strong>${label}</strong><small>${copy}</small></span><span class="choice-check">${icon('check', 13)}</span></button>`).join('')}</div></fieldset>`).join('')}
        <div class="flow-actions"><a class="button button-plum ${complete ? '' : 'is-disabled'}" href="${complete ? '#/path' : '#/personalize'}" data-personalize-continue>Continue to your path ${icon('arrow', 15)}</a><a class="text-link" href="#/path" data-skip-personalize>Decide as I go</a></div>
      </section>
      <aside class="flow-aside reveal reveal-delay"><span class="aside-mark">${icon('compass', 21)}</span><span class="section-kicker">Travel, your way</span><h2>There is no right way to see Jordan.</h2><p>Tell us what catches your eye. You can change your mind as often as the road asks you to.</p><div class="aside-rule"></div><small>Nothing is saved beyond this browser.</small></aside>
    </div>
  </main>${footer()}</div>`;
}

function pathChoice(iconName, title, copy, href, label) {
  return `<a class="path-card" href="${href}"><span class="path-card-icon">${icon(iconName, 22)}</span><span class="section-kicker">${label}</span><h2>${title}</h2><p>${copy}</p><span class="path-card-arrow">${icon('arrow', 16)}</span></a>`;
}

function choosePath() {
  const preferences = readPreferences();
  const feeling = preferenceGroups[0].options.find(([value]) => value === preferences.feeling)?.[1];
  return `<div class="page page-flow">${nav()}<main class="flow-main shell">
    ${progressHeader('02', 'Choose your path', feeling ? `You are drawn to ${feeling.toLowerCase()}. Where should the road begin?` : 'Start with a feeling, a place, or simply a little curiosity.', '#/personalize')}
    <section class="path-grid reveal reveal-delay">
      ${pathChoice('search', 'I know where I’m going', 'Search all six destinations and follow the place that is already on your mind.', '#/discover', 'Browse Jordan')}
      ${pathChoice('compass', 'Show me something unexpected', 'Use your choices to find a few places that might feel like a good next turn.', '#/discover?mode=for-you', 'For you')}
      ${pathChoice('sun', 'Take the long way', 'Begin with a slower route through stories, stops, and practical details.', '#/discover?mode=slow', 'A slower route')}
    </section>
    <div class="path-note"><span>${icon('book', 17)}</span><p>Your choices stay with you as you move between screens. Nothing here needs an account.</p></div>
  </main>${footer()}</div>`;
}

function recommendedDestinations(mode = '') {
  const preferences = readPreferences();
  if (mode === 'slow' || preferences.pace === 'slow') {
    return [...destinations].sort((a, b) => (a.time === 'Half day' ? -1 : 1) - (b.time === 'Half day' ? -1 : 1));
  }
  const preferredCategory = { history: 'History', nature: 'Nature', culture: 'Culture' }[preferences.feeling];
  if (!preferredCategory) return destinations;
  return [...destinations].sort((a, b) => Number(b.category === preferredCategory) - Number(a.category === preferredCategory));
}

function discover(mode = '') {
  const personal = mode === 'for-you';
  const visibleDestinations = recommendedDestinations(mode);
  return `<div class="page page-discover">${nav('discover')}<main class="discover-main shell">
    <div class="page-heading reveal"><a class="back-link" href="${personal ? '#/path' : '#/'}">${icon('back', 15)} ${personal ? 'Back to your path' : 'Back home'}</a><span class="journey-pill">03 / 03 · Destinations</span><h1>${personal ? 'A few places for you' : 'Search destinations'}</h1><p>${personal ? 'A starting point shaped by your feeling for the road. Follow the one that makes you pause.' : 'Find the places that make you curious — then see what is waiting along the way.'}</p></div>
    <div class="search-wrap reveal reveal-delay">${icon('search', 19)}<input id="destination-search" type="search" placeholder="Search Jordan’s wonders..." autocomplete="off" aria-label="Search destinations"><span class="search-count" id="search-count">6 places</span></div>
    <div class="filters reveal reveal-delay-2" role="group" aria-label="Filter destinations"><span class="filter-label">Browse by</span><button class="filter-chip active" data-filter="All" type="button">All places</button><button class="filter-chip" data-filter="History" type="button">${icon('arch', 14)} History</button><button class="filter-chip" data-filter="Nature" type="button">${icon('wave', 14)} Nature</button><button class="filter-chip" data-filter="Culture" type="button">${icon('mosaic', 14)} Culture</button><button class="filter-chip" data-filter="Adventure" type="button">${icon('sun', 14)} Adventure</button></div>
    <div class="destination-grid" id="destination-grid">${visibleDestinations.map((d) => destinationCard(d)).join('')}</div><div class="empty-state" id="empty-state" hidden><span class="empty-icon">${icon('compass', 24)}</span><h2>No hidden stop found</h2><p>Try a different word or browse all of Jordan.</p><button class="button button-outline" data-reset type="button">Show all places</button></div>
    </main>${footer()}</div>`;
}

function destinationSubnav(d, active) {
  const links = [
    ['overview', 'Overview', `#/destination/${d.slug}`],
    ['stops', 'Stops', `#/destination/${d.slug}/stops`],
    ['story', 'Story', `#/destination/${d.slug}/story`],
    ['practical', 'Practical', `#/destination/${d.slug}/practical`],
    ['challenge', 'Challenge', `#/destination/${d.slug}/challenge`]
  ];
  return `<nav class="destination-subnav" aria-label="${d.name} guide">${links.map(([key, label, href]) => `<a class="${active === key ? 'active' : ''}" href="${href}" ${active === key ? 'aria-current="page"' : ''}>${label}</a>`).join('')}<a class="subnav-checkin ${active === 'checkin' ? 'active' : ''}" href="#/destination/${d.slug}/checkin" ${active === 'checkin' ? 'aria-current="page"' : ''}>Check-in ${icon('arrow', 13)}</a></nav>`;
}

function destinationHero(d, label, copy) {
  return `<section class="flow-hero tint-${d.tint}"><img class="flow-hero-photo" src="${d.image}" alt="${d.imageAlt}"><span class="image-placeholder flow-placeholder" aria-hidden="true">Jordan destination image</span><div class="flow-hero-content"><span class="journey-pill">${d.category} · ${d.region.split(' · ')[0]}</span><h1>${label}</h1><p>${copy}</p></div></section>`;
}

function stopItems(d) {
  const blurbs = {
    Madaba: 'Look down before you look ahead. A small detail can redraw the whole day.',
    'Mount Nebo': 'Find the wide view, then give the silence a minute to settle.',
    'Wadi Mujib': 'The landscape narrows here. Notice how the stone changes the sound around you.',
    'Little Petra': 'A quieter threshold with the same patient hand in the rock.',
    Aqaba: 'Begin near the water and let the desert arrive by degrees.',
    'Khazali Canyon': 'Ancient marks sit inside the cool shadow of the canyon wall.',
    'Lawrence’s Spring': 'A small source of water explains why a route survives.',
    'Um Frouth': 'Stand back from the arch and notice how light cuts through it.',
    Amman: 'Every long road benefits from a good coffee and a first conversation.',
    'Hadrian’s Arch': 'The city announces itself before the main street begins.',
    'Oval Plaza': 'Let the shape of the space show you how people once gathered.',
    'Temple of Artemis': 'Climb for the view, then look at the craft in the smallest stone.',
    Sowayma: 'Salt, water, and sky make a landscape that asks for very little.',
    'Dead Sea Panorama': 'The best view is often the one before you reach the water.',
    'Ma’in': 'Warm water and a slower breath make a good final chapter.',
    'St George’s Church': 'A mosaic can be a map, a record, and a doorway at once.',
    'Madaba Market': 'Follow the colour and the sound of work being made by hand.',
    Haret: 'Save room for a courtyard table and a story from someone local.',
    'Ajloun Forest Reserve': 'The green changes the temperature of the whole journey.',
    'Ajloun Castle': 'Look through the high windows before you look out from them.',
    Orjan: 'Olive groves keep their own slow calendar.',
    Rasoun: 'End where the table is set and the road becomes a conversation.'
  };
  return d.route.map((stop, index) => {
    const [name, detail] = stop.split(' · ');
    return { name, detail, number: index + 1, blurb: blurbs[name] || (name.startsWith('Haret') ? blurbs.Haret : `Pause here and let ${name} become part of the story.`) };
  });
}

function destinationOverview(d) {
  return `<div class="page page-overview">${nav('discover')}<main class="overview-main shell">
    <a class="back-link" href="#/discover">${icon('back', 15)} Back to destinations</a>
    <section class="overview-hero tint-${d.tint}"><img class="overview-photo" src="${d.image}" alt="${d.imageAlt}"><span class="image-placeholder overview-placeholder" aria-hidden="true">Jordan destination image</span><div class="overview-hero-content"><span class="journey-pill">${d.category} · Jordan</span><h1>${d.name}</h1><p>${d.tagline}</p><div class="overview-rating">${icon(d.icon, 15)} <strong>${d.rating}</strong><span>One of Jordan’s essential stops</span></div></div></section>
    ${destinationSubnav(d, 'overview')}
    <section class="overview-content">
      <div class="overview-story"><span class="section-kicker">A little context</span><h2>${d.description}</h2><p class="story-why">${icon('compass', 17)} <strong>Why it suits you</strong></p><div class="why-tags"><span>${d.category}</span><span>Slow travel</span><span>Local stories</span></div><p class="why-copy">${d.why}</p>
        <div class="route-heading"><span class="section-kicker">Stops along the way</span><span>${d.stops} places to notice</span></div><div class="route-list">${stopItems(d).slice(0, 4).map((stop, i) => `<div class="route-stop"><span class="route-dot ${i === 0 ? 'filled' : ''}">${stop.number}</span><span><strong>${stop.name}</strong><small>${stop.detail}</small></span><span class="route-arrow">${icon('arrow', 13)}</span></div>`).join('')}</div><a class="text-link overview-more" href="#/destination/${d.slug}/stops">See every stop ${icon('arrow', 14)}</a>
      </div>
      <aside class="journey-card"><div class="journey-card-top"><span class="card-icon">${icon(d.icon, 18)}</span><span class="journey-pill">Your next chapter</span></div><h3>Ready to discover ${d.name}?</h3><p>${d.stops} small surprises are waiting along your route.</p><div class="overview-facts"><span><small>Time to allow</small><strong>${d.time}</strong></span><span><small>From Amman</small><strong>${d.distance.replace(' from Amman', '')}</strong></span></div><a class="button button-plum" href="#/destination/${d.slug}/stops">Explore the stops ${icon('arrow', 15)}</a><a class="change-link" href="#/discover">Choose a different destination</a></aside>
    </section>
    </main>${footer()}</div>`;
}

function destinationPage(d, active, title, copy, content) {
  return `<div class="page page-destination">${nav('discover')}<main class="destination-main shell">
    <a class="back-link" href="#/destination/${d.slug}">${icon('back', 15)} Back to ${d.name}</a>
    ${destinationHero(d, title, copy)}
    ${destinationSubnav(d, active)}
    ${content}
  </main>${footer()}</div>`;
}

function stopsPage(d) {
  const stops = stopItems(d);
  return destinationPage(d, 'stops', 'Stops to notice', 'A route is more than a line between two places. These are the details worth making room for.', `<section class="flow-layout">
    <div><div class="section-intro"><span class="section-kicker">${d.stops} places to notice</span><h2>Let the day unfold one stop at a time.</h2></div><div class="stop-list">${stops.map((stop) => `<article class="stop-card"><span class="route-dot ${stop.number === 1 ? 'filled' : ''}">${stop.number}</span><div><span class="card-kicker">${stop.detail}</span><h3>${stop.name}</h3><p>${stop.blurb}</p></div><span class="stop-card-arrow">${icon('arrow', 14)}</span></article>`).join('')}</div></div>
    <aside class="side-note"><span class="aside-mark">${icon(d.icon, 21)}</span><span class="section-kicker">A small invitation</span><h3>Leave space between the landmarks.</h3><p>The best part of a route is often the few minutes when you are not looking for anything.</p><a class="button button-outline" href="#/destination/${d.slug}/story">Read the story ${icon('arrow', 14)}</a></aside>
  </section>`);
}

function storyPage(d) {
  return destinationPage(d, 'story', 'A story in the landscape', 'Every place has a way of speaking. Here, the details are quieter than the headline.', `<section class="story-layout">
    <article class="story-copy"><span class="section-kicker">The feeling of ${d.name}</span><h2>${d.description}</h2><p>${d.why}</p><p>Come without trying to collect every answer. Let the first view, the texture of the stone, or the sound of a nearby table stay with you. Jordan has a way of making a small detail feel like the beginning of a much longer story.</p><blockquote>“The road keeps its own kind of memory.”</blockquote><span class="quote-credit">A note from the road · YALLA JO</span></article>
    <aside class="story-aside"><div class="story-aside-card"><span class="section-kicker">Look closer</span><h3>What might you notice?</h3><ul><li>${d.category === 'Nature' ? 'The way light changes the landscape' : 'The marks left by hands long ago'}</li><li>The first sound before you see the place</li><li>One detail you would miss from a checklist</li></ul></div><a class="button button-plum" href="#/destination/${d.slug}/practical">Plan the day ${icon('arrow', 15)}</a></aside>
  </section>`);
}

function practicalPage(d) {
  const cards = [
    ['Getting there', d.arrival, 'pin'],
    ['Time to allow', d.time, 'clock'],
    ['Best window', d.bestTime, 'sun'],
    ['Bring with you', d.bring, 'compass'],
    ['Good to know', 'A flexible plan leaves room for the place to surprise you.', 'book'],
    ['From Amman', d.distance, 'arrow']
  ];
  return destinationPage(d, 'practical', 'Practical, not precious', 'A few useful details so the day feels open, comfortable, and yours.', `<section class="practical-content">
    <div class="section-intro"><span class="section-kicker">Before you go</span><h2>Make room for the good kind of unplanned.</h2></div><div class="practical-grid">${cards.map(([label, value, practicalIcon]) => `<article class="practical-card"><span class="practical-icon">${icon(practicalIcon, 18)}</span><span class="card-kicker">${label}</span><p>${value}</p></article>`).join('')}</div><div class="travel-note"><span>${icon('compass', 19)}</span><div><span class="section-kicker">YALLA JO note</span><p>Conditions change with the season. Ask a local, take the slower road, and let comfort be part of the adventure.</p></div></div><a class="button button-plum" href="#/destination/${d.slug}/challenge">Try the noticing challenge ${icon('arrow', 15)}</a>
  </section>`);
}

function challengePage(d) {
  const prompts = d.category === 'History'
    ? ['Find a repeated shape in the stone', 'Notice what has been repaired', 'Listen for the quietest corner']
    : d.category === 'Culture'
      ? ['Find a colour that repeats', 'Ask what is being made nearby', 'Notice how people share the space']
      : ['Find the place where the light shifts', 'Notice one sound beyond the road', 'Look for a line made by water or wind'];
  return destinationPage(d, 'challenge', 'A little challenge', 'No scoreboard, no rush. Just one way to arrive with your eyes open.', `<section class="challenge-layout">
    <article class="challenge-card"><span class="challenge-number">01</span><span class="section-kicker">While you are there</span><h2>Can you find one detail you would have missed from a checklist?</h2><p>Choose the prompt that feels right today. The only goal is to notice something and remember how it felt.</p><div class="challenge-options" role="group" aria-label="Choose a noticing prompt">${prompts.map((prompt, i) => `<button type="button" class="challenge-option ${i === 0 ? 'selected' : ''}" data-challenge-option="${i}" aria-pressed="${i === 0}"><span>${String(i + 1).padStart(2, '0')}</span>${prompt}</button>`).join('')}</div><a class="button button-plum" href="#/destination/${d.slug}/checkin">I noticed something ${icon('arrow', 15)}</a></article>
    <aside class="challenge-aside"><span class="aside-mark">${icon('compass', 21)}</span><span class="section-kicker">Keep it simple</span><h3>The reward is the detail itself.</h3><p>This is a quiet prompt to help the place stay with you. Nothing is tracked and there is nothing to complete perfectly.</p></aside>
  </section>`);
}

function checkinPage(d) {
  return destinationPage(d, 'checkin', 'Bring it home', 'A final pause for the detail, feeling, or story you want to keep.', `<section class="checkin-layout">
    <article class="checkin-card"><span class="section-kicker">A small reflection</span><h2>What did you notice at ${d.name}?</h2><p>Choose the sentence that comes closest. You can always change it before you leave this screen.</p><form data-checkin-form><div class="reflection-options"><button type="button" data-reflection="A detail in the landscape" aria-pressed="false">A detail in the landscape</button><button type="button" data-reflection="A story I want to remember" aria-pressed="false">A story I want to remember</button><button type="button" data-reflection="A moment shared with someone" aria-pressed="false">A moment shared with someone</button></div><button class="button button-plum" type="submit" disabled data-checkin-submit>Keep this feeling ${icon('arrow', 15)}</button></form><div class="checkin-success" data-checkin-success hidden><span class="success-icon">${icon('check', 17)}</span><div><strong>That is enough for today.</strong><p>Your reflection is kept in this moment, not sent anywhere.</p></div></div></article>
    <aside class="checkin-aside"><div class="checkin-line"></div><span class="section-kicker">The road continues</span><h3>Whenever you are ready, there is another turn.</h3><a class="text-link" href="#/discover">Discover another place ${icon('arrow', 14)}</a></aside>
  </section>`);
}

function route() {
  const rawHash = window.location.hash.replace(/^#/, '') || '/';
  const [path, query = ''] = rawHash.split('?');
  const parts = path.split('/').filter(Boolean);
  if (parts[0] === 'destination') {
    const d = destinations.find((item) => item.slug === parts[1]) || destinations[0];
    const section = parts[2] || 'overview';
    if (section === 'stops') return stopsPage(d);
    if (section === 'story') return storyPage(d);
    if (section === 'practical') return practicalPage(d);
    if (section === 'challenge') return challengePage(d);
    if (section === 'checkin') return checkinPage(d);
    return destinationOverview(d);
  }
  if (path === '/discover') return discover(new URLSearchParams(query).get('mode') || '');
  if (path === '/personalize') return personalization();
  if (path === '/path') return choosePath();
  return landing();
}

function bindMenu() {
  const menuButton = document.querySelector('[data-menu]');
  menuButton?.addEventListener('click', () => {
    const mobileNav = document.querySelector('.main-nav');
    const isOpen = mobileNav?.classList.toggle('open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  }));
}

function bindImages() {
  document.querySelectorAll('.destination-photo, .overview-photo, .flow-hero-photo').forEach((image) => image.addEventListener('error', () => {
    image.closest('.card-image, .overview-hero, .flow-hero')?.classList.add('image-missing');
    image.remove();
  }));
}

function bindDiscover() {
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
    cards.forEach((card) => {
      const d = destinations.find((item) => item.slug === card.dataset.destination);
      const matches = (!term || `${d.name} ${d.region} ${d.category} ${d.tagline}`.toLowerCase().includes(term)) && (filter === 'All' || d.category === filter || (filter === 'Adventure' && ['Petra', 'Wadi Rum'].includes(d.name)));
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'place' : 'places'}`;
    if (empty) empty.hidden = visible !== 0;
  };
  search?.addEventListener('input', update);
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    filter = button.dataset.filter;
    update();
  }));
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    if (search) search.value = '';
    filter = 'All';
    document.querySelector('[data-filter="All"]')?.click();
    update();
  });
}

function bindPersonalization() {
  const preferences = readPreferences();
  document.querySelectorAll('[data-choice]').forEach((button) => button.addEventListener('click', () => {
    preferences[button.dataset.choiceGroup] = button.dataset.choice;
    savePreferences(preferences);
    document.querySelectorAll(`[data-choice-group="${button.dataset.choiceGroup}"]`).forEach((item) => {
      const selected = item.dataset.choice === button.dataset.choice;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    const complete = preferencesComplete(preferences);
    const continueLink = document.querySelector('[data-personalize-continue]');
    if (continueLink) {
      continueLink.classList.toggle('is-disabled', !complete);
      continueLink.setAttribute('href', complete ? '#/path' : '#/personalize');
    }
  }));
  document.querySelector('[data-skip-personalize]')?.addEventListener('click', () => {
    if (!preferencesComplete(preferences)) savePreferences({ ...preferences, pace: preferences.pace || 'curious' });
  });
}

function bindChallenge() {
  document.querySelectorAll('[data-challenge-option]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-challenge-option]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  }));
}

function bindCheckin() {
  const form = document.querySelector('[data-checkin-form]');
  const submit = document.querySelector('[data-checkin-submit]');
  const success = document.querySelector('[data-checkin-success]');
  document.querySelectorAll('[data-reflection]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-reflection]').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    if (submit) submit.disabled = false;
  }));
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (success) success.hidden = false;
    if (submit) submit.hidden = true;
  });
}

function render() {
  document.querySelector('#app').innerHTML = route();
  window.scrollTo({ top: 0, behavior: 'instant' });
  bindMenu();
  bindImages();
  bindDiscover();
  bindPersonalization();
  bindChallenge();
  bindCheckin();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);