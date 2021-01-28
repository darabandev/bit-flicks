import { useState } from "react";
import Modal from "react-modal";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create New List</button>
      <Modal style={customStyles} isOpen={showModal}>
        <button onClick={() => setShowModal(false)}>x</button>
        <form>
          <input type="text" />
          <button type="submit">Create</button>
        </form>
      </Modal>
    </>
  );
};

export default NewList;
