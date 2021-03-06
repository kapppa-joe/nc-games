import React from "react";
import { useParams } from "react-router";

import { getReviewById } from "../utils/api";
import useApiCall from "../hooks/useApiCall";
import ApiLoading from "../components/ApiLoading";
import Review from "../components/Review";
import ListComments from "../components/ListComments";

const SingleReview = () => {
  const { review_id } = useParams();

  const {
    data: review,
    isLoading,
    err,
  } = useApiCall(() => getReviewById(review_id), [review_id], null);
  return (
    <ApiLoading isLoading={isLoading} err={err}>
      {review && (
        <div class="single-review-wrapper">
          <Review review={review} isSingleReview={true} />
          <ListComments review_id={review.review_id} />
        </div>
      )}
    </ApiLoading>
  );
};

export default SingleReview;
