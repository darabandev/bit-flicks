import { deleteOneList } from "../../store/lists";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ list }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const movies = list.Movies;

  const handleDelete = () => {
    dispatch(deleteOneList(sessionUser.id, list.id));
  };

  const croppedList = movies.slice(0, 6);

  return (
    <div className="list-item">
      <Link to={`/lists/${list.id}`}>
        <h3 key={list.id}>{list.name}</h3>
      </Link>
      <ul>
        {movies &&
          croppedList.map(movie => (
            <Link to={`/movies/${movie.imdbId}`}>
              <img className="list-img" key={movie.id} src={movie.poster} alt="poster" />
            </Link>
          ))}
        {movies.length > 6 && (
          <Link to={`/lists/${list.id}`}>
            <span className="ellipsis">...</span>
          </Link>
        )}
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListItem;
