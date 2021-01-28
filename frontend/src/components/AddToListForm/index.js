import { getLists, addMovieToList } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddToListForm = () => {
  const dispatch = useDispatch();
  const { imdbId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const lists = useSelector(state => state.list);
  const [listId, setListId] = useState(1);

  useEffect(() => {
    if (sessionUser) dispatch(getLists(sessionUser.id));
  }, [dispatch, sessionUser]);

  const handleAdd = async (e, listId) => {
    e.preventDefault();
    await dispatch(addMovieToList(sessionUser.id, listId, imdbId));
  };

  return (
    <form>
      <select onChange={e => setListId(e.target.value)}>
        {lists.map(list => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
      <button onClick={e => handleAdd(e, listId)}>Add to List</button>
    </form>
  );
};

export default AddToListForm;
