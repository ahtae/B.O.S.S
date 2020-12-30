import { UPLOAD_PHOTO, REMOVE_PHOTO } from '../actionTypes/photo';

export const uploadPhoto = (photo) => ({
  type: UPLOAD_PHOTO,
  photo
});

export const removePhoto = {
  type: REMOVE_PHOTO
};
