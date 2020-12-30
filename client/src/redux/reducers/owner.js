import { GET_OWNER } from '../actionTypes/owner';

const defaultOwner = {};

export default function ownerReducer(state = defaultOwner, action) {
  switch (action.type) {
    case GET_OWNER:
      return action.owner;
    default:
      return state;
  }
}
