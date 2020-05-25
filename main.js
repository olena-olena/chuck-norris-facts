import { makeCategoriesList, changeJokeType } from './modules/form.js';
import { formSubmit } from './modules/formSubmit.js';
import { getJokeByLink } from './modules/jokeGet.js';

export const jokePlace = document.getElementsByClassName('jokes')[0];
export const favPlace = document.getElementsByClassName('jokes')[1];

fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then(data => makeCategoriesList(data))

form.addEventListener('submit', formSubmit);

for (const radio of document.getElementsByClassName('radio')) {
  radio.addEventListener('change', changeJokeType);
};

if (localStorage.length > 0) {
  console.log(localStorage.length);
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let link = localStorage.getItem(id);
    getJokeByLink(link);
  }
};
