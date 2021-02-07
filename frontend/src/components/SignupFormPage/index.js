import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupFormPage.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length) {
      document.getElementById("signup-errors").classList.add("auth-errors");
    } else {
      document.getElementById("signup-errors").classList.remove("auth-errors");
    }
  }, [errors]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = e => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password })).catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    }
    return setErrors(["Confirm Password field must be the same as the Password field"]);
  };

  return (
    <>
      <div className="auth-form">
        <ul id="signup-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h1 className="auth-header">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
        <p className="auth-bottom-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </>
  );
}

export default SignupFormPage;
