import AddToListForm from "../AddToListForm";
import "./MovieDisplay.css";

const MovieDisplay = ({ movie }) => {
  return (
    <div className="movie-display">
      <h1>{movie.title}</h1>
      <div className="movie-display-container">
        <img className="movie-display-img" src={movie.poster} alt="poster" />
        <div className="movie-info">
          <h3>Directed by {movie.director}</h3>
          <h4>{movie.plot}</h4>
          <p>Starring: {movie.actors}</p>
          <p>{movie.year}</p>
          <p>{movie.runtime}</p>
          <p>{movie.genre}</p>
          <p>{movie.country}</p>
          <p>
            IMDB Rating: <span>{movie.imdbRating}</span>
          </p>
        </div>
      </div>
      <AddToListForm />
    </div>
  );
};

export default MovieDisplay;
