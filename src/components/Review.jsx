import React from "react";
import { Link } from "react-router-dom";

import DisplayDatetime from "./DisplayDatetime";

import "../styles/Reviews.css";
import { patchReviewVotes } from "../utils/api";
import Voter from "./Voter";

const LinkWrapper = ({ review_id, children }) => {
  return <Link to={`/reviews/${review_id}`}>{children}</Link>;
};

const ReviewContent = ({ review, isSingleReview }) => {
  const {
    review_id,
    review_img_url,
    owner,
    title,
    category,
    votes,
    comment_count,
    created_at,
    review_body,
  } = review;

  const patchVotes = (inc_votes) => {
    return patchReviewVotes(review_id, inc_votes);
  };

  return (
    <article className={`review pure-g`}>
      <div className="image-wrapper pure-u-1 pure-u-md-1-3">
        <img clasName="review_img" src={review_img_url} alt={title} />
      </div>
      <div className="title-wrapper pure-u-1">
        <h3 className="review-title">{title}</h3>
      </div>
      <div className="review-details pure-u-1 pure-u-md-2-3">
        <p>
          posted by <span className="info">{owner}</span>
        </p>
        <p>
          category: <span className="info">{category}</span>
        </p>
        <p>
          {isSingleReview ? (
            <Voter votes={votes} patchVotes={patchVotes} />
          ) : (
            <>
              <span className="info">{votes}</span> votes,
            </>
          )}
          <span className="info">{comment_count}</span> comments
        </p>
        <p>
          <DisplayDatetime value={created_at} />
        </p>
        {review_body && <p className="review-body">{review_body}</p>}
      </div>
    </article>
  );
};

const Review = ({ review, generateLink, isSingleReview }) => {
  if (generateLink) {
    return (
      <LinkWrapper review_id={review.review_id}>
        <ReviewContent review={review} isSingleReview={isSingleReview} />
      </LinkWrapper>
    );
  } else {
    return <ReviewContent review={review} isSingleReview={isSingleReview} />;
  }
};

export default Review;
