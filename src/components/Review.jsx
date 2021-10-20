import React from "react";
import { Link } from "react-router-dom";
import DisplayDatetime from "./DisplayDatetime";

const Review = ({ review }) => {
  const {
    review_id,
    owner,
    title,
    category,
    votes,
    comment_count,
    created_at,
    review_body,
  } = review;

  return (
    <article className="review">
      <Link to={`/reviews/${review_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>owner: {owner}</p>
      <p>category: {category}</p>
      <p>votes: {votes}</p>
      <p>comment_count: {comment_count}</p>
      <p>
        created_at: <DisplayDatetime value={created_at} />
      </p>
      {review_body && <p>{review_body}</p>}
    </article>
  );
};

export default Review;
