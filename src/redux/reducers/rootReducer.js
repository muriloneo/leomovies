import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import genreReducer from "./genreReducer";
import favoritesReducer from "./favoritesReducer";
import watchLaterReducer from "./watchLaterReducer";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  genres: persistReducer(
    {
      key: "genres",
      storage,
      debug: true,
    },
    genreReducer
  ),
  favorites: persistReducer(
    {
      key: "favorites",
      storage,
      debug: true,
    },
    favoritesReducer
  ),
  watchlater: persistReducer(
    {
      key: "watchlater",
      storage,
      debug: true,
    },
    watchLaterReducer
  ),
});