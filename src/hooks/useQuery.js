import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useQuery = () => {
  const [query, setQuery] = useState(null);
  let location = useLocation();
  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location]);
  return query;
};

export default useQuery;
