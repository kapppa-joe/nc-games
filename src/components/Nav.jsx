import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <li>
          <Link to="/reviews?sort_by=created_at">Latest Reviews</Link>
        </li>
        |
        <li>
          <Link to="/random">Random</Link>
        </li>
        |
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
