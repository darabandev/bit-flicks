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

  return (
    <div className="list-item">
      <h3 key={list.id}>{list.name}</h3>
      <ul>
        {movies &&
          movies.map(movie => (
            <Link to={`/movies/${movie.imdbId}`}>
              <img className="list-img" key={movie.id} src={movie.poster} />
            </Link>
          ))}
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ListItem;
