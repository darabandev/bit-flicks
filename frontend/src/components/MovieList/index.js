import { useDispatch, useSelector } from "react-redux";
import { deleteMovieFromList } from "../../store/lists";
import "./MovieList.css";

const MovieList = ({ list }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleDeleteMovieList = (userId, listId, imdbId) => {
    dispatch(deleteMovieFromList(userId, listId, imdbId));
  };

  return (
    <div className="movie-list-container">
      {list.Movies.map(movie => (
        <div className="movie-list-item-container">
          <li className="movie-list-item" key={movie.id}>
            {movie.title} ({movie.year})
          </li>
          <i class="far fa-trash-alt" onClick={() => handleDeleteMovieList(sessionUser.id, list.id, movie.imdbId)}></i>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
