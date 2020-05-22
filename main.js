import { getRandomJoke, getSearchJoke, getCategoryJoke } from './modules/getJokes.js';

const form = document.getElementById('form');
const categoriesList = document.getElementById('categories-list');    // change to querySelector
const searchField = document.getElementById('search-field');          // change to querySelector
// const jokesSection = document.
const jokePlace = document.querySelector('p');

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

function makeCategoriesList(data) {
  categoriesList.innerHTML = '';
  for (const category of data) {
    let cat = document.createElement('label');
    cat.innerHTML = category;

    let box = document.createElement('input');
    box.type = 'checkbox';
    box.id = category;
    // box.value = data[i];
    // box.style = "visibility: hidden

    categoriesList.appendChild(cat);
    cat.appendChild(box);
  }
};

function changeJokeType(event) {
  let prev = document.getElementsByClassName('current')[0];
  let next = event.target;

  prev.classList.toggle('current');
  next.classList.toggle('current');

  if (prev.id == 'category' || next.id == 'category') {
    categoriesList.classList.toggle('hidden');
  }
  if (prev.id == 'search' || next.id == 'search') {
    searchField.classList.toggle('hidden');
  }
}


function formSubmit(event) {
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
    getRandomJoke(jokePlace);

  } else if (checks[1]) {
    for (var i = 2; i < (inputs.length  - 1); i++) {
      if (checks[i]) {
        reqCategories.push(inputs[i]);
      }
    }
    if (reqCategories.length) {
      getCategoryJoke(jokePlace, reqCategories);
    } else {
      jokePlace.innerHTML = '<em>Please select some categories or switch to random joke</em>';
    }

  } else if (checks[checks.length-3]) {
    if (document.getElementById('search-field').value) {
      getSearchJoke(jokePlace, document.getElementById('search-field').value);
    } else {
      jokePlace.innerHTML = '<em>Please provide text to search or switch to random joke</em>';
    }
  }
};
