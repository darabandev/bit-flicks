import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import { useParams } from "react-router-dom";
import "./LoginContainer.css";

const LoginContainer = () => {
  const params = useParams();

  return (
    <div className="login-container">
      <h1 className="title">Bit Flicks</h1>
      {params[0] === "/login" ? <LoginFormPage /> : <SignupFormPage />}
    </div>
  );
};

export default LoginContainer;
