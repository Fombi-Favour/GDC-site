const speakersList = document.querySelector('.speakers-list');
const speakers = [
  {
    id: 1,
    name: 'Jeremy Ong',
    image: './assets/speakers/speaker1.jpg',
    role: 'Independent Game Developer',
    description:
      'Jeremy is a graphics programmer but with broader generalist capabilities',
  },
  {
    id: 2,
    name: 'Duygu Cakmak',
    image: './assets/speakers/speaker2.jpg',
    role: 'R&D Director at Creative Assembly',
    description:
      "Duygu is a R&D Director with a background in AI programming and leadership in the games industry. Throughout her career, as a programmer or a director, she's always been passionate about new technologies, contributing to safe and high-functioning teams, as well as best practice development processes.",
  },
  {
    id: 3,
    name: 'Lana Bachynski',
    image: './assets/speakers/speaker3.png',
    role: 'Senior Animator at Riot Games',
    description:
      'Lana shows us how to animate League of Legends‘ Akali, in this long-form educational segment spotlighting art and artists at Riot.',
  },
  {
    id: 4,
    name: 'Andrew Maximov',
    image: './assets/speakers/speaker4.jpg',
    role: 'CEO and founder at Promethean AI, LLC',
    description:
      'Andrew was a Game industry veteran, former Technical Art Director for Sony Interactive, Andrew pushed cutting edge art technology that powered the biggest entertainment franchises in the world.',
  },
  {
    id: 5,
    name: 'Marc Leblanc',
    image: './assets/speakers/speaker5.jpg',
    role: 'Game Developer at Riot Games',
    description:
      'Leblanc have been making computer games professionally since 1992 (and unprofessionally since about 1981). He considers himself a generalist, but his areas of greatest technical experience include game engine architecture, game logic, simulations, and designer-facing tools.',
  },
  {
    id: 6,
    name: 'Lisy Kane',
    image: './assets/speakers/speaker6.png',
    role: ' Videogames Producer and co-founder of Girl Geek Academy, Games Publisher and Developer Kepler Interactive',
    description: 'Lisy is a well-known name in the Melbourne games community',
  },
];

// dynamically displaying the speakers
speakers.forEach((speaker) => {
  speakersList.innerHTML += `
    <div class="speaker" id='${speaker.id}'>
      <img src="${speaker.image}" class="pic" alt="speakers">
      <div class="about">
        <h3>${speaker.name}</h3>
        <h5>${speaker.role}</h5>
        <p>${speaker.description}</p>
      </div>
    </div>
  `;
});

const speakerData = document.querySelectorAll('.speaker');
const extend = document.querySelector('.btn-extend');

// displays the first 2 speakers
function showMin() {
  speakerData.forEach((item) => {
    if (item.id <= 2) item.style.display = 'flex';
    else item.style.display = 'none';
  });
}

// displays all speakers
function showMax() {
  speakerData.forEach((item) => {
    item.style.display = 'flex';
  });
}

showMin();

// changes button text and button image when clicked
document.querySelector('.btn-extend').addEventListener('click', () => {
  if (extend.children[0].textContent === 'more') {
    extend.children[0].textContent = 'less';
    extend.children[1].src = '/assets/arrow_up.png';
    showMax();
  } else {
    showMin();
    extend.children[0].textContent = 'more';
    extend.children[1].src = '/assets/arrow_down.png';
  }
});

// the user needs to reload the page, some speakers are hidden upto screen-width of 767px
window.addEventListener('load', (event) => {
  if (event.currentTarget.innerWidth > 767) {
    speakerData.forEach((item) => {
      item.style.display = 'flex';
    });
  } else {
    showMin();
    extend.children[0].textContent = 'more';
    extend.children[1].src = '/assets/arrow_down.png';
  }
});