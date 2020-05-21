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
      let cat = document.createElement('label');
      cat.for = data[i];
      cat.innerHTML = data[i];
      categoriesList.appendChild(cat);

      let box = document.createElement('input');
      box.type = 'checkbox';
      box.id = data[i];
      box.value = data[i];
      // box.style = "visibility: hidden
      cat.appendChild(box);

    }
  });

form.addEventListener('submit', formSubmit);
radioCategory.addEventListener('change', changeCategory);
radioRandom.addEventListener('change', changeCategory);


function changeCategory(event) {
  // if (event.target.id == 'random') {}
  categoriesList.classList.toggle('hidden');
}

function getRandomJoke(url=urlRandom) {
  fetch(url)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
};

function getCategoryJoke(lst) {
  console.log(lst);
}



function formSubmit(event) {
  event.preventDefault();

  let inputs = [];
  let checks = [];
  let reqCategories = [];

  for (input of event.target.querySelectorAll('input')) { //tegNAme
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
    getCategoryJoke(reqCategories);
  }
};
