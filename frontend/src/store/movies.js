import { fetch } from "./csrf";

const SET_MOVIE = "movies/SET_MOVIE";

const setMovie = movie => {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
};

export const getMovie = imdbId => async dispatch => {
  const { data } = await fetch(`/movies/${imdbId}`);

  dispatch(setMovie(data));
};

const initialState = {};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
