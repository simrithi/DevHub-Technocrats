import axios from "axios";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000" });

export const getCoins = () => api.get("/api/coins").then((r) => r.data);
export const getCoin = (id) => api.get(`/api/coins/${id}`).then((r) => r.data);
export const getAlerts = () => api.get("/api/alerts").then((r) => r.data);
export const getPrediction = (id) => api.get(`/api/predictions/${id}`).then((r) => r.data);
