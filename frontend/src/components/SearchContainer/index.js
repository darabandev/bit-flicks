import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { trySearch } from "../../store/search";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const results = useSelector(state => state.search);

  useEffect(() => {
    const parsedSearch = searchTerm.replace(" ", "+");
    dispatch(trySearch(parsedSearch));
  }, []);

  console.log(results);

  return (
    <>
      <h1>Search Results</h1>
      {results.map((result, idx) => (
        <>
          <p key={idx}>{result.Title}</p>
          <p key={idx}>{result.Year}</p>
          <img key={idx} src={result.Poster || } />
        </>
      ))}
    </>
  );
};

export default SearchContainer;
