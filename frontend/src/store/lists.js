import { fetch } from "./csrf";

const GET_LISTS = "lists/GET_LISTS";
const NEW_LIST = "lists/NEW_LIST";
const DELETE_LIST = "lists/DELETE_LIST";

const setLists = lists => {
  return {
    type: GET_LISTS,
    payload: lists,
  };
};

const newList = lists => {
  return {
    type: NEW_LIST,
    payload: lists,
  };
};

const deleteList = lists => {
  return {
    type: DELETE_LIST,
    payload: lists,
  };
};

export const getLists = id => async dispatch => {
  const response = await fetch(`/lists/${id}`);

  dispatch(setLists(response.data));
};

export const createNewList = (userId, name) => async dispatch => {
  const response = await fetch(`/lists/new`, {
    method: "POST",
    body: JSON.stringify({ userId, name }),
  });

  dispatch(newList(response.data));
};

export const deleteOneList = (userId, listId) => async dispatch => {
  const url = `/lists/${userId}/${listId}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  dispatch(deleteList(response.data));
};

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return action.payload;
    case NEW_LIST:
      return action.payload;
    case DELETE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
