import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

import DisplayDatetime from "./DisplayDatetime";
import Voter from "./Voter";

import { patchReviewVotes } from "../utils/api";
import "../styles/Reviews.css";

const LinkWrapper = ({ review_id, children, className }) => {
  return (
    <Link className={className ? className : ""} to={`/reviews/${review_id}`}>
      {children}
    </Link>
  );
};

const HighlightSearchTerm = ({ text, searchTerm, excerpt = false }) => {
  if (!searchTerm) {
    return text;
  }
  const searchWords = searchTerm.split(/\s/);

  if (excerpt) {
    const firstMatchIndex = text.search(new RegExp(searchWords[0], "i"));
    if (firstMatchIndex >= 0) {
      const startExcerpt = Math.max(firstMatchIndex - 40, 0);
      text = text.slice(startExcerpt, startExcerpt + 100);
      if (startExcerpt > 0) {
        text = "..." + text;
      }
    }
  }
  return (
    <Highlighter
      highlightClassName="highlight-text"
      searchWords={searchWords}
      autoEscape={true}
      textToHighlight={text}
    />
  );
};

const ReviewContent = ({ review, isSingleReview, className, searchTerm }) => {
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
    <article className={`review pure-g ${className ? className : ""}`}>
      <div className="image-wrapper pure-u-1 pure-u-md-1-3">
        <img clasName="review_img" src={review_img_url} alt={title} />
      </div>
      <div className="title-wrapper pure-u-1">
        <h3 className="review-title">
          <HighlightSearchTerm text={title} searchTerm={searchTerm} />
        </h3>
      </div>
      <div className="review-details pure-u-1 pure-u-md-2-3">
        <p>
          posted by <span className="info">{owner}</span>
        </p>
        <p>
          category:{" "}
          <span className="info">
            <HighlightSearchTerm text={category} searchTerm={searchTerm} />
          </span>
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
        {review_body && (
          <p className="review-body">
            <HighlightSearchTerm
              text={review_body}
              searchTerm={searchTerm}
              excerpt={true}
            />
          </p>
        )}
      </div>
    </article>
  );
};

const Review = ({
  review,
  generateLink,
  isSingleReview,
  className,
  searchTerm,
}) => {
  if (generateLink) {
    return (
      <LinkWrapper review_id={review.review_id} className={className}>
        <ReviewContent
          review={review}
          isSingleReview={isSingleReview}
          searchTerm={searchTerm}
        />
      </LinkWrapper>
    );
  } else {
    return (
      <ReviewContent
        review={review}
        isSingleReview={isSingleReview}
        className={className}
        searchTerm={searchTerm}
      />
    );
  }
};

export default Review;
