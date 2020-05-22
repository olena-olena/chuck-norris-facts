const categoriesPlace = document.getElementById('categories-list');    // change to querySelector
const searchField = document.getElementById('search-field');          // change to querySelector

function makeCategoriesList(data) {
  categoriesPlace.innerHTML = '';
  for (const category of data) {
    let cat = document.createElement('label');
    cat.innerHTML = category;

    let box = document.createElement('input');
    box.type = 'checkbox';
    box.id = category;
    // box.value = data[i];
    // box.style = "visibility: hidden

    categoriesPlace.appendChild(cat);
    cat.appendChild(box);
  }
};

function changeJokeType(event) {
  let prev = document.getElementsByClassName('current')[0];
  let next = event.target;

  prev.classList.toggle('current');
  next.classList.toggle('current');

  if (prev.id == 'category' || next.id == 'category') {
    categoriesPlace.classList.toggle('hidden');
  }
  if (prev.id == 'search' || next.id == 'search') {
    searchField.classList.toggle('hidden');
  }
}

export {
  makeCategoriesList,
  changeJokeType
};
