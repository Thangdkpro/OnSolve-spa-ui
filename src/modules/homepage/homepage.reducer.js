import { actions, status } from './homepage.constants';

const {
  FETCH_MARVEL_HERO_LIST_START,
  FETCH_MARVEL_HERO_LIST_SUCCESS,
  FETCH_MARVEL_HERO_LIST_FAIL,
} = actions;

const INITIAL_STATE = {
  marvelHeroList: [],
  fetchStatus: status.notStart,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MARVEL_HERO_LIST_START:
      return {
        ...state,
        fetchStatus: status.progress,
      };
    case FETCH_MARVEL_HERO_LIST_SUCCESS:
      return {
        ...state,
        marvelHeroList: action.result,
        fetchStatus: status.success,
      };
    case FETCH_MARVEL_HERO_LIST_FAIL:
      return {
        ...state,
        fetchStatus: status.fail,
      };
    default:
      return state;
  }
};
