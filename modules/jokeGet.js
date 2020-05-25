import { makeJoke } from './jokeDisplay.js';
import { makeFavJoke } from './favDisplay.js';

function getRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => makeJoke(data))
};

function getCategoryJoke(lst) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${lst}`)
    .then(response => response.json())
    .then(data => makeJoke(data))
};

function getSearchJoke(txt) {
  fetch(`https://api.chucknorris.io/jokes/search?query=${txt}`)
    .then(response => response.json())
    .then(data => {
      if (data.total) {
        let index = Math.floor(Math.random()*data.total);
        makeJoke(data.result[index]);
      } else {
        getRandomJoke();
      }
    })
}

function getJokeByLink(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => makeFavJoke(data))
}

export {
  getJokeByLink,
  getRandomJoke,
  getSearchJoke,
  getCategoryJoke
};
