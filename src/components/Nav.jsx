import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav-bar">
      <ul>
        <li>
          <Link to="/reviews?sort_by=created_at">Recent Reviews</Link>
        </li>
        <li>My Reviews</li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
