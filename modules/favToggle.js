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
};

function removeFavourite(id) {
  localStorage.removeItem(id);

  // remove from favourites
  document.getElementById(id).remove();

  //remove from get results
  let candidats = document.getElementsByClassName('joke');
  for (let candidat of candidats) {
    if (candidat.childNodes[1].lastChild.innerHTML == id) {
      candidat.remove();
    }
  }
};

// localStorage.clear();
