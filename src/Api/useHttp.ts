import axios from "axios";
import { useState, useCallback } from "react";
import { ApiNews } from "../utils/interfaceDef";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getNews = useCallback(
    async (url: string, applyData: (data: ApiNews) => void) => {
      setIsLoading(true);
      setError(false);
      try {
        const { data } = await axios.get<ApiNews>(url, {
          headers: {
            Accept: "application/json",
          },
        });

        applyData(data);
        setIsLoading(false);
        // return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
          setError(true);
        } else {
          setError(true);
          console.log(error);
        }
      }
    },
    []
  );
  return {
    isLoading,
    error,
    getNews,
  };
};
