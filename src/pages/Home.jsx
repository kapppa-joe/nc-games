import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

import "../styles/Home.css";

const Home = () => {
  const { user } = useUser();

  return (
    <section id="home">
      {user && (
        <span className="greeting">
          Hello, {user.name.replace(/\s.+/, "")}! What would you like to do
          today?
        </span>
      )}
      <div className="card-container">
        <Link to={`/reviews?sort_by=created_at&limit=5`}>
          <div className="card">Read some latest game reviews</div>
        </Link>
        {user && (
          <Link to={`reviews?owner=${user}`}>
            <div className="card">See your reviews</div>
          </Link>
        )}
        <div className="card">Post a new review</div>
      </div>
    </section>
  );
};

export default Home;
