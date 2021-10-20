import React from "react";
import { sortOptionsNames } from "../utils/sortOptions";

const SortBar = ({ sortOptionSelected, setSortOptionSelected }) => {
  return (
    <div>
      Sort by:
      <select
        class="sort-bar"
        value={sortOptionSelected}
        onChange={(e) => setSortOptionSelected(e.target.value)}
      >
        {sortOptionsNames.map((sortOption) => (
          <option value={sortOption} key={sortOption}>
            {sortOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;
