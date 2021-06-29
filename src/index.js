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
const bodyTheme = document.querySelector('body');

// localStorage.getItem('themeMod');
// if (themeMod === dark) {
//   bodyTheme.classList.add(Theme.DARK);
//   bodyTheme.classList.remove(Theme.LIGHT);
// }

bodyTheme.classList.add(Theme.LIGHT);
// localStorage.setItem('themeMod', 'light');

const themeChange = function () {
  if (bodyTheme.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('themeMod', 'dark');
    bodyTheme.classList.add(Theme.DARK);
    bodyTheme.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('themeMod', 'light');
    bodyTheme.classList.add(Theme.LIGHT);
    bodyTheme.classList.remove(Theme.DARK);
  }
};

themeSwitcher.addEventListener('change', themeChange);
