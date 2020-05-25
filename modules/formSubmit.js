import { getRandomJoke, getSearchJoke, getCategoryJoke } from './jokeGet.js';
import { jokePlace } from '../main.js';

export function formSubmit(event) {
  event.preventDefault();

  // console.log(event);

  let inputs = [];
  let checks = [];
  let reqCategories = [];

  for (const input of event.target.getElementsByTagName('input')) {
    // console.log(input.id, input.checked);
    inputs.push(input.id);
    checks.push(input.checked);
  }

  if (checks[0]) {
    getRandomJoke();

  } else if (checks[1]) {
    for (var i = 2; i < (inputs.length  - 1); i++) {
      if (checks[i]) {
        reqCategories.push(inputs[i]);
      }
    }
    if (reqCategories.length) {
      getCategoryJoke(reqCategories);
    } else {
      jokePlace.innerHTML = '<em>Please select some categories or switch to random joke</em>';
    }

  } else if (checks[checks.length-3]) {
    if (document.getElementById('search-field').value) {
      getSearchJoke(document.getElementById('search-field').value);
    } else {
      jokePlace.innerHTML = '<em>Please provide text to search or switch to random joke</em>';
    }
  }
};
