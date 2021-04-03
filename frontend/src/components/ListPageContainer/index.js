import { useParams } from "react-router-dom";
import { getOneListFromDb } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../ListItem/ListItem.css";
import "./ListPage.css";

const ListPageContainer = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const list = useSelector(state => state.list)[0];

  useEffect(() => {
    if (sessionUser) dispatch(getOneListFromDb(listId));
  }, [dispatch, sessionUser, listId]);

  if (!list) return null;

  return (
    <div className="list-page main">
      <h1 className="list-page-header">{list.name}</h1>
      <div className="img-holder">
        {list.Movies.map(movie => (
          <div className="img-slot">
            <img className="list-page-img" key={list.Movies.id} src={movie.poster} alt="poster" />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPageContainer;
