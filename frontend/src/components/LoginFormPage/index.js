import "./LoginFormPage.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length) {
      document.getElementById("login-errors").classList.add("auth-errors");
    } else {
      document.getElementById("login-errors").classList.remove("auth-errors");
    }
  }, [errors]);

  if (sessionUser) return <Redirect to="/" />;

  const onSubmit = e => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(res => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  return (
    <>
      <div className="auth-form">
        <ul id="login-errors">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
        <form onSubmit={onSubmit}>
          <input
            required
            name="name"
            value={credential}
            type="text"
            placeholder="Username or Email"
            onChange={e => setCredential(e.target.value)}
          ></input>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="auth-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginFormPage;
