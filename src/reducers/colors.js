import { FETCH_COLORS } from '../constants/actionTypes';

export default (state = { colors: null }, action) => {
  switch (action.type) {
    case FETCH_COLORS:
      return action.payload;
    default:
      return state;
  }
};
