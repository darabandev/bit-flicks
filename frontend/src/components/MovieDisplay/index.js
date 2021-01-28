import BtnAddToList from "../BtnAddToList";

const MovieDisplay = ({ movie }) => {
  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <h2>Local DB ID: {movie.id}</h2>
        <img src={movie.poster} alt="poster" />
        <h2>{movie.year}</h2>
        <h2>{movie.runtime}</h2>
        <h2>{movie.genre}</h2>
        <h2>{movie.director}</h2>
        <h2>{movie.actors}</h2>
      </div>
      <BtnAddToList />
    </>
  );
};

export default MovieDisplay;
