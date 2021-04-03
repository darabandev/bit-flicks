import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import { useParams } from "react-router-dom";
import video from "./background.mp4";

import "./LoginContainer.css";

const LoginContainer = () => {
  const params = useParams();

  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="login-container">
        <h1 className="title">
          <span>Bit Flicks</span>
        </h1>
        {params[0] === "/login" ? <LoginFormPage /> : <SignupFormPage />}
        <div className="placeholder"></div>
      </div>
    </>
  );
};

export default LoginContainer;
