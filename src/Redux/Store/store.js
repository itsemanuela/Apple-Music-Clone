import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicReducer from "../Reducers/musicReducer";
import playerReducer from "../Reducers/playerReducer";
import favoritesReducer from "../Reducers/favoriteReducer";

const mainReducer = combineReducers({
  music: musicReducer,
  player: playerReducer,
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
