import NewThoughtForm from "../NewThoughtForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllThoughts } from "../../store/thoughts";
import { useParams } from "react-router-dom";
import "./ThoughtDisplay.css";

const ThoughtDisplay = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const thoughts = useSelector(state => state.thought);
  const { imdbId } = useParams();

  console.log(thoughts);

  useEffect(() => {
    if (sessionUser) dispatch(getAllThoughts(imdbId));
  }, [thoughts, dispatch, imdbId, sessionUser]);

  return (
    <div className="thought-container">
      <h1>Thoughts</h1>
      <NewThoughtForm />
      {thoughts.map(thought => (
        <p>{thought.review}</p>
      ))}
    </div>
  );
};

export default ThoughtDisplay;
