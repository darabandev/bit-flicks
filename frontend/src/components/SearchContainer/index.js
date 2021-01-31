import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { trySearch } from "../../store/search";
import SearchResultItem from "../SearchResultItem";
import "./SearchContainer.css";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const results = useSelector(state => state.search);

  useEffect(() => {
    const parsedSearch = searchTerm.replace(" ", "+");
    dispatch(trySearch(parsedSearch));
  }, [dispatch, searchTerm]);

  // if (!results) return <h1>Nothing Found</h1>;

  return (
    <>
      <h1 className="search-header">Search Results</h1>
      <div className="results-container">
        {results.map((result, idx) => (
          <SearchResultItem key={`${result.Title}${idx}`} info={result} />
        ))}
      </div>
    </>
  );
};

export default SearchContainer;
