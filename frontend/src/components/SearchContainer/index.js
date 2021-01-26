import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { trySearch } from "../../store/search";

const SearchContainer = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useParams();
  const parsedSearch = searchTerm.replace(" ", "+");
  const response = dispatch(trySearch(parsedSearch));
  //   const results = useSelector(state => state.search);
  console.log(response);

  return (
    <>
      <h1>Search Results</h1>
    </>
  );
};

export default SearchContainer;
