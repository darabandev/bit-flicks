import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePageContainer = () => {
  const sessionUser = useSelector(state => state.session.user);
  const params = useParams();

  if (!params[0] && !sessionUser) return <Redirect to="/login" />;

  return <h1>Home Page</h1>;
};

export default HomePageContainer;
