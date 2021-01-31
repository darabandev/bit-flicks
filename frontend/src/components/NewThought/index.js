import { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { createNewThought } from "../../store/thoughts";
import { useDispatch, useSelector } from "react-redux";
import "./NewThought.css";

const NewThought = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { imdbId } = useParams();
  const [review, setReview] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const handleNewThought = e => {
    e.preventDefault();

    dispatch(createNewThought(imdbId, sessionUser.id, review));
    setReview("");
    setShowModal(false);
  };

  const checkKey = e => {
    if (e.keyCode === 13) handleNewThought(e);
  };

  return (
    <>
      <button className="new-thought-btn" onClick={() => setShowModal(true)}>
        What Did You Think?
      </button>
      <Modal style={customStyles} isOpen={showModal}>
        <div className="modal-container thought-modal">
          <h3>Create New Thought</h3>
          <button className="close-new-list" onClick={() => setShowModal(false)}>
            x
          </button>
          <form className="new-thought-form" onSubmit={handleNewThought}>
            <textarea onKeyDown={e => checkKey(e)} value={review} onChange={e => setReview(e.target.value)}></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewThought;
