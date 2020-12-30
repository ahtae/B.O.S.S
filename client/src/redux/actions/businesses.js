import axios from 'axios';
import {
  getBusinesses,
  createBusiness,
  updateBusiness,
  removeBusiness
} from '../actionCreators/businesses';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const fetchBusinessesFromServer = (city, category) => async (
  dispatch
) => {
  dispatch(setLoading());

  try {
    let response;

    if (category === 'All Businesses') {
      response = await axios.get(
        `http://localhost:3001/api/businesses?city=${city}`
      );
    } else {
      response = await axios.get(
        `http://localhost:3001/api/businesses?city=${city}&category=${category}`
      );
    }

    dispatch(getBusinesses(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const removeBusinessFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    await axios.delete(`http://localhost:3001/api/businesses/${id}`);

    dispatch(removeBusiness(id));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const updateBusinessFromServer = (id, business) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.put(`/api/businesses/${id}`, business);

    dispatch(updateBusiness(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const createBusinessFromServer = (id, business) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.post(
      'http://localhost:3001/api/businesses/',
      business
    );

    dispatch(createBusiness(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
