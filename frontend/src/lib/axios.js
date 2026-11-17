import axios from 'axios';

const backendUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://chatify-backend-p4zw.onrender.com");
const cleanUrl = backendUrl.replace(/\/+$/, '').replace(/\/api$/, '');

export const axiosInstance = axios.create({
    baseURL: `${cleanUrl}/api`,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});