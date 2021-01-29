import AddToListForm from "../AddToListForm";
import "./MovieDisplay.css";

const MovieDisplay = ({ movie }) => {
  return (
    <div className="movie-display">
      <h2>{movie.title}</h2>
      <img className="movie-display-img" src={movie.poster} alt="poster" />
      <h2>{movie.year}</h2>
      <h2>{movie.runtime}</h2>
      <h2>{movie.genre}</h2>
      <h2>{movie.director}</h2>
      <h2>{movie.actors}</h2>
      <AddToListForm />
    </div>
  );
};

export default MovieDisplay;
