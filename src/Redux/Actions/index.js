import {
  SET_NUOVE_USCITE,
  SET_ALTRO_SCOPRIRE,
  SET_LOADING,
  SET_ERROR,
  TOGGLE_SIDEBAR,
  SET_CURRENT_SONG,
  TOGGLE_PLAY,
  STOP_PLAY,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./type";

export const toggleSidebarAction = () => ({
  type: TOGGLE_SIDEBAR,
});

export const setCurrentSongAction = (canzone) => ({
  type: SET_CURRENT_SONG,
  payload: canzone,
});

export const togglePlayAction = () => ({
  type: TOGGLE_PLAY,
});

export const stopPlayAction = () => ({
  type: STOP_PLAY,
});

export const addToFavoritesAction = (song) => ({
  type: ADD_TO_FAVORITES,
  payload: song,
});

export const removeFromFavoritesAction = (songId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: songId,
});

export const fetchSongsAction = (query, category) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore fetch");
        }
      })
      .then((body) => {
        const songs = body.data.slice(0, 5);

        if (category === "nuoveUscite") {
          dispatch({ type: SET_NUOVE_USCITE, payload: songs });
        } else {
          dispatch({ type: SET_ALTRO_SCOPRIRE, payload: songs });
        }

        dispatch({ type: SET_LOADING, payload: false });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err.message });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
};
