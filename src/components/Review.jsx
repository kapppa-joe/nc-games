import React from "react";
import { Link } from "react-router-dom";

import DisplayDatetime from "./DisplayDatetime";

import "../styles/Reviews.css";

const Review = ({ review }) => {
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

  return (
    <article className="review pure-g">
      <Link to={`/reviews/${review_id}`}>
        <div className="title-wrapper pure-u-1">
          {/* <Link to={`/reviews/${review_id}`}> */}
          <h3>{title}</h3>
        </div>
        <div className="image-wrapper pure-g-1-3">
          <img clasName="review_img" src={review_img_url} alt={title} />
        </div>
        <div className="review-details pure-u-2-3">
          <p>posted by {owner}</p>
          <p>category: {category}</p>
          <p>
            {votes} votes, {comment_count} comments
          </p>
          <p>
            <DisplayDatetime value={created_at} />
          </p>
          {review_body && <p>{review_body}</p>}
        </div>
      </Link>
    </article>
  );
};

export default Review;
