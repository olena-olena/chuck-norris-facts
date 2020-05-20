const urlRandom = 'https://api.chucknorris.io/jokes/random';
const urlByCategory = 'https://api.chucknorris.io/jokes/random?category={category}';
const urlCategories = 'https://api.chucknorris.io/jokes/categories';
const urlByText = 'https://api.chucknorris.io/jokes/search?query={query}';

const jokeButton = document.querySelector('button');
const joke = document.querySelector('p');

jokeButton.onclick = () => {
  fetch(urlRandom)
    .then(response => response.json())
    .then(data => {joke.innerHTML = data.value})
}
