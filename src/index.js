import css from './styles.css';
import menu from './menu.json';

const refs = {
  switchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
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
    localStorage.removeItem('dark', DARK);
  }
  if (inputChecked === true) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('dark', DARK);
    localStorage.removeItem('light', LIGHT);
  }
  console.dir(event.currentTarget.checked);
}

console.log(Theme);
