import { GET_BUSINESS, UNMOUNT_BUSINESS } from '../actionTypes/business';

const defaultBusiness = {};

export default function businessReducer(state = defaultBusiness, action) {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business;
    case UNMOUNT_BUSINESS:
      return {};
    default:
      return state;
  }
}
