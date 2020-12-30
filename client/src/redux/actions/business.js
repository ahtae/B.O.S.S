import axios from 'axios';
import { getBusiness } from '../actionCreators/business';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const fetchBusinessFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.get(
      `http://localhost:3001/api/businesses/${id}`
    );

    dispatch(getBusiness(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
