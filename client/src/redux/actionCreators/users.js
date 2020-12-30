import {
  GET_USERS,
  CREATE_USER,
  REMOVE_USER,
  UPDATE_USER
} from '../actionTypes/users';

export const getUsers = (users) => ({
  type: GET_USERS,
  users
});

export const createUser = (user) => ({
  type: CREATE_USER,
  user
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  id
});

export const updateUser = (id, user) => ({
  type: UPDATE_USER,
  id,
  user
});
