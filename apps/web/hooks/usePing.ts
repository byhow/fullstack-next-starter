/* Show user owned tokens of a contract */
import useSWR from "swr";

export const useOwnedTokens = () => {
  const { data, error } = useSWR(`/api/ping`, (url: string) =>
    fetch(url).then((res) => res.json()),
  );

  return {
    data,
    error,
  };
};
