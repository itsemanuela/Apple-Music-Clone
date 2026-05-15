import {
  SET_NUOVE_USCITE,
  SET_ALTRO_SCOPRIRE,
  SET_LOADING,
  SET_ERROR,
  TOGGLE_SIDEBAR,
} from "./type";

export const toggleSidebarAction = () => ({
  type: TOGGLE_SIDEBAR,
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
