import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="card-container">
        <Link to="/reviews?sort_by=created_at">
          <div className="card">Latest Reviews</div>
        </Link>
        <div className="card">View comments to your reviews</div>
        <div className="card">Post a new review</div>
      </div>
    </section>
  );
};

export default Home;
