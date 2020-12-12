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

function themeSwitch(event) {
  const inputChecked = event.currentTarget.checked;
  if (inputChecked === false) {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
  if (inputChecked === true) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
}

function savedDarkTheme() {
  const themeSaved = localStorage.getItem('theme');
  if (themeSaved === Theme.DARK) {
    refs.body.classList.add('dark-theme');
    refs.switchToggle.checked = true;
  }
}

const markup = menuTemplate(menu);

refs.menu.insertAdjacentHTML('beforeend', markup);
