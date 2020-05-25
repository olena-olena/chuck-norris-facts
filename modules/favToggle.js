import { getJokeByLink } from './jokeGet.js';

export function toggleFavourites(event) {

  let heart = event.target;
  let adress = heart.parentNode.childNodes[1];

  let link = adress.childNodes[1].href;
  let id = adress.childNodes[1].innerHTML;

  heart.classList == 'fav-icon' ? removeFavourite(id) : addFavourite(id, link);
  heart.classList.toggle('fav-icon');
};

function addFavourite(id, link) {
  localStorage.setItem(id, link);
  getJokeByLink(link);
  console.log(id, 'added');
};

function removeFavourite(id) {
  localStorage.removeItem(id);
  document.getElementById(id).remove();
};

// localStorage.clear();
