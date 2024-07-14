import {
  fetchBusinessById,
  fetchBusinesses,
} from "../../components/business/api";

import { useQuery } from "@tanstack/react-query";

export const BUSINESS_KEY = "BUSINESS";

export const useBusinesses = () => {
  return useQuery({
    queryKey: [BUSINESS_KEY],
    queryFn: fetchBusinesses,
  });
};

export const useBusiness = (id: string) => {
  return useQuery({
    queryKey: [BUSINESS_KEY, id],
    queryFn: () => fetchBusinessById(id),
    enabled: !!id,
  });
};
