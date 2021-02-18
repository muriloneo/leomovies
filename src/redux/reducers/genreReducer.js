import { GENRE_ACTION_TYPES } from "../actions/genreActions";

const initialState = {
  loading: false,
  genres: undefined
}

export default function genreReducer(state = {...initialState}, action) {
  switch (action.type) {
    case GENRE_ACTION_TYPES.SET_GENRE:
      return {
        ...state,
        genres: action.genres
      }
    case GENRE_ACTION_TYPES.START_LOAD_GENRE:
      return {
        ...state,
        loading: true
      }
    case GENRE_ACTION_TYPES.FINISH_LOAD_GENRE:
      if (action.error) {
        return { ...initialState };
      } else {
        return {
          ...state,
          loading: false,
          genres: action.genres
        }
      }
    case GENRE_ACTION_TYPES.CLEAR_GENRE:
      return {
        ...initialState
      }
    default: return state;
  }
}