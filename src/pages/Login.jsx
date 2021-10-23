import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useUser from "../hooks/useUser";
import "../styles/Login.css";

const Login = () => {
  const history = useHistory();
  const { user, login } = useUser();
  const [usernameValue, setUsernameValue] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    login(usernameValue)
      .then(() => {
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setErr(
            "Oops, seems that we haven't got a user with that username. Maybe check that you have spelt it correctly?"
          );
        } else {
          setErr(
            "Sorry, something went wrong. We couldn't verify your account at this moment. Maybe try again later?"
          );
        }
      });
  };

  if (user) {
    return (
      <div className="msgbox">
        <p>Welcome back, {user.name}!</p>
        <p>
          Will redirect you to the <Link to="/">home page</Link> very soon...
        </p>
      </div>
    );
  } else {
    return (
      <div className="msgbox login-page">
        <h2>Log in</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <span>
            <label htmlFor="login">Username: </label>
            <input
              type="text"
              name="text"
              id="username"
              className={`text-input ${err && "error"}`}
              value={usernameValue}
              placeholder="Guest? try: grumpy19"
              onChange={(e) => setUsernameValue(e.target.value)}
              required
            />
          </span>
          <button class="button">Log me in!</button>
          {err && <span class="error-msg">{err}</span>}
        </form>
      </div>
    );
  }
};

export default Login;
