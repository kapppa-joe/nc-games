import React from "react";

import useUser from "../hooks/useUser";

const UserPage = () => {
  const { user, logout } = useUser();
  if (user) {
    return (
      <div class="msgbox">
        <p>
          You are now logged in as: <b>{user.username}</b>
        </p>
        <p>Name: {user.name}</p>
        <img
          class="pure-img avatar_img"
          alt="user avatar"
          src={user.avatar_url}
          style={{
            margin: "auto",
            border: "solid 0.5px var(--light-shadow)",
            borderRadius: "100%",
          }}
        />
        <br />
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

export default UserPage;
