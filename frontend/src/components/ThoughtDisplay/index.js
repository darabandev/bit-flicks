import NewThoughtForm from "../NewThoughtForm";
import "./ThoughtDisplay.css";

const ThoughtDisplay = () => {
  return (
    <div className="thought-container">
      <h1>Thoughts</h1>
      <NewThoughtForm />
    </div>
  );
};

export default ThoughtDisplay;
