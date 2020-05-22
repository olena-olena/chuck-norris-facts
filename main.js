import { makeCategoriesList, changeJokeType } from './modules/form.js';
import { formSubmit } from './modules/formSubmit.js';

export const jokePlace = document.querySelector('p');


fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then(data => makeCategoriesList(data))

form.addEventListener('submit', formSubmit);

for (const radio of document.getElementsByClassName('radio')) {
  radio.addEventListener('change', changeJokeType);
};

function makeJoke(data) {
  jokePlace = document.createElement('article');
  //
  //
}
