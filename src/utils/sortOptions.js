const sortOptions = Object.freeze([
  { name: "Most recent", params: { sort_by: "created_at", order: "desc" } },
  {
    name: "Most commented",
    params: { sort_by: "comment_count", order: "desc" },
  },
  { name: "Highest votes", params: { sort_by: "votes", order: "desc" } },
  { name: "Least recent", params: { sort_by: "created_at", order: "asc" } },
  {
    name: "Least commented",
    params: { sort_by: "comment_count", order: "asc" },
  },
  { name: "Lowest votes", params: { sort_by: "votes", order: "asc" } },
]);

export const sortOptionsNames = sortOptions.map((obj) => obj.name);

export function setSortOptionToQueryStr(URLSearchParams, sortOptionSelected) {
  const newObj = Object.fromEntries(URLSearchParams);

  if (sortOptionsNames.includes(sortOptionSelected)) {
    const paramsToSet = sortOptions.find(
      (obj) => obj.name === sortOptionSelected
    ).params;
    for (const key in paramsToSet) {
      newObj[key] = paramsToSet[key];
    }
  }
  return (
    "?" +
    Object.entries(newObj)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
}
