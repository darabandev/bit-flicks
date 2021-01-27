const MovieDisplay = ({ movie }) => {
  return (
    <>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt="poster" />
      <h2>{movie.year}</h2>
      <h2>{movie.runtime}</h2>
      <h2>{movie.genre}</h2>
      <h2>{movie.director}</h2>
      <h2>{movie.actors}</h2>
    </>
  );
};

export default MovieDisplay;
