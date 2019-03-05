import { createSelector } from 'reselect';
import { get } from 'lodash';

const detailSelector = createSelector(
  (state) => { return get(state, 'detail'); },
  (result) => { return result; },
);

export { detailSelector };
