import data from "../menu.json"
import template from "../templates/myFood.hbs"
import refs from "./refs"

const { body, menu, checkbox } = refs
const siteList = template(data);
menu.insertAdjacentHTML("beforeend", siteList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;
const currentTheme = localStorage.getItem('theme') || LIGHT;

localStorage.setItem('theme', currentTheme);
body.classList.add(currentTheme);
checkbox.checked = currentTheme === DARK;

checkbox.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);

  localStorage.setItem('theme', checkbox.checked ? DARK : LIGHT);
};
