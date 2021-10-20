import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import useQuery from "../hooks/useQuery";
import useApiCall from "../hooks/useApiCall";

import Review from "../components/Review";
import ApiLoading from "../components/ApiLoading";
import SortBar from "../components/SortBar";

import { getAllReviews } from "../utils/api";
import {
  sortOptionsNames,
  setSortOptionToQueryStr,
} from "../utils/sortOptions";

import "../styles/Reviews.css";

const ListReviews = () => {
  const query = useQuery();
  const { data, err, isLoading } = useApiCall(
    () => getAllReviews(query),
    [query],
    []
  );
  const { reviews, total_count } = data;

  const [sortOptionSelected, setSortOptionSelected] = useState(
    sortOptionsNames[0]
  );

  const history = useHistory();

  useEffect(() => {
    const newQueryStr = setSortOptionToQueryStr(query, sortOptionSelected);
    history.push({ search: newQueryStr });
  }, [sortOptionSelected]);

  return (
    <ApiLoading isLoading={isLoading} err={err}>
      {reviews && (
        <section id="list-reviews">
          <SortBar
            sortOptionSelected={sortOptionSelected}
            setSortOptionSelected={setSortOptionSelected}
          />
          <div className="reviews-container">
            <h2>Total results: {total_count}</h2>
            {reviews.map((review) => {
              // console.log(review);
              return <Review key={review.review_id} review={review} />;
            })}
          </div>
        </section>
      )}
    </ApiLoading>
  );
};

export default ListReviews;
