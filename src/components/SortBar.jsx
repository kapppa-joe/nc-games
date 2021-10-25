import React from "react";
import { sortOptionsNames } from "../utils/sortOptions";

import "../styles/SortBar.css";

const SortBar = ({ sortOptionSelected, setSortOptionSelected }) => {
  return (
    <div className="sort-bar-wrapper">
      <span className="select">
        <label for="sort-bar">Sort by: </label>
        <select
          id="sort-bar"
          className="sort-bar"
          value={sortOptionSelected}
          onChange={(e) => setSortOptionSelected(e.target.value)}
        >
          {sortOptionsNames.map((sortOption) => (
            <option value={sortOption} key={sortOption}>
              {sortOption}
            </option>
          ))}
        </select>
        <svg>
          <use href="#select-arrow-down"></use>
        </svg>
      </span>
      <svg class="sprites">
        <symbol id="select-arrow-down" viewbox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default SortBar;
