import AddToListForm from "../AddToListForm";
import Modal from "react-modal";
import { useState } from "react";
import "./MovieDisplay.css";

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

const MovieDisplay = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="movie-display">
      <h1>{movie.title}</h1>
      <div className="movie-display-container">
        <img className="movie-display-img" src={movie.poster} alt="poster" />
        <div className="movie-info">
          <h3>Directed by {movie.director}</h3>
          <p>
            Plot: <span>{movie.plot}</span>
          </p>
          <p>
            Starring: <span>{movie.actors}</span>
          </p>
          <p>
            Released: <span>{movie.year}</span>
          </p>
          <p>
            Runtime: <span>{movie.runtime}</span>
          </p>
          <p>
            Genres: <span>{movie.genre}</span>
          </p>
          <p>
            Country: <span>{movie.country}</span>
          </p>
          <p>
            IMDB Rating: <span>{movie.imdbRating}</span>
          </p>
        </div>
      </div>
      <button className="add-to-list-btn" onClick={() => setShowModal(true)}>
        Add to a List
      </button>
      <Modal style={customStyles} isOpen={showModal}>
        <div className="modal-container">
          <h3>Add to List</h3>
          <button className="close-new-list" onClick={() => setShowModal(false)}>
            <i class="fas fa-times"></i>
          </button>
          <AddToListForm setShowModal={setShowModal} />
        </div>
      </Modal>
    </div>
  );
};

export default MovieDisplay;
