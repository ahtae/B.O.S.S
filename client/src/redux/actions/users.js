import {
  getUsers,
  removeUser,
  updateUser,
  createUser
} from '../actionCreators/users';
import axios from 'axios';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const fetchUsersFromServer = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.get('http://localhost:3001/api/users');

    dispatch(getUsers(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const removeUserFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    await axios.delete(`http://localhost:3001/api/users/${id}`);

    dispatch(removeUser(id));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const updateUserFromServer = (id, user) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.put(
      `http://localhost:3001/api/users/${id}`,
      user
    );

    dispatch(updateUser(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const createUserFromServer = (id, user) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post('http://localhost:3001/api/users/', user);

    dispatch(createUser(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
