export const FAVORITES_ACTION_TYPES = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  CLEAR_FAVORITES: 'CLEAR_FAVORITES'
}

export function toggleFavorite(movie) {
  return { type: FAVORITES_ACTION_TYPES.TOGGLE_FAVORITE, movie }
}

export function clear() {
  return { type: FAVORITES_ACTION_TYPES.CLEAR }
}
