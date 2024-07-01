import { API_URL } from "@/routes/consts";
import axios from "axios";

export const fetchBusinesses = () =>
  axios.get(`${API_URL}/services`).then((response) => response.data);