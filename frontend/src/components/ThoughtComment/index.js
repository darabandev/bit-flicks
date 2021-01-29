import "./ThoughtComment.css";

const ThoughtComment = ({ thought, user }) => {
  return (
    <div className="thought">
      <p className="review">{thought.review}</p>
      <p className="timestamp">
        Posted by {user.username} {thought.createdAt.slice(0, 10)}
      </p>
    </div>
  );
};

export default ThoughtComment;
