import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../assets/svg/logo.svg";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/reviews?search=${searchTerm}`);
  };

  return (
    <nav id="search-bar">
      <Link to="/">
        <LogoSvg />
      </Link>
      <form className="search-box" role="search" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-term"
          id="search-term"
          placeholder="Search NCGamers"
          value={searchTerm}
          aria-label="search-term"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to="/login">
        <span id="login-icon" role="button">
          UserIcon
        </span>
      </Link>
    </nav>
  );
};

export default SearchBar;
