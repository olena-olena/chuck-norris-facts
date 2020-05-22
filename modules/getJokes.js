function getRandomJoke(jokePlace) {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {jokePlace.innerHTML = data.value})
};

function getCategoryJoke(jokePlace, lst) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${lst}`)
    .then(response => response.json())
    .then(data => {jokePlace.innerHTML = data.value})
};

function getSearchJoke(jokePlace, txt) {
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
