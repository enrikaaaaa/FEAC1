import { fetchBusinesses } from "../../components/business/api";
import { useQuery } from "@tanstack/react-query";

export const BUSINESS_KEY = "BUSINESS";

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};
