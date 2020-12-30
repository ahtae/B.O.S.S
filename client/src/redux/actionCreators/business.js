import { GET_BUSINESS, UNMOUNT_BUSINESS } from '../actionTypes/business';

export const getBusiness = (business) => ({
  type: GET_BUSINESS,
  business
});

export const unmountBusiness = () => ({
  type: UNMOUNT_BUSINESS
});
