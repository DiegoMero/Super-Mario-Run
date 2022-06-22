const characters = [
  {
    name: 'Mario',
    profilePic: 'images/Mario.png',
    occupation: 'Plumber and hero',
    description: 'The everyones favorite, there is no better runner than him in the kingdom.',
  },
  {
    name: 'Luigi',
    profilePic: 'images/Luigi.png',
    occupation: "Mario's Brother",
    description: 'The eternal second, but he does not care, he is always willing to help.',
  },
  {
    name: 'Princess Peach',
    profilePic: 'images/PrincessPeachImage.jpg',
    occupation: 'The highest expression of government.',
    description: 'The damsel in distress, saving her from danger should be a paid job.',
  },
  {
    name: 'Yoshi',
    profilePic: 'images/Yoshi.jpg',
    occupation: 'Mount and unconditional friend',
    description: 'This dinosaur will accompany you throughout your adventure',
  },
  {
    name: 'Toad',
    profilePic: 'images/Toad.png',
    occupation: 'Butler and guard',
    description: 'Lost? The toads are there to guide your way.',
  },
  {
    name: 'Bowser',
    profilePic: 'images/Bowser.jpg',
    occupation: 'Villain and family man',
    description: 'Evil personified, will you have what it takes to defeat him?',
  },
];

const charactersContainer = document.querySelector('.characters');

const characterTitle = document.createElement('h2');
characterTitle.className = 'character-title';
characterTitle.innerText = 'Featured Characters';
charactersContainer.appendChild(characterTitle);

const divisor = document.createElement('div');
divisor.className = 'divisor';
charactersContainer.appendChild(divisor);

const CharactersMiniContainer = document.createElement('div');
CharactersMiniContainer.className = 'character-mini-container';
charactersContainer.appendChild(CharactersMiniContainer);

for (let i = 0; i < characters.length; i += 1) {
  const characterSubContainer = document.createElement('div');
  characterSubContainer.className = 'character-sub-container';
  CharactersMiniContainer.appendChild(characterSubContainer);

  const characterPic = document.createElement('img');
  characterPic.className = 'character-pic';
  characterPic.src = characters[i].profilePic;
  characterSubContainer.appendChild(characterPic);

  const characterHighlights = document.createElement('div');
  characterHighlights.className = 'character-highlights';
  characterSubContainer.appendChild(characterHighlights);

  const characterName = document.createElement('h3');
  characterName.className = 'character-name';
  characterName.innerText = characters[i].name;
  characterHighlights.appendChild(characterName);

  const characterOccupation = document.createElement('h4');
  characterOccupation.className = 'character-occupation';
  characterOccupation.innerText = characters[i].occupation;
  characterHighlights.appendChild(characterOccupation);

  const divisor2 = document.createElement('div');
  divisor2.className = 'divisor2';
  characterHighlights.appendChild(divisor2);

  const characterDescription = document.createElement('h5');
  characterDescription.className = 'character-description';
  characterDescription.innerText = characters[i].description;
  characterHighlights.appendChild(characterDescription);
}

const navbar = document.querySelector('nav');

const subNavbar = document.createElement('div');
subNavbar.classList = 'sub-navbar';
navbar.appendChild(subNavbar);

const facebookLogo = document.createElement('img');
facebookLogo.classList = 'facebook-icon';
facebookLogo.src = 'images/facebookIcon.png';
subNavbar.appendChild(facebookLogo);

const twitterLogo = document.createElement('img');
twitterLogo.classList = 'twitter-icon';
twitterLogo.src = 'images/twitterIcon.png';
subNavbar.appendChild(twitterLogo);

const english = document.createElement('h4');
english.className = 'subnavbar-text';
english.innerText = 'English';
subNavbar.appendChild(english);

const myPage = document.createElement('h4');
myPage.className = 'subnavbar-text';
myPage.innerText = 'My Page';
subNavbar.appendChild(myPage);

const logout = document.createElement('h4');
logout.className = 'subnavbar-text';
logout.innerText = 'Logout';
subNavbar.appendChild(logout);

const desktopNavbar = document.querySelector('.navbar');
navbar.appendChild(desktopNavbar);

const about = document.createElement('a');
about.className = 'about-text';
about.innerText = 'About';
desktopNavbar.appendChild(about);

const program = document.createElement('a');
program.className = 'about-text';
program.innerText = 'Program';
desktopNavbar.appendChild(program);

const join = document.createElement('a');
join.className = 'about-text';
join.innerText = 'Join';
desktopNavbar.appendChild(join);

const sponsor = document.createElement('a');
sponsor.className = 'about-text';
sponsor.innerText = 'Sponsor';
desktopNavbar.appendChild(sponsor);

const news = document.createElement('a');
news.className = 'about-text';
news.innerText = 'News';
desktopNavbar.appendChild(news);

const mainButton = document.createElement('a');
mainButton.className = 'main-button';
mainButton.innerText = 'MARIO RUN 2022';
desktopNavbar.appendChild(mainButton);