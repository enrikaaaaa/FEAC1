import {
  fetchBusinessById,
  fetchBusinesses,
  fetchByUser,
} from "../../components/business/api";

import { useQuery } from "@tanstack/react-query";

export const BUSINESS_KEY = "BUSINESS";
export const APPOINTMENTS_KEY = "APPOINTMENTS";

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

export const useAppointments = (email: string | undefined) => {
  return useQuery({
    queryKey: [APPOINTMENTS_KEY],
    queryFn: fetchByUser,
  });
};
