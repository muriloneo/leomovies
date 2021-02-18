import { WATCH_LATER_ACTION_TYPES } from "../actions/watchLaterActions";

const initialState = {
  watchlater: []
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case WATCH_LATER_ACTION_TYPES.TOGGLE_WATCH_LATER:

      const wlIndex = state.watchlater.findIndex(f => f && f.id === action.movie.id);

      if (wlIndex === -1) {
        return {
          ...state,
          watchlater: [...state.watchlater, action.movie]
        }
      } else {
        const newWatchlater = state.watchlater.filter(f => f && f.id !== action.movie.id);
        return {
          ...state,
          watchlater: newWatchlater
        }
      }
    case WATCH_LATER_ACTION_TYPES.CLEAR_WATCH_LATER:
      return {
        ...initialState
      }
    default: return state;
  }
}