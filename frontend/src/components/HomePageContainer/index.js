import { useParams, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLists } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const lists = useSelector(state => state.list);
  const params = useParams();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");
  // const [lists, setLists] = useState([]);

  useEffect(() => {
    if (sessionUser) dispatch(getLists(sessionUser.id));
  }, [dispatch, sessionUser]);

  if (!params[0] && !sessionUser) return <Redirect to="/login" />;

  const search = async () => {
    history.push(`/search/${searchTerm}`);
  };

  return (
    <>
      <h1>Home Page</h1>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={search}>Search</button>
      <ul>{lists.length > 0 && lists.map(list => <li key={list.id}>{list.name}</li>)}</ul>
    </>
  );
};

export default HomePageContainer;
