import css from './styles.css';
import menu from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchToggle.addEventListener('change', themeSwitch);

savedDarkTheme();

const replaceTheme = (oldTheme, newTheme) => {
  refs.body.classList.remove(oldTheme);
  refs.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
};

function themeSwitch(event) {
  const inputChecked = event.currentTarget.checked;
  if (inputChecked === false) {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  } else {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  }
}

function savedDarkTheme() {
  const themeSaved = localStorage.getItem('theme');
  if (themeSaved === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switchToggle.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}

const markup = menuTemplate(menu);

refs.menu.insertAdjacentHTML('beforeend', markup);
