import "./ThoughtComment.css";

const ThoughtComment = ({ thought }) => {
  return (
    <div className="thought">
      <p className="review">{thought.review}</p>
      <p className="timestamp">
        Posted by <span className="thought-user">{thought.User.username}</span> {thought.createdAt.slice(0, 10)}
      </p>
    </div>
  );
};

export default ThoughtComment;
