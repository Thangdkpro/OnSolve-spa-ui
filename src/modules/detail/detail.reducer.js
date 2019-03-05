import { actions, status } from './detail.constants';

const {
  FETCH_MARVEL_HERO_START,
  FETCH_MARVEL_HERO_SUCCESS,
  FETCH_MARVEL_HERO_FAIL,
} = actions;

const INITIAL_STATE = {
  marvelHero: [],
  fetchStatus: status.notStart,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MARVEL_HERO_START:
      return {
        ...state,
        fetchStatus: status.progress,
      };
    case FETCH_MARVEL_HERO_SUCCESS:
      return {
        ...state,
        marvelHero: action.result,
        fetchStatus: status.success,
      };
    case FETCH_MARVEL_HERO_FAIL:
      return {
        ...state,
        fetchStatus: status.fail,
      };
    default:
      return state;
  }
};
