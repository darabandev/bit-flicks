import { useParams, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { getLists } from "../../store/lists";
import { useSelector, useDispatch } from "react-redux";
import ListContainer from "../ListContainer";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const lists = useSelector(state => state.list);

  useEffect(() => {
    if (sessionUser) dispatch(getLists(sessionUser.id));
  }, [dispatch, sessionUser]);

  if (!params[0] && !sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <h1>Home Page</h1>
      <ListContainer lists={lists} />
    </>
  );
};

export default HomePageContainer;
