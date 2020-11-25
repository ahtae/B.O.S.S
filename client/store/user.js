import axios from 'axios';
import { Actions } from 'react-native-router-flux';

const GET_USER = 'GET_USER';

const initialState = {};

const getUser = (user) => ({ type: GET_USER, user });

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get('https://localhost:8000.com/auth/me');
    dispatch(getUser(res.data || initialState));
  } catch (err) {
    console.log(err);
  }
};
export const authsignup = (firstName, lastName, email, password) => async (
  dispatch
) => {
  let response;

  try {
    response = await axios.post('https://localhost:8000.com/auth/signup', {
      firstName,
      lastName,
      email,
      password
    });
    Actions.businesses();
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(response.data));
  } catch (dispatchOrHistoryErr) {
    console.log(dispatchOrHistoryErr);
  }
};

export const authlogin = (email, password) => async (dispatch) => {
  let response;
  try {
    response = await axios.post('https://localhost:8000.com/auth/login', {
      email,
      password
    });
    Actions.businesses();
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(response.data));
  } catch (dispatchOrHistoryErr) {
    console.log(dispatchOrHistoryErr);
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
