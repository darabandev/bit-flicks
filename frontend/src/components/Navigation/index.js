import { useEffect, useState } from "react";
import { NavLink, Link, useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import SearchBar from "../Searchbar";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const isAuthPage = window.location.pathname === "/login" || window.location.pathname === "/signup";
  const [authPage, setAuthPage] = useState(isAuthPage);

  useEffect(() => {
    setAuthPage(isAuthPage);
  }, [isAuthPage]);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <ul className={`navbar ${authPage ? "hidden" : ""}`}>
      {sessionUser ? (
        <>
          <Link className="nav-text" to="/">
            <p className="nav-text">Bit Flicks</p>
          </Link>
          <SearchBar />
          <div className="log-out-btn">
            <p onClick={handleLogout}>Log Out</p>
          </div>
        </>
      ) : (
        <>
          <p className="nav-text">Bit Flicks</p>
          <div className="login-signup-nav-btns">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </>
      )}
    </ul>
  );
};

export default withRouter(Navigation);
