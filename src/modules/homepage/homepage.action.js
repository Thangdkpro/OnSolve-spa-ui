import axios from 'axios';
import { MARVEL_API } from '../../configs';
import { actions } from './homepage.constants';

const {
  FETCH_MARVEL_HERO_LIST_START,
  FETCH_MARVEL_HERO_LIST_SUCCESS,
  FETCH_MARVEL_HERO_LIST_FAIL,
} = actions;

const fetchMarvelHeroList = (dispatch) => {
  return async () => {
    dispatch({ type: FETCH_MARVEL_HERO_LIST_START });
    try {
      // will write function to genate hash later :D
      const params = {
        ts: 1,
        apikey: 'd9959b7710d1e31ea96661496ce5fdef',
        hash: 'f5df0686e50a8c0da56f2ad161f3d172',

      };
      const response = await axios.get(`${MARVEL_API}`, { params });
      const result = await response.data;
      if (result.error === 409) {
        dispatch({ type: FETCH_MARVEL_HERO_LIST_FAIL });
      } else {
        dispatch({ type: FETCH_MARVEL_HERO_LIST_SUCCESS, result });
      }
    } catch (parseJSONError) {
      dispatch({ type: FETCH_MARVEL_HERO_LIST_FAIL });
    }
  };
};

export {
  fetchMarvelHeroList,
};
