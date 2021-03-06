import React from "react";
import { Link } from "react-router-dom";

import { getAllCategories } from "../utils/api";
import useApiCall from "../hooks/useApiCall";
import ApiLoading from "../components/ApiLoading";

import "../styles/Categories.css";

const Categories = () => {
  const {
    data: categories,
    isLoading,
    err,
  } = useApiCall(getAllCategories, [], []);

  return (
    <ApiLoading err={err} isLoading={isLoading}>
      <section id="categories">
        <div className="card-container pure-g">
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  key={category.slug}
                  to={`/reviews?category=${category.slug}`}
                  className="pure-u-1 pure-u-lg-1-3 pure-u-xl-1-4"
                >
                  <div className="card category" key={category.slug}>
                    <h3>{category.slug}</h3>
                    <small>{category.description}</small>
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
