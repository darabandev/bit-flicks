import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { trySearch } from "../../store/search";
import SearchResultItem from "../SearchResultItem";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const results = useSelector(state => state.search);

  useEffect(() => {
    const parsedSearch = searchTerm.replace(" ", "+");
    dispatch(trySearch(parsedSearch));
  }, [dispatch, searchTerm]);

  console.log(results);

  return (
    <>
      <h1>Search Results</h1>
      {results.map((result, idx) => (
        <SearchResultItem key={result.Title} info={result} />
      ))}
    </>
  );
};

export default SearchContainer;
