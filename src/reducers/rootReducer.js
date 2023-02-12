import { LOADING_FETCH, LOAD_CHARACTERS, DISPLAY_MORE_INFOS, CHANGE_CHARACTER_ID } from "../actions/constActions";

const inititalState = { 
    loading: false, 
    listData: [],
    displayMoreInfos: {
        display: false, 
        characId: null
    },
    characterSeries: [] 
};

const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOADING_FETCH: {
      return { ...state, loading: action.payload };
    }
    case LOAD_CHARACTERS: {
        return { ...state, listData: action.payload };
      }
      case DISPLAY_MORE_INFOS: {
        return { ...state, displayMoreInfos: action.payload };
      }
      case CHANGE_CHARACTER_ID: {
        return { ...state, displayMoreInfos: { ...state.displayMoreInfos, characId: action.payload } };
      }
    default: 
      return state;
  }
};
export default rootReducer;