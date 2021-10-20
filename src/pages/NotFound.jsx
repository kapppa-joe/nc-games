import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  }, []);

  return (
    <section id="not-found">
      <h1>404</h1>
      <p>Ooops. The page you want seem to be not existing (yet) :(</p>
      <p>
        No worries. I will direct you to the <Link to="/">home page</Link> in a
        few seconds.
      </p>
    </section>
  );
};

export default NotFound;
