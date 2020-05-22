import { jokePlace } from '../main.js';

function getRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {jokePlace.innerHTML = data.value})
};

function getCategoryJoke(lst) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${lst}`)
    .then(response => response.json())
    .then(data => {jokePlace.innerHTML = data.value})
};

function getSearchJoke(txt) {
  fetch(`https://api.chucknorris.io/jokes/search?query=${txt}`)
    .then(response => response.json())
    .then(data => {
      if (data.total) {
        let index = Math.floor(Math.random()*data.total);
        jokePlace.innerHTML = data.result[index].value;
      } else {
        getRandomJoke(jokePlace);
      }
    })
}

export {
  getRandomJoke,
  getSearchJoke,
  getCategoryJoke
};
