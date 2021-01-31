import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import SearchBar from "../Searchbar";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className="navbar">
      {sessionUser ? (
        <>
          <Link className="nav-text" to="/">
            <p className="nav-text">Bit Flicks</p>
          </Link>
          <SearchBar />
          <div className="log-out-btn">
            <p onClick={() => dispatch(logout())}>Log Out</p>
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

export default Navigation;
