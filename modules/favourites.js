export function addToFavourites(event) {

  let heart = event.target;
  heart.classList.toggle('fav-icon');

  console.log('favourite changed');
};
