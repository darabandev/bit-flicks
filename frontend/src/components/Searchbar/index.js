import { useState } from "react";
import { useHistory } from "react-router-dom";

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
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="submit" onClick={search}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
