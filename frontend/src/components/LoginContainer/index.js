import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import { useState } from "react";
import { useParams } from "react-router-dom";

const LoginContainer = () => {
  const params = useParams();
  console.log(params);
  const [showForm, setShowForm] = useState("/login");

  return (
    <>
      <h1>Bit Flicks</h1>
      {params[0] === "/login" ? <LoginFormPage /> : <SignupFormPage />}
    </>
  );
};

export default LoginContainer;
