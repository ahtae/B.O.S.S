import { SET_LOADING, REMOVE_LOADING } from '../actionTypes/loading';

export const setLoading = (error) => ({
  type: SET_LOADING,
  error
});

export const removeLoading = () => ({
  type: REMOVE_LOADING
});
