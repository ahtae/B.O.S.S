import {
  GET_BUSINESSES,
  UPDATE_BUSINESS,
  REMOVE_BUSINESS,
  CREATE_BUSINESS
} from '../actionTypes/businesses';

const defaultBusinesses = [];

export default function businessesReducer(state = defaultBusinesses, action) {
  switch (action.type) {
    case GET_BUSINESSES:
      return action.businesses;
    case UPDATE_BUSINESS:
      return state.map((business) =>
        business.id === action.id ? action.business : business
      );
    case REMOVE_BUSINESS:
      return state.filter((business) => business.id !== action.id);
    case CREATE_BUSINESS:
      return [...state, action.business];
    default:
      return state;
  }
}
