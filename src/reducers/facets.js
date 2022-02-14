import { FETCH_FACETS } from '../constants/actionTypes';

export default (facets = [], action) => {
  switch (action.type) {
    case FETCH_FACETS:
      return action.payload;
    default:
      return facets;
  }
};
