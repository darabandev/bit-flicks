import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllThoughts } from "../../store/thoughts";
import { useParams } from "react-router-dom";
import "./ThoughtDisplay.css";
import ThoughtComment from "../ThoughtComment";
import NewThought from "../NewThought";

const ThoughtDisplay = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const thoughts = useSelector(state => state.thought);
  const { imdbId } = useParams();

  useEffect(() => {
    if (sessionUser) dispatch(getAllThoughts(imdbId));
  }, [dispatch, imdbId, sessionUser]);

  return (
    <div className="thought-container">
      <h1>Thoughts</h1>
      {thoughts.length === 0 && <h4>Be the first to give your thoughts on this movie!</h4>}
      <NewThought />
      {thoughts.map(thought => (
        <ThoughtComment thought={thought} user={sessionUser} />
      ))}
    </div>
  );
};

export default ThoughtDisplay;
