import MovieService from "../../services/MovieService";

export const GENRE_ACTION_TYPES = {
  START_LOAD_GENRE: 'START_LOAD_GENRE',
  FINISH_LOAD_GENRE: 'FINISH_LOAD_GENRE',
  SET_GENRE: 'SET_GENRE',
  CLEAR_GENRE: 'CLEAR_GENRE'
}

export function loadGenres() {
  return async dispatch => {
    dispatch({ type: GENRE_ACTION_TYPES.START_LOAD_GENRE });
    try {
      const { genres } = await MovieService.listGenre();
      dispatch({ type: GENRE_ACTION_TYPES.FINISH_LOAD_GENRE, genres });
    } catch (error) {
      dispatch({ type: GENRE_ACTION_TYPES.FINISH_LOAD_GENRE, error });
    }
  }
}

export function setGenre(genre) {
  return { type: GENRE_ACTION_TYPES.SET_GENRE, genre }
}

export function clear() {
  return { type: GENRE_ACTION_TYPES.CLEAR_GENRE }
}
