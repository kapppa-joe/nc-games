import React from "react";

const DisplayDatetime = ({ value }) => {
  return <>{new Date(value).toLocaleString("en-GB")}</>;
};

export default DisplayDatetime;
