import axios from 'axios';

const GET_BUSINESSES = 'GET_BUSINESSES';

const REMOVE_BUSINESS = 'REMOVE_BUSINESS';

const UPDATE_BUSINESS = 'UPDATE_BUSINESS';

const CREATE_BUSINESS = 'CREATE_BUSINESS';

const getBusinesses = (businesses) => ({
  type: GET_BUSINESSES,
  businesses
});

const createBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});

const removeBusiness = (id) => ({
  type: REMOVE_BUSINESS,
  id
});

const updateBusiness = (id, business) => ({
  type: UPDATE_BUSINESS,
  id,
  business
});

const defaultBusinesses = [];

export const fetchBusinessesFromServer = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://localhost:8000.com//api/businesses`
    );
    dispatch(getBusinesses(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeBusinessFromServer = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://localhost:8000.com/api/businesses/${id}`);
    dispatch(removeBusiness(id));
  } catch (err) {
    console.log(err);
  }
};

export const updateBusinessFromServer = (id, business) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://localhost:8000.com/api/businesses/${id}`,
      business
    );
    dispatch(updateBusiness(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const createBusinessFromServer = (id, business) => async (dispatch) => {
  try {
    const response = await axios.post(
      'https://localhost:8000.com/api/businesses/',
      business
    );
    dispatch(createBusiness(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default function businessesReducer(state = defaultBusinesses, action) {
  switch (action.type) {
    case GET_BUSINESSES:
      return action.businesses;
    case UPDATE_BUSINESS:
      return state.map((business) =>
        business.id === action.id ? action.business : business
      );
    case REMOVE_BUSINESS:
      return state.filter((business) => business.id !== action.id);
    case CREATE_BUSINESS:
      return [...state, action.business];
    default:
      return state;
  }
}
