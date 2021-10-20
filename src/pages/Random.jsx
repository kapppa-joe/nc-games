import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getAllReviews } from "../utils/api";
import { pickRandom } from "../utils/pickRandom";

const Random = () => {
  const [reviewId, setReviewId] = useState(null);
  useEffect(() => {
    getAllReviews().then(({ reviews }) => {
      const randomReviewId =
        pickRandom(reviews).review_id || (Math.random() * 10) | 0;
      setTimeout(() => setReviewId(randomReviewId), 1500);
    });
  });
  if (reviewId) {
    return <Redirect to={`reviews/${reviewId}`} />;
  }

  return (
    <div class="msgbox">
      <h2>Feeling lucky!</h2>
      <p>Will fetch you a random review shortly. Sit back and enjoy...</p>
    </div>
  );
};

export default Random;
