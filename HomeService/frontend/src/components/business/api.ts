import axios, { AxiosInstance } from "axios";

import { API_URL } from "../../routes/consts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBusinesses = (id?: string | undefined) =>
  axiosInstance.get("/services").then((response) => response.data);

export const fetchAppointments = () =>
  axiosInstance.get("/appointments").then((response) => response.data);

export const addTime = (id: string, time: string) =>
  axiosInstance.put(`/appointments/update/${id}`, { time });

export const fetchBusinessById = (id: string) =>
  axiosInstance.get(`/services/${id}`).then((response) => response.data);
