import axios from 'axios';

const GET_BUSINESS = 'GET_BUSINESS';
const UNMOUNT_BUSINESS = 'UNMOUNT_BUSINESS';

const getBusiness = (business) => ({
  type: GET_BUSINESS,
  business
});

export const unmountBusiness = () => ({
  type: UNMOUNT_BUSINESS
});

const defaultBusiness = {};

export const fetchBusinessFromServer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://localhost:8000.com/api/businesses/${id}`
    );
    dispatch(getBusiness(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default function businessReducer(state = defaultBusiness, action) {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business;
    case UNMOUNT_BUSINESS:
      return {};
    default:
      return state;
  }
}
