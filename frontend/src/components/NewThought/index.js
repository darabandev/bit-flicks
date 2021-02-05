import { useState, useEffect } from "react";
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
  const [charRemaining, setCharRemaining] = useState(300);
  const [thoughtDisabled, setThoughtDisabled] = useState(true);

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

  const handleNewThought = e => {
    e.preventDefault();

    dispatch(createNewThought(imdbId, sessionUser.id, review));
    setReview("");
    setShowModal(false);
  };

  const checkKey = e => {
    if (e.keyCode === 13) handleNewThought(e);
  };

  useEffect(() => {
    setCharRemaining(300 - review.length);

    review.length >= 2 ? setThoughtDisabled(false) : setThoughtDisabled(true);
  }, [review]);

  return (
    <>
      <button className="new-thought-btn" onClick={() => setShowModal(true)}>
        What Did You Think?
      </button>
      <Modal style={customStyles} isOpen={showModal}>
        <div className="modal-container thought-modal">
          <h3>Create New Thought</h3>
          <button className="close-new-list" onClick={() => setShowModal(false)}>
            <i class="fas fa-times"></i>
          </button>
          <form className="new-thought-form" onSubmit={handleNewThought}>
            <textarea
              maxlength="300"
              onKeyDown={e => checkKey(e)}
              value={review}
              onChange={e => setReview(e.target.value)}
            ></textarea>
            <p>
              Characters Remaining: <span>{charRemaining}</span>
            </p>
            <button disabled={thoughtDisabled} className="new-thought-submit" type="submit">
              Post
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default NewThought;
