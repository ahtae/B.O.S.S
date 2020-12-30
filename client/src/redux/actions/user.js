import axios from 'axios';
import { getUser } from '../actionCreators/user';
import { setErrors } from '../actionCreators/error';
import * as RootNavigation from '../../utils/RootNavigation';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const me = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.get('http://localhost:3001/auth/me');

    dispatch(getUser(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const authsignup = ({
  firstName,
  lastName,
  email,
  password,
  isBusinessOwner,
  companyName,
  companyAddress,
  businessId
}) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post(
      'http://localhost:3001/auth/signup',
      {
        firstName,
        lastName,
        email,
        password,
        isBusinessOwner,
        companyName,
        companyAddress
      },
      { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
    );

    dispatch(getUser(response.data));

    if (businessId) {
      RootNavigation.navigate('Business', { id: businessId });
    } else {
      RootNavigation.navigate('Options');
    }
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const authlogin = (email, password, businessId) => async (dispatch) => {
  dispatch(setLoading());
  let response;

  try {
    response = await axios.post(
      'http://localhost:3001/auth/login',
      {
        email,
        password
      },
      { withCredentials: true }
    );

    dispatch(getUser(response.data));

    if (businessId) {
      RootNavigation.navigate('Business', { id: businessId });
    } else {
      RootNavigation.navigate('Options');
    }
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
