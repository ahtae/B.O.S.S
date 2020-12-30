import axios from 'axios';
import { getOwner } from '../actionCreators/owner';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const fetchOwnerFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.get(
      `http://localhost:3001/api/users/owner/${id}`
    );

    dispatch(getOwner(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
