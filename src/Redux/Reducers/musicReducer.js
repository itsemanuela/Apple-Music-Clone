import {
  SET_NUOVE_USCITE,
  SET_ALTRO_SCOPRIRE,
  SET_LOADING,
  SET_ERROR,
  TOGGLE_SIDEBAR,
} from "../Actions/type";

const initialState = {
  nuoveUscite: [],
  altroScoprire: [],
  isLoading: false,
  error: null,
  isSidebarOpen: false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUOVE_USCITE:
      return {
        ...state,
        nuoveUscite: action.payload,
      };

    case SET_ALTRO_SCOPRIRE:
      return {
        ...state,
        altroScoprire: action.payload,
      };

    // Gestione caricamento (true/false)
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    // Gestione eventuali errori della fetch
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    // Apre/Chiude la sidebar su mobile
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
};

export default musicReducer;
