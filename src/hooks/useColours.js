import { useQuery } from "react-query";
import { fetchColours } from "queries/colours";

export const useColours = (options = {}) => {
  const colours = useQuery("colours", fetchColours, options);

  return colours;
};
