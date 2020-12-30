import { SET_ERRORS, REMOVE_ERRORS } from '../actionTypes/error';

const initialState = '';

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return action.error;
    case REMOVE_ERRORS:
      return initialState;
    default:
      return state;
  }
}
