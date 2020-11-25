import axios from 'axios';

const GET_OWNER = 'GET_OWNER';

const getOwner = (owner) => ({
  type: GET_OWNER,
  owner
});

const defaultOwner = {};

export const fetchOwnerFromServer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://localhost:8000.com/api/users/owner/${id}`
    );
    dispatch(getOwner(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default function ownerReducer(state = defaultOwner, action) {
  switch (action.type) {
    case GET_OWNER:
      return action.owner;
    default:
      return state;
  }
}
