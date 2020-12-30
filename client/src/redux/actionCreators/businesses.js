import {
  GET_BUSINESSES,
  CREATE_BUSINESS,
  REMOVE_BUSINESS,
  UPDATE_BUSINESS
} from '../actionTypes/businesses';

export const getBusinesses = (businesses) => ({
  type: GET_BUSINESSES,
  businesses
});

export const createBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});

export const removeBusiness = (id) => ({
  type: REMOVE_BUSINESS,
  id
});

export const updateBusiness = (id, business) => ({
  type: UPDATE_BUSINESS,
  id,
  business
});
