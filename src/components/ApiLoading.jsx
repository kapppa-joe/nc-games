import React from "react";
import { Redirect } from "react-router";

import "../styles/Loading.css";
import { ReactComponent as LoadingAnimation } from "../assets/svg/loading.svg";

const ApiLoading = ({ isLoading, err, children }) => {
  if (isLoading) {
    return (
      <div className="loader">
        <LoadingAnimation />
      </div>
    );
  }
  if (err) {
    if (err.status && err.status === 404) {
      return <Redirect to="/NotFound" />;
    } else {
      return <div>{err.msg}</div>;
    }
  }
  return children;
};

export default ApiLoading;
