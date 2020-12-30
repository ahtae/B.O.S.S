import {
  GET_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from '../actionTypes/comments';

const defaultComments = [];

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
