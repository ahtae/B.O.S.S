import { SET_ERRORS, REMOVE_ERRORS } from '../actionTypes/error';

export const setErrors = (error) => ({
  type: SET_ERRORS,
  error
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});
