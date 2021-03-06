import { useState } from "react";
import Modal from "react-modal";
import { createNewList } from "../../store/lists";
import { useDispatch, useSelector } from "react-redux";
import "./NewList.css";

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

const NewList = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");

  const handleCreateList = e => {
    e.preventDefault();

    setListName("");
    setShowModal(false);

    dispatch(createNewList(sessionUser.id, listName));
  };

  return (
    <>
      <button className="new-list-btn" onClick={() => setShowModal(true)}>
        Create New List
      </button>
      <Modal style={customStyles} isOpen={showModal}>
        <div className="modal-container">
          <h3>Create New List</h3>
          <button className="close-new-list" onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </button>
          <form onSubmit={handleCreateList}>
            <input
              className="new-list-input"
              type="text"
              value={listName}
              onChange={e => setListName(e.target.value)}
              placeholder="List Name"
              required
            />
            <button className="new-list-submit" type="submit">
              Create
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewList;
