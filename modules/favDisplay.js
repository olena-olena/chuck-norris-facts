import { favPlace } from '../main.js';
import { toggleFavourites } from './favToggle.js';

export function makeFavJoke(data) {

  if (favPlace.innerHTML.includes('style')) {
    favPlace.innerHTML = '';
  };

  let joke = document.createElement('article');
  joke.classList = 'joke fav'
  joke = favPlace.insertBefore(joke, favPlace.firstChild);

  let heart = document.createElement('button');
  heart.type = "button";
  heart.title = "favourites";
  heart.classList = 'fav-icon';
  heart.addEventListener('click', toggleFavourites);

  let link = document.createElement('address');
  link.classList = 'joke-link';
  link.innerHTML = 'ID: ';
  let a = document.createElement('a');
  a.href = data.url;
  a.target = '_blank';
  a.innerHTML = data.id;
  link.appendChild(a);

  let p = document.createElement('p');
  p.classList = 'joke-text';
  p.innerHTML = data.value;

  let upd = document.createElement('time');
  let hours = Math.floor((new Date - new Date(data.updated_at))/3600000);
  upd.classList = 'joke-upd';
  upd.innerHTML = `Last update: ${hours} hours ago`;

  joke.appendChild(heart);
  joke.appendChild(link);
  joke.appendChild(p);
  joke.appendChild(upd);

};
