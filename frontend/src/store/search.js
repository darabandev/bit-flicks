import { fetch } from "./csrf";

const SET_RESULTS = "search/SET_RESULTS";

const setResults = results => {
  return {
    type: SET_RESULTS,
    payload: results,
  };
};

export const trySearch = term => async dispatch => {
  const response = await fetch(`/search/${term}`);
  const results = response.data.Search;

  dispatch(setResults(results));
};

const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
