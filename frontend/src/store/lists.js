import { fetch } from "./csrf";

const GET_LISTS = "lists/GET_LISTS";
const GET_ONE_LIST = "lists/GET_ONE_LIST";

const setLists = lists => {
  return {
    type: GET_LISTS,
    payload: lists,
  };
};

const getOneList = list => {
  return {
    type: GET_ONE_LIST,
    payload: list,
  };
};

export const getLists = id => async dispatch => {
  const response = await fetch(`/lists/${id}`);

  dispatch(setLists(response.data));
};

export const getOneListFromDb = listId => async dispatch => {
  const response = await fetch(`/lists/single/${listId}`);

  dispatch(getOneList([response.data]));
};

export const createNewList = (userId, name) => async dispatch => {
  const response = await fetch(`/lists/new`, {
    method: "POST",
    body: JSON.stringify({ userId, name }),
  });

  dispatch(setLists(response.data));
};

export const renameList = (listId, userId, name) => async dispatch => {
  const response = await fetch(`/lists/edit/${listId}`, {
    method: "PUT",
    body: JSON.stringify({ name, userId }),
  });

  dispatch(setLists(response.data));
};

export const deleteOneList = (userId, listId) => async dispatch => {
  const url = `/lists/${userId}/${listId}`;

  const response = await fetch(url, {
    method: "DELETE",
  });

  dispatch(setLists(response.data));
};

export const addMovieToList = (userId, listId, imdbId) => async dispatch => {
  const url = `/lists/${userId}/${listId}/${imdbId}`;
  const response = await fetch(url, {
    method: "POST",
  });

  dispatch(setLists(response.data));
};

export const deleteMovieFromList = (userId, listId, imdbId) => async dispatch => {
  const url = `/lists/delete/${userId}/${listId}/${imdbId}`;
  const response = await fetch(url, {
    method: "DELETE",
  });

  dispatch(setLists(response.data));
};

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return action.payload;
    case GET_ONE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
