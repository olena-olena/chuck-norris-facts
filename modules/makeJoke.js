import { jokePlace } from '../main.js';

export function makeJoke(data) {

  if (data.categories.length > 1) {alert('attention: multiple categories');}

  let joke = document.createElement('article');
  joke.classList = 'article'
  joke = jokePlace.insertBefore(joke, jokePlace.firstChild);

  let link = document.createElement('address');
  link.innerHTML = 'ID: ';
  let a = document.createElement('a');
  a.href = data.url;
  a.target = '_blank';
  a.innerHTML = data.id;
  link.appendChild(a);

  let p = document.createElement('p');
  p.innerHTML = data.value;

  let upd = document.createElement('time');
  let hours = Math.floor((new Date - new Date(data.created_at))/3600000);
  upd.innerHTML = `Last update: ${hours} hours ago`;

  let cats = document.createElement('div');
  cats.innerHTML = data.categories;

  joke.appendChild(link);
  joke.appendChild(p);
  joke.appendChild(upd);
  joke.appendChild(cats);
}
