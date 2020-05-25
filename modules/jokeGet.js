import { makeJoke } from './jokeDisplay.js';

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

export {
  getRandomJoke,
  getSearchJoke,
  getCategoryJoke
};
