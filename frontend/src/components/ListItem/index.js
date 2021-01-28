import { deleteOneList } from "../../store/lists";
import { useDispatch, useSelector } from "react-redux";

const ListItem = ({ list }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleDelete = () => {
    dispatch(deleteOneList(sessionUser.id, list.id));
  };

  return (
    <>
      <li key={list.id}>{list.name}</li>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ListItem;
