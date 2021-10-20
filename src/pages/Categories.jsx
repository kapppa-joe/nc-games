import React from "react";
import { Link } from "react-router-dom";

import { getAllCategories } from "../utils/api";
import useApiCall from "../hooks/useApiCall";
import ApiLoading from "../components/ApiLoading";

const Categories = () => {
  const {
    data: categories,
    isLoading,
    err,
  } = useApiCall(getAllCategories, [], []);

  return (
    <ApiLoading err={err} isLoading={isLoading}>
      <section id="categories">
        <div className="card-container">
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  key={category.slug}
                  to={`/reviews?category=${category.slug}`}
                >
                  <div className="card" key={category.slug}>
                    {category.slug}
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </ApiLoading>
  );
};

export default Categories;
