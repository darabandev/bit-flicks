import { useParams } from "react-router-dom";
import { getOneListFromDb } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ListPageContainer = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const list = useSelector(state => state.list)[0];

  useEffect(() => {
    if (sessionUser) dispatch(getOneListFromDb(listId));
  }, [dispatch, sessionUser]);

  if (!list) return null;

  return (
    <>
      <h1>{list.name}</h1>
      {list.Movies.map(movie => (
        <img src={movie.poster} alt="poster" />
      ))}
    </>
  );
};

export default ListPageContainer;
