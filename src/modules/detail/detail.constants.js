const FETCH_MARVEL_HERO_START = 'FETCH_MARVEL_HERO_LIST_START';
const FETCH_MARVEL_HERO_SUCCESS = 'FETCH_MARVEL_HERO_LIST_SUCCESS';
const FETCH_MARVEL_HERO_FAIL = 'FETCH_MARVEL_HERO_LIST_FAIL';

const actions = {
  FETCH_MARVEL_HERO_START,
  FETCH_MARVEL_HERO_SUCCESS,
  FETCH_MARVEL_HERO_FAIL,
};
const status = {
  notStart: 1,
  progress: 2,
  success: 3,
  fail: 4,
};

export { actions, status };
