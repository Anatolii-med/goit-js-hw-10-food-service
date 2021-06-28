import menuTemplate from './templates/menu_items.hbs';
import menuList from './menu.json';

import './sass/main.scss';

console.log(menuTemplate(menuList));

const menu = document.querySelector('.js-menu');

menu.innerHTML = menuTemplate(menuList);
