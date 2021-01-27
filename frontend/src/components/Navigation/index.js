import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./profileButton";
import "./Navigation.css";
import SearchBar from "../Searchbar";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className="navbar">
      {sessionUser ? (
        <>
          <NavLink to="/">Home</NavLink>
          <SearchBar />
          <ProfileButton user={sessionUser} />
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
