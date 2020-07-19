import axios from 'axios';

const GET_BUSINESS = 'GET_BUSINESS';

const getBusiness = (business) => ({
  type: GET_BUSINESS,
  business
});

const defaultBusiness = {};

export const fetchBusinessFromServer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://hackerdelta-capstone.herokuapp.com/api/businesses/${id}`
    );
    dispatch(getBusiness(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default function businessReducer(state = defaultBusiness, action) {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business;
    default:
      return state;
  }
}
