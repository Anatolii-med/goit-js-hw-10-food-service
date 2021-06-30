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
    setTheme(Theme.DARK, Theme.LIGHT, true);
  }

  if (!checked) {
    setTheme(Theme.LIGHT, Theme.DARK, false);
  }
}

checkCurrentTheme();

function checkCurrentTheme() {
  const currentTheme = localStorage.getItem('themeMod');
  if (currentTheme === Theme.LIGHT || currentTheme === null) {
    setTheme(Theme.LIGHT, Theme.DARK, false);
  }

  if (currentTheme === Theme.DARK) {
    setTheme(Theme.DARK, Theme.LIGHT, true);
  }
}

function setTheme(currentThemeColor, oldThemecolor, checker) {
  localStorage.setItem('themeMod', currentThemeColor);
  bodyTheme.classList.add(currentThemeColor);
  bodyTheme.classList.remove(oldThemecolor);
  themeSwitcher.checked = checker;
}
