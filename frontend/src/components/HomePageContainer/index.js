import { useParams, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetch } from "../../store/csrf";

const HomePageContainer = () => {
  const sessionUser = useSelector(state => state.session.user);
  const params = useParams();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  if (!params[0] && !sessionUser) return <Redirect to="/login" />;

  const search = async () => {
    // const res = await dispatch(trySearch("matrix"));
    // console.log(res.data.Search);
    // const response = await fetch(`/search/${searchTerm}`);
    // console.log(response.data.Search);
    history.push(`/search/${searchTerm}`);
  };

  return (
    <>
      <h1>Home Page</h1>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={search}>Search</button>
    </>
  );
};

export default HomePageContainer;
