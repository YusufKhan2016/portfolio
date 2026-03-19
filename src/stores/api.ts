import axios from 'axios';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const frontendBaseUrl = import.meta.env.VITE_FRONTEND_DOMAIN;
export const baseURL = import.meta.env.VITE_BACKEND_DOMAIN;
export const fileServerUrl = import.meta.env.VITE_BACKEND_DOMAIN;
export const appName = import.meta.env.VITE_APP_NAME;
export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";


//===================== private/public api prefix ==============================

export const prefix = apiBaseUrl + "/";

//===================== users login/logout ==============================
export const userLoginUrl = prefix + "login";
export const userLogoutUrl = prefix + "logout";

export const myWorksUrl = prefix + "my-work";


