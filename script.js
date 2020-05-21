const form = document.getElementById('form');
const categoriesList = document.getElementById('categories-list');    // change to querySelector
const searchField = document.getElementById('search-field');          // change to querySelector
const joke = document.querySelector('p');

fetch('https://api.chucknorris.io/jokes/categories')
  .then(response => response.json())
  .then(data => makeCategoriesList(data))

form.addEventListener('submit', formSubmit);

for (radio of document.getElementsByClassName('radio')) {
  radio.addEventListener('change', changeCategory);
}

function makeCategoriesList(data) {
  categoriesList.innerHTML = '';
  for (let i in data) {
    let cat = document.createElement('label');
    cat.for = data[i];
    cat.innerHTML = data[i];
    categoriesList.appendChild(cat);

    let box = document.createElement('input');
    box.type = 'checkbox';
    box.id = data[i];
    // box.value = data[i];
    // box.style = "visibility: hidden
    cat.appendChild(box);
  }
};

function changeCategory(event) {
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

function getRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
};

function getCategoryJoke(lst) {
  fetch(`https://api.chucknorris.io/jokes/random?category=${lst}`)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
};

function getSearchJoke(txt) {
  fetch(`https://api.chucknorris.io/jokes/search?query=${txt}`)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
}

function formSubmit(event) {
  event.preventDefault();

  let inputs = [];
  let checks = [];
  let reqCategories = [];

  for (input of event.target.getElementsByTagName('input')) { //tegNAme
    // console.log(input.id, input.checked);
    inputs.push(input.id);
    checks.push(input.checked);
  }

  if (checks[0]) {
    getRandomJoke();
  } else if (checks[1]) {
    for (var i = 2; i < (inputs.length - 1); i++) {
      if (checks[i]) {
        reqCategories.push(inputs[i]);
      }
    }
    (reqCategories.length) ? getCategoryJoke(reqCategories) :
      joke.innerHTML = '<em>Please select any categories or switch to random joke</em>';
  }
};
