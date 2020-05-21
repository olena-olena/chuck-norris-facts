const urlRandom = 'https://api.chucknorris.io/jokes/random';
const urlByCategory = 'https://api.chucknorris.io/jokes/random?category={category}';
const urlCategories = 'https://api.chucknorris.io/jokes/categories';
const urlByText = 'https://api.chucknorris.io/jokes/search?query={query}';

const form = document.getElementById('form');
const radio = document.getElementById('category');
const categoriesList = document.getElementById('categories-list');
const joke = document.querySelector('p');

fetch(urlCategories)
  .then(response => response.json())
  .then(data => {
    categoriesList.innerHTML = '';
    for (let i in data) {
      let box = document.createElement('input');
      box.type = 'checkbox';
      box.id = `${data[i]}`;
      box.value = `${data[i]}`;
      box.style = "visibility: hidden"

      let cat = document.createElement('label');
      cat.innerHTML = `${data[i]}`;

      categoriesList.appendChild(cat);
      cat.appendChild(box);
    }
  });

function getJoke(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
};

function formSubmit(event) {
  getJoke(urlRandom);
  event.preventDefault();
};

form.addEventListener('submit', formSubmit);
