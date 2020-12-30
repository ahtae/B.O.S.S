import { GET_OWNER } from '../actionTypes/owner';

export const getOwner = (owner) => ({
  type: GET_OWNER,
  owner
});
