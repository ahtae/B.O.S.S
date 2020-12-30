import {
  GET_USERS,
  UPDATE_USER,
  REMOVE_USER,
  CREATE_USER
} from '../actionCreators/users';

const defaultUsers = [];

export default function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map((user) => (user.id === action.id ? action.user : user));
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.id);
    case CREATE_USER:
      return [...state, action.user];
    default:
      return state;
  }
}
