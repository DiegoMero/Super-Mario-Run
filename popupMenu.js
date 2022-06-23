const hamburger = document.getElementById('popup-menu');
const body = document.querySelector('body');
body.className = 'popup-body';

function displaymenu() {
  const menu = document.createElement('div');
  menu.className = 'menu-attributes';

  const iconX = document.createElement('img');
  iconX.src = './images/xIcon.png';
  iconX.className = 'menu-xicon';
  iconX.addEventListener('click', () => { body.removeChild(menu); });

  const aboutMenu = document.createElement('a');
  aboutMenu.href = 'about.html';
  aboutMenu.innerText = 'About';
  aboutMenu.className = 'menu-about';

  const programMenu = document.createElement('a');
  programMenu.innerText = 'Program';
  programMenu.href = '#main-program';
  programMenu.className = 'menu-about';
  programMenu.addEventListener('click', () => { body.removeChild(menu); });

  const sponsorMenu = document.createElement('a');
  sponsorMenu.innerText = 'Sponsor';
  sponsorMenu.href = '#feature-characters';
  sponsorMenu.className = 'menu-about';
  sponsorMenu.addEventListener('click', () => { body.removeChild(menu); });

  const newsMenu = document.createElement('a');
  newsMenu.innerText = 'Partners';
  newsMenu.href = '#partners';
  newsMenu.className = 'menu-about';
  newsMenu.addEventListener('click', () => { body.removeChild(menu); });

  const mainButtonMenu = document.createElement('a');
  mainButtonMenu.className = 'menu-main-button';
  mainButtonMenu.innerText = 'MARIO RUN 2022';
  mainButtonMenu.href = 'index.html';

  menu.appendChild(iconX);
  menu.appendChild(aboutMenu);
  menu.appendChild(programMenu);
  menu.appendChild(sponsorMenu);
  menu.appendChild(newsMenu);
  menu.appendChild(mainButtonMenu);
  body.appendChild(menu);
}

hamburger.addEventListener('click', displaymenu);