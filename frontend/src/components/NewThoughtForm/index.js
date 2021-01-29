import { useSelector, useDispatch } from "react-redux";
import { createNewThought } from "../../store/thoughts";
import { useParams } from "react-router-dom";
import { useState } from "react";

const NewThoughtForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const { imdbId } = useParams();
  const [review, setReview] = useState("");

  const handleNewThought = e => {
    e.preventDefault();

    dispatch(createNewThought(imdbId, sessionUser.id, review));
    setReview("");
  };

  return (
    <form onSubmit={handleNewThought}>
      <textarea value={review} onChange={e => setReview(e.target.value)}></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default NewThoughtForm;
