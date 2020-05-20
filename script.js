const urlRandom = 'https://api.chucknorris.io/jokes/random';
const urlByCategory = 'https://api.chucknorris.io/jokes/random?category={category}';
const urlCategories = 'https://api.chucknorris.io/jokes/categories';
const urlByText = 'https://api.chucknorris.io/jokes/search?query={query}';

const form = document.getElementById('form');
const joke = document.querySelector('p');

function getJoke(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
}

function formSubmit(event) {
  getJoke(urlRandom);
  event.preventDefault();
}

form.addEventListener('submit', formSubmit);
