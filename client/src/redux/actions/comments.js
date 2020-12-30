import axios from 'axios';
import {
  getComments,
  createComment,
  removeComment,
  updateComment
} from '../actionCreators/comments';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const fetchCommentsFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.get(
      `http://localhost:3001/api/businesses/${id}/comments`
    );

    dispatch(getComments(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const createCommentFromServer = (businessId, comment) => async (
  dispatch
) => {
  dispatch(setLoading());

  try {
    const response = await axios.post(
      `http://localhost:3001/api/businesses/${businessId}/comments`,
      comment
    );

    dispatch(createComment(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const removeCommentFromServer = (id) => async (dispatch) => {
  dispatch(setLoading());

  try {
    await axios.delete(`http://localhost:3001/api/comments/${id}`);

    dispatch(removeComment(id));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};

export const updateCommentFromServer = (id, comment) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const response = await axios.put(
      `http://localhost:3001/api/comments/${id}`,
      comment
    );

    dispatch(updateComment(response.data));
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
