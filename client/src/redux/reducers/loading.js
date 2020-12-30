import { SET_LOADING, REMOVE_LOADING } from '../actionTypes/loading';

const initialState = false;

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return true;
    case REMOVE_LOADING:
      return false;
    default:
      return state;
  }
}
