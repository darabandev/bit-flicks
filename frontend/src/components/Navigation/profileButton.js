import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const ProfileButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => setShowMenu(prev => !prev)}>
        <i className="fas fa-user"></i>
      </button>
      {showMenu && (
        <ul>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={() => dispatch(logout())}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileButton;
