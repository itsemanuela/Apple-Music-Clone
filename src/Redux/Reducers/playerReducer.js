import { SET_CURRENT_SONG, TOGGLE_PLAY, STOP_PLAY } from "../Actions/type";

const initialState = {
  currentSong: null,
  isPlaying: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: true,
      };

    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };

    case STOP_PLAY:
      return {
        ...state,
        isPlaying: false,
        currentSong: null,
      };

    default:
      return state;
  }
};

export default playerReducer;
