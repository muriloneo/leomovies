export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

export const getGenreName = (genres, genre_id) => {
  if(!genres) return;
  return genres.find(g => g.id === genre_id);
}

export const checkIsFavorite = (favorites, movie_id) => {
  return favorites.find(f => f && f.id === movie_id);
}

export const checkIsWatchLater = (watchlater, movie_id) => {
  return watchlater.find(w => w && w.id === movie_id);
}