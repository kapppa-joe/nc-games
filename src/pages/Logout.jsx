import React from "react";

import useUser from "../hooks/useUser";

const Logout = () => {
  const { user, logout } = useUser();
  if (user) {
    return (
      <div>
        <p>You are now logged in as: {user.username}</p>
        <button className="button logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Bye, see ya later !</p>
      </div>
    );
  }
};

export default Logout;
