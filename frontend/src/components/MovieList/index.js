import "./MovieList.css";

const MovieList = ({ list }) => {
  const movies = list.Movies;

  return (
    <div className="movie-list-container">
      {list.Movies.map(movie => (
        <div className="movie-list-item-container">
          <li className="movie-list-item" key={movie.id}>
            {movie.title} ({movie.year})
          </li>
          <i class="far fa-trash-alt"></i>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
