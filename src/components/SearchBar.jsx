import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import useUser from "../hooks/useUser";

import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
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
      <Link to="/">
        <LogoSvg />
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
        <Link to="/logout">
          <span id="user-icon" role="button">
            Logout
          </span>
        </Link>
      ) : (
        <Link to="/login">
          <span id="login-icon" role="button">
            Login
          </span>
        </Link>
      )}
    </nav>
  );
};

export default SearchBar;
