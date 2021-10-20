import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useQuery = () => {
  let location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));
  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location]);
  return query;
};

export default useQuery;
