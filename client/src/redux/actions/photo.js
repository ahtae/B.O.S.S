import axios from 'axios';
import { createCommentFromServer } from '../actions/comments';
import { setErrors } from '../actionCreators/error';
import { setLoading, removeLoading } from '../actionCreators/loading';

export const uploadPhotoToTheServer = (
  formData,
  businessId,
  commentData
) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const { userId, title, comment, stars } = commentData;

    const response = await axios.post(
      `http://localhost:3001/api/comments/upload`,
      formData
    );

    dispatch(
      createCommentFromServer(businessId, {
        businessId,
        userId,
        title,
        comment,
        stars,
        photo: response.data
      })
    );
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }

  dispatch(removeLoading());
};
