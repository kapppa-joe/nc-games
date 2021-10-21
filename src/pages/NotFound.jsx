import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      // history.push("/");
    }, 5000);
  }, []);

  return (
    <section id="not-found">
      <div className="msgbox">
        <h1 className="primary">404</h1>
        <h3>Ooops. The page you want seem to be not existing (yet) :(</h3>
        <p>
          But no worries! Sit back and I will direct you to the{" "}
          <Link to="/">home page</Link> in a few seconds.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
