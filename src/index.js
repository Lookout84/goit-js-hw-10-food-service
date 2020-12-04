import css from './styles.css';
import menu from './menu.json';

const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const LIGHT = JSON.stringify(Theme.LIGHT);
const DARK = JSON.stringify(Theme.DARK);

// refs.body.classList.add('light-theme');
refs.switchToggle.addEventListener('change', themeSwitch);

function themeSwitch(event) {
  const inputChecked = event.currentTarget.checked;
  if (inputChecked === false) {
    refs.body.classList.add('light-theme');
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('light', LIGHT);
  }
  if (inputChecked === true) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('dark', DARK);
  }
  console.dir(event.currentTarget.checked);
}

console.log(Theme);
