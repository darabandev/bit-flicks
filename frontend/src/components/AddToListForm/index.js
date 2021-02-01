import { getLists, addMovieToList } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddToListForm.css";

const AddToListForm = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { imdbId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const lists = useSelector(state => state.list);
  const [listId, setListId] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (sessionUser) dispatch(getLists(sessionUser.id));
  }, [dispatch, sessionUser]);

  useEffect(() => {
    listId === 0 || listId === "0" ? setButtonDisabled(true) : setButtonDisabled(false);
  }, [listId]);

  const handleAdd = async (e, listId) => {
    e.preventDefault();
    setShowModal(false);
    await dispatch(addMovieToList(sessionUser.id, listId, imdbId));
  };

  return (
    <form>
      <select className="add-to-list-input" onChange={e => setListId(e.target.value)}>
        <option value="0">Select a List</option>
        {lists.map(list => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
      <button className="add-to-list-submit" onClick={e => handleAdd(e, listId)} disabled={buttonDisabled}>
        Add to List
      </button>
    </form>
  );
};

export default AddToListForm;
