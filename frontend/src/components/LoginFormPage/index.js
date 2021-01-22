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
    <form onSubmit={onSubmit}>
      <ul>
        {errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
      <input required name="name" value={credential} type="text" onChange={e => setCredential(e.target.value)}></input>
      <input
        required
        name="password"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginFormPage;
