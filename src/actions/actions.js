import { LOADING_FETCH, LOAD_CHARACTERS, DISPLAY_MORE_INFOS, CHANGE_CHARACTER_ID, CURRENT_CHARACTER_ID } from "./constActions";

export const setLoading = (payload) => {
    return {
      type: LOADING_FETCH,
      payload
    };
  };

  export const setLoadCharacters = (payload) => {
    return {
      type: LOAD_CHARACTERS,
      payload
    };
  };

  export const setDisplayMoreInfos = (payload) => {
    return {
      type: DISPLAY_MORE_INFOS,
      payload
    };
  };

  export const setChangeCharacterId = (payload) => {
    return {
      type: CHANGE_CHARACTER_ID,
      payload
    };
  };
