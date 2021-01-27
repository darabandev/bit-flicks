import { Link } from "react-router-dom";
import "./SearchResultItem.css";
import pic from "./not-found.jpg";

const SearchResultItem = ({ info }) => {
  const picSrc = src => (src === "N/A" ? pic : src);

  return (
    <div className="search-result">
      <Link to={`/movies/${info.imdbID}`}>
        <img className="search-pic" src={picSrc(info.Poster)} alt="Movie Poster" />
      </Link>
      <p>{info.Title}</p>
      <p>{info.Year}</p>
    </div>
  );
};

export default SearchResultItem;
