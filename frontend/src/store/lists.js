import { fetch } from "./csrf";

const GET_LISTS = "lists/GET_LISTS";

const setLists = lists => {
  return {
    type: GET_LISTS,
    payload: lists,
  };
};

export const getLists = id => async dispatch => {
  const response = await fetch(`/lists/${id}`);

  dispatch(setLists(response.data));
};

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
