import { API_URL } from "../../routes/consts";
import axios from "axios";

export const fetchBusinesses = () =>
  axios.get(`${API_URL}/services`).then((response) => response.data);

export const fetchApointments = () =>
  axios.get(`${API_URL}/appointments`).then((response) => response.data);

export const addTime = (id: string, time: string) =>
  axios.put(`${API_URL}/appointments/update/${id}`, { time });

export const fetchBusiness = (id: string) =>
  axios.get(`${API_URL}/services/${id}`).then((response) => response.data);
