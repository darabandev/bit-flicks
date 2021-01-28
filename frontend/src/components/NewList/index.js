import { useState } from "react";
import Modal from "react-modal";
import { createNewList } from "../../store/lists";
import { useDispatch, useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F0AA89",
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
      <button onClick={() => setShowModal(true)}>Create New List</button>
      <Modal style={customStyles} isOpen={showModal}>
        <button onClick={() => setShowModal(false)}>x</button>
        <form onSubmit={handleCreateList}>
          <input type="text" value={listName} onChange={e => setListName(e.target.value)} />
          <button type="submit">Create</button>
        </form>
      </Modal>
    </>
  );
};

export default NewList;
