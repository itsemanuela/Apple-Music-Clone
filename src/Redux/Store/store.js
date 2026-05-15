import { configureStore, combineReducers } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import playerReducer from "../reducers/playerReducer";

const mainReducer = combineReducers({
  music: musicReducer,
  player: playerReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
