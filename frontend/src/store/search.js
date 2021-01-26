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

  dispatch(setResults(response));
  return response;
};

const initialState = { search: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_RESULTS:
      newState = Object.assign({}, state);
      newState.searchResults = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
