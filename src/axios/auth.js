import axios from "axios";

export const authApi = axios.create({
  baseURL: process.env.REACT_APP_LOGIN_API_URL,
  headers: { "Content-Type": "application/json" },
});

authApi.interceptors.request.use();
