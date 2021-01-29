import { useParams } from "react-router-dom";
import { getOneListFromDb } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ListPageContainer = () => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const lists = useSelector(state => state.list);

  useEffect(() => {
    if (sessionUser) dispatch(getOneListFromDb(listId));
  }, [dispatch, sessionUser]);

  return (
    <>
      {lists.map(list => (
        <h1>{list.name}</h1>
      ))}
    </>
  );
};

export default ListPageContainer;
