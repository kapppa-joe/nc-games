import React from "react";
import moment from "moment";

const DisplayDatetime = ({ value }) => {
  return <>{moment(value).fromNow()}</>;
};

export default DisplayDatetime;
