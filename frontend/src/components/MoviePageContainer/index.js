import { getMovie } from "../../store/movies";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MoviePageContainer = () => {
  const dispatch = useDispatch();
  const { imdbId } = useParams();
  const movie = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(getMovie(imdbId));
  }, [dispatch, imdbId]);

  return (
    <>
      <h1>Movie Page</h1>
      <h2>{movie.title}</h2>
      <h2>{movie.year}</h2>
      <h2>{movie.poster}</h2>
      <h2>{movie.runtime}</h2>
      <h2>{movie.genre}</h2>
      <h2>{movie.director}</h2>
      <h2>{movie.actors}</h2>
    </>
  );
};

export default MoviePageContainer;
