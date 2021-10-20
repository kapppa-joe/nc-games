import React from "react";
import ListReviews from "./ListReviews";

const Search = () => {
  return (
    <div>
      <h2>
        Search results for <span class="search-term"></span>
      </h2>
      <ListReviews />
    </div>
  );
};

export default Search;
