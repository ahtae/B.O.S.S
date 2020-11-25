import axios from 'axios';

const GET_COMMENTS = 'GET_COMMENTS';

const CREATE_COMMENT = 'CREATE_COMMENT';

const REMOVE_COMMENT = 'REMOVE_COMMENT';

const UPDATE_COMMENT = 'UPDATE_COMMENT';

const getComments = (comments) => ({
  type: 'GET_COMMENTS',
  comments
});

const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

const removeComment = (id) => ({ type: 'REMOVE_COMMENT', id });

const updateComment = (id, comment) => ({
  type: 'UPDATE_COMMENT',
  id,
  comment
});

const defaultComments = [];

export const fetchCommentsFromServer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://localhost:8000.com/api/businesses/${id}/comments`
    );
    dispatch(getComments(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const createCommentFromServer = (businessId, comment) => async (
  dispatch
) => {
  try {
    const response = await axios.post(
      `https://localhost:8000.com/api/businesses/${businessId}/comments`,
      comment
    );
    dispatch(createComment(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeCommentFromServer = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://localhost:8000.com/api/comments/${id}`);
    dispatch(removeComment(id));
  } catch (err) {
    console.log(err);
  }
};

export const updateCommentFromServer = (id, comment) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://localhost:8000.com/api/comments/${id}`,
      comment
    );
    dispatch(updateComment(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default function commentsReducer(state = defaultComments, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    case CREATE_COMMENT:
      return [action.comment, ...state];
    case UPDATE_COMMENT:
      return state.map((comment) =>
        comment.id === action.id ? action.comment : comment
      );
    case REMOVE_COMMENT:
      return state.filter((comment) => comment.id !== action.id);
    default:
      return state;
  }
}
