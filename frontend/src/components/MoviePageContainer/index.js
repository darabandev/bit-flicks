import { getMovie } from "../../store/movies";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MovieDisplay from "../MovieDisplay";
import ThoughtDisplay from "../ThoughtDisplay";

const MoviePageContainer = () => {
  const dispatch = useDispatch();
  const { imdbId } = useParams();
  const movie = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(getMovie(imdbId));
  }, [dispatch, imdbId]);

  return (
    <>
      <MovieDisplay movie={movie} />
      <ThoughtDisplay />
    </>
  );
};

export default MoviePageContainer;
