import { UPLOAD_PHOTO, REMOVE_PHOTO } from '../actionTypes/photo';

const initialPhoto = null;

export default function photoReducer(state = initialPhoto, action) {
  switch (action.type) {
    case UPLOAD_PHOTO:
      return action.photo;
    case REMOVE_PHOTO:
      return null;
    default:
      return state;
  }
}
