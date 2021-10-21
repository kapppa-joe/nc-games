import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import useUser from "../hooks/useUser";

import { ReactComponent as SiteLogo } from "../assets/svg/logo.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user.svg";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/reviews?search=${searchTerm}`);
  };

  const { user } = useUser();

  return (
    <nav id="search-bar">
      <Link to="/" role="button" aria-label="back to home">
        <SiteLogo />
      </Link>
      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-term"
          id="search-term"
          placeholder="Search all reviews"
          value={searchTerm}
          aria-label="search-term"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {user ? (
        <Link to="/user" tabIndex="0">
          <span className="user-button" aria-label="user-page">
            <UserIcon />
          </span>
        </Link>
      ) : (
        <Link to="/login">
          <button className="button login-button" aria-label="login">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default SearchBar;
