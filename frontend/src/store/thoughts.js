import { fetch } from "./csrf";

const GET_THOUGHTS = "thoughts/GET_THOUGHTS";
const NEW_THOUGHT = "thoughts/NEW_THOUGHT";

const getThoughts = thoughts => {
  return {
    type: GET_THOUGHTS,
    payload: thoughts,
  };
};

const newThought = thoughts => {
  return {
    type: NEW_THOUGHT,
    payload: thoughts,
  };
};

export const getAllThoughts = imdbId => async dispatch => {
  const response = await fetch(`/thoughts/${imdbId}`);

  dispatch(getThoughts(response.data));
};

export const createNewThought = (imdbId, userId, review) => async dispatch => {
  const response = await fetch(`/thoughts/new/${imdbId}`, {
    method: "POST",
    body: JSON.stringify({ userId, review }),
  });

  dispatch(newThought(response.data));
};

const initialState = [];

const thoughtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THOUGHTS:
      return action.payload;
    case NEW_THOUGHT:
      return action.payload;
    default:
      return state;
  }
};

export default thoughtReducer;
