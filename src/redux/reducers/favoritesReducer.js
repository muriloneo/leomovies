import { FAVORITES_ACTION_TYPES } from "../actions/favoritesActions";

const initialState = {
  favorites: []
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITES_ACTION_TYPES.TOGGLE_FAVORITE:

      const favIndex = state.favorites.findIndex(f => f && f.id === action.movie.id);

      if (favIndex === -1) {
        return {
          ...state,
          favorites: [...state.favorites, action.movie]
        }
      } else {
        const newFavorites = state.favorites.filter(f => f && f.id !== action.movie.id);
        return {
          ...state,
          favorites: newFavorites
        }
      }
    case FAVORITES_ACTION_TYPES.CLEAR_FAVORITES:
      return {
        ...initialState
      }
    default: return state;
  }
}