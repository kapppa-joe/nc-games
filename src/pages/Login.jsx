import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useUser from "../hooks/useUser";

const Login = () => {
  const history = useHistory();
  const { user, login } = useUser();
  const [usernameValue, setUsernameValue] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usernameValue)
      .then(() => {
        console.log("logged in successfuly. redirecting user soon.");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setErr(
            "Oops, seems that we haven't got a user with that username. Maybe check that you spelt correctly?"
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
      <div>
        <p>Welcome back, {user.name}!</p>
        <p>
          Will redirect you to the <Link to="/">home page</Link> very soon...
        </p>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in yet.
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Username:</label>
          <input
            type="text"
            name="text"
            id="username"
            value={usernameValue}
            placeholder="Guest? try: tickle122"
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <button>Go!</button>
        </form>
        {err && <span class="error-msg">{err}</span>}
      </div>
    );
  }
};

export default Login;
