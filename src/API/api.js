import axios from "axios";

export const api = axios.create({
  baseURL: "https://e-xpress-backend.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});