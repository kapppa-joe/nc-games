import { useState, useEffect } from "react";

const useApiCall = (apiCall, dependency = [], initValue = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(initValue);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    apiCall()
      .then((dataFromApi) => {
        setData(dataFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErr({
            status: 404,
            msg: "Oops, seems that we couldn't get the page you want. Maybe try another page?",
          });
        } else if (err.response.status === 400) {
          setErr({
            status: 400,
            msg: "Sorry, seems that the server can't understand your request. Maybe try another one?",
          });
        } else {
          setErr({
            status: 500,
            msg: setErr(
              "Sorry, something went wrong :(  ...Maybe try again later?"
            ),
          });
        }
        setIsLoading(false);
      });
  }, [...dependency]);
  return { data, err, isLoading };
};

export default useApiCall;
