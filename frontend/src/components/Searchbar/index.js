import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";

const SearchBar = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const search = async e => {
    e.preventDefault();

    history.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form>
      <input
        placeholder="Find a movie"
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className="search-submit" type="submit" onClick={search}>
        <i class="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
