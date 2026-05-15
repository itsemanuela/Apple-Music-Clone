import { configureStore, combineReducers } from "@reduxjs/toolkit";

import musicReducer from "../reducers/musicReducer";

const mainReducer = combineReducers({
  music: musicReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
