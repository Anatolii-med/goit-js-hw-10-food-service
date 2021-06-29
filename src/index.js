import menuTemplate from './templates/menu_items.hbs';
import menuList from './menu.json';

import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menu = document.querySelector('.js-menu');
menu.innerHTML = menuTemplate(menuList);

const themeSwitcher = document.querySelector('#theme-switch-toggle');
themeSwitcher.addEventListener('change', themeChange);

const bodyTheme = document.querySelector('body');

function themeChange(evt) {
  const checked = evt.currentTarget.checked;
  if (checked) {
    setDarkTheme();
  }

  if (!checked) {
    setLightTheme();
  }
}

checkCurrentTheme();

function checkCurrentTheme() {
  const currentTheme = localStorage.getItem('themeMod');
  if (currentTheme === Theme.LIGHT || currentTheme === null) {
    setLightTheme();
  }

  if (currentTheme === Theme.DARK) {
    setDarkTheme();
  }
}

function setDarkTheme() {
  localStorage.setItem('themeMod', Theme.DARK);
  bodyTheme.classList.add(Theme.DARK);
  bodyTheme.classList.remove(Theme.LIGHT);
  themeSwitcher.checked = true;
}
function setLightTheme() {
  localStorage.setItem('themeMod', Theme.LIGHT);
  bodyTheme.classList.add(Theme.LIGHT);
  bodyTheme.classList.remove(Theme.DARK);
  themeSwitcher.checked = false;
}
