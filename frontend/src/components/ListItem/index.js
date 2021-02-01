import { useState } from "react";
import Modal from "react-modal";
import { deleteOneList, renameList } from "../../store/lists";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ListItem.css";
import MovieList from "../MovieList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#2f3542",
    color: "#f1f2f6",
  },
};

const ListItem = ({ list }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");
  const movies = list.Movies;

  const handleDelete = () => {
    dispatch(deleteOneList(sessionUser.id, list.id));
  };

  const handleEditList = e => {
    e.preventDefault();

    setListName("");
    setShowModal(false);

    dispatch(renameList(list.id, sessionUser.id, listName));
  };

  if (!list || !movies) return null;

  const croppedList = movies.slice(0, 6);

  return (
    <>
      <div className="list-item">
        <Link className="list-link" to={`/lists/${list.id}`}>
          <h3 className="list-item-header" key={list.id}>
            {list.name}
          </h3>
        </Link>
        <i className="list-edit-btn far fa-edit" onClick={() => setShowModal(true)}></i>

        <Modal style={customStyles} isOpen={showModal}>
          <div className="modal-container">
            <h3>Edit List</h3>
            <button className="close-new-list" onClick={() => setShowModal(false)}>
              x
            </button>
            <form onSubmit={handleEditList}>
              <input
                type="text"
                value={listName}
                onChange={e => setListName(e.target.value)}
                placeholder="List Name"
                required
              />
              <button type="submit">Create</button>
            </form>
            <MovieList list={list} />
          </div>
        </Modal>

        <div onClick={handleDelete} className="list-delete-btn">
          <i class="far fa-trash-alt"></i>
        </div>
        <ul>
          {movies &&
            croppedList.map(movie => (
              <Link to={`/movies/${movie.imdbId}`}>
                <img className="list-img" key={movie.id} src={movie.poster} alt="poster" />
              </Link>
            ))}
          {movies.length > 6 && (
            <Link className="list-link" to={`/lists/${list.id}`}>
              <span className="list-link ellipsis">...</span>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default ListItem;
