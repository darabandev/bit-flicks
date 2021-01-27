import { getMovie } from "../../store/movies";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";

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
      <h2>{movie.Title}</h2>
    </>
  );
};

export default MoviePageContainer;
