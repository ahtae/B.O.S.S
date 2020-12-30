import {
  GET_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from '../actionTypes/comments';

export const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments
});

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const removeComment = (id) => ({ type: REMOVE_COMMENT, id });

export const updateComment = (id, comment) => ({
  type: UPDATE_COMMENT,
  id,
  comment
});
