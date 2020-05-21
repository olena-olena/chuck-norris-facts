const urlRandom = 'https://api.chucknorris.io/jokes/random';
const urlByCategory = 'https://api.chucknorris.io/jokes/random?category={category}';
const urlCategories = 'https://api.chucknorris.io/jokes/categories';
const urlByText = 'https://api.chucknorris.io/jokes/search?query={query}';

const form = document.getElementById('form');
const radioCategory = document.getElementById('category');
const radioRandom = document.getElementById('random');
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

      categoriesList.appendChild(cat).appendChild(box);
    }
  });

form.addEventListener('submit', formSubmit);
radioCategory.addEventListener('change', changeCategory);
radioRandom.addEventListener('change', changeCategory);


function changeCategory(event) {
  // if (event.target.id == 'random') {
  categoriesList.classList.toggle('hidden')

}

function getJoke(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
};

function formSubmit(event) {
  getJoke(urlRandom);
  event.preventDefault();
};
