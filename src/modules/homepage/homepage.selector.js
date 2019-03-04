import { createSelector } from 'reselect';
import { get } from 'lodash';

const homepageSelector = createSelector(
  (state) => { return get(state, 'homepage'); },
  (result) => { return result; },
);

export { homepageSelector };
