import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../Actions/type";

const initialState = {
  list: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,

        list: state.list.filter((song) => song.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
