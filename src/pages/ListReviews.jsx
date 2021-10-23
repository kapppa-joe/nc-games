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
import Pagination from "../components/Pagination";

const ListReviews = () => {
  const query = useQuery();
  const history = useHistory();

  const { data, err, isLoading } = useApiCall(
    () => getAllReviews(query),
    [query],
    []
  );
  const { reviews, total_count } = data;

  const [sortOptionSelected, setSortOptionSelected] = useState(
    sortOptionsNames[0]
  );

  const resultsPerPage = 10;
  const maxPage = Math.ceil(total_count / resultsPerPage);
  const [page, setPage] = useState(1);

  let describeResults = `Total ${total_count} results`;
  if (maxPage > 1) {
    describeResults += `, showing page ${page} of ${maxPage}`;
  }

  const searchTerm = query && query.get("search");

  useEffect(() => {
    const newQueryStr = setSortOptionToQueryStr(query, sortOptionSelected);
    setPage(1); // reset to page 1 when change sort method.
    history.push({ search: newQueryStr });
  }, [sortOptionSelected]);

  useEffect(() => {
    const newQuery = Object.fromEntries(query);
    newQuery.limit = resultsPerPage;
    newQuery.p = page;
    const newQueryStr =
      `?` +
      Object.entries(newQuery)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    history.push({ search: newQueryStr });
  }, [page]);

  //
  // render part starts here.
  return (
    <ApiLoading isLoading={isLoading} err={err}>
      {reviews && (
        <section id="list-reviews">
          <SortBar
            sortOptionSelected={sortOptionSelected}
            setSortOptionSelected={setSortOptionSelected}
          />
          <div className="reviews-container">
            <em>{describeResults}</em>
            {maxPage > 1 && (
              <Pagination maxPage={maxPage} page={page} setPage={setPage} />
            )}
            {reviews.map((review) => {
              return (
                <Review
                  key={review.review_id}
                  review={review}
                  generateLink={true}
                  searchTerm={searchTerm}
                />
              );
            })}
          </div>
          {maxPage > 1 && (
            <Pagination maxPage={maxPage} page={page} setPage={setPage} />
          )}
        </section>
      )}
    </ApiLoading>
  );
};

export default ListReviews;
