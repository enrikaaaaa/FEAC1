import { API_URL } from "@/routes/consts";
import axios from "axios";

export const loginUser = (formValues) =>
  axios
    .post(`${API_URL}/auth/login`, formValues)
    .then((response) => response.data);

export const registerUser = (formValues) =>
  axios
    .post(`${API_URL}/auth/register`, formValues)
    .then((response) => response.data);
