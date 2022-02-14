import { FETCH_ALL, FETCH_FACETS, FETCH_COLORS } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getFacets = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_FACETS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getColors = () => async (dispatch) => {
  try {
    const { data } = await api.fetchColors();
    dispatch({ type: FETCH_COLORS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
