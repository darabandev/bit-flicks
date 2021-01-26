import "./SearchResultItem.css";
import pic from "./not-found.jpg";

const SearchResultItem = ({ info }) => {
  const picSrc = src => (src === "N/A" ? pic : src);

  return (
    <div className="search-result">
      <img className="search-pic" src={picSrc(info.Poster)} alt="Movie Poster" />
      <p>{info.Title}</p>
      <p>{info.Year}</p>
    </div>
  );
};

export default SearchResultItem;
