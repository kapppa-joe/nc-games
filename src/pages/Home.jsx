import React, { useState, useEffect } from "react";
import moment from "moment";

import Review from "../components/Review";
import ApiLoading from "../components/ApiLoading";

import useUser from "../hooks/useUser";
import useApiCall from "../hooks/useApiCall";

import { getFeaturedReviews } from "../utils/api";
import "../styles/Home.css";

const displayFeaturedReview = (title, review) => {
  if (review) {
    return (
      <>
        <h2 className="pure-u-1 pure-u-md-2-3 review-description">{title}:</h2>
        <Review
          className="pure-u-1 pure-u-md-2-3"
          review={review}
          generateLink={true}
        />
      </>
    );
  }
};

const Home = () => {
  const { user } = useUser();

  const {
    data: featuredReviews,
    err,
    isLoading,
  } = useApiCall(() => getFeaturedReviews(user ? user.username : ""), [], []);

  return (
    <section id="home">
      <div className="greeting">
        Hello, {user ? user.name.replace(/\s.+/, "") : `my friend`}! Welcome to
        NC Boardgamer.
        <br />
        Let's talk about your beloved board games!
      </div>

      <div id="featured-reviews-wrapper" className="pure-g reviews-container">
        <ApiLoading isLoading={isLoading} err={err}>
          {displayFeaturedReview(
            `Featured Review of ${moment().format("MMM")}`,
            featuredReviews.reviewOfTheMonth
          )}
          {displayFeaturedReview(
            `Featured Review From You`,
            featuredReviews.myReview
          )}
          {displayFeaturedReview(`Newest review`, featuredReviews.newestReview)}
        </ApiLoading>
      </div>
    </section>
  );
};

export default Home;
