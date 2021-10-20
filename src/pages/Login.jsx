import React, { useState } from "react";
import useUser from "../hooks/useUser";

const Login = () => {
  const { user, login, logout } = useUser();
  const [usernameValue, setUsernameValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(usernameValue);
  };

  if (user) {
    return (
      <div>
        You are logged in as: {user}
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in yet.
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            name="text"
            id="username"
            value={usernameValue}
            onChange={(e) => setUsernameValue(e.target.value)}
          />
          <button>Go!</button>
        </form>
      </div>
    );
  }
};

export default Login;
