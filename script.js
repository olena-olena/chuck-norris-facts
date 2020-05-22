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
    cat.innerHTML = data[i];

    let box = document.createElement('input');
    box.type = 'checkbox';
    box.id = data[i];
    // box.value = data[i];
    // box.style = "visibility: hidden

    categoriesList.appendChild(cat);
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
    .then(data => {
      if (data.total) {
        let index = Math.floor(Math.random()*data.total);
        joke.innerHTML = data.result[index].value;
      } else {
        getRandomJoke();
      }
    })
}

function formSubmit(event) {
  event.preventDefault();

  // console.log(event);

  let inputs = [];
  let checks = [];
  let reqCategories = [];

  for (input of event.target.getElementsByTagName('input')) {
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
      joke.innerHTML = '<em>Please select some categories or switch to random joke</em>';
    }

  } else if (checks[checks.length-3]) {
    if (document.getElementById('search-field').value) {
      getSearchJoke(document.getElementById('search-field').value);
    } else {
      joke.innerHTML = '<em>Please provide text to search or switch to random joke</em>';
    }
  }
};
