import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./profileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className="navbar">
      {sessionUser ? (
        <>
          <NavLink to="/">Home</NavLink>
          <ProfileButton user={sessionUser} />
        </>
      ) : (
        <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </ul>
  );
};

export default Navigation;
