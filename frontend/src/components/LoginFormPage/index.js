import "./LoginFormPage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
      <ul>
        {errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit} className="auth-form">
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
    </>
  );
};

export default LoginFormPage;
