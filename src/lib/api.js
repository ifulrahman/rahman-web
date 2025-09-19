import axios from "axios";

const http = axios.create({ baseURL: "", timeout: 15000 });

http.interceptors.response.use(
  (r) => r,
  (e) => Promise.reject(new Error(e?.response?.data?.message || e.message || "Network error"))
);

export const getAllDoa = async () => (await http.get("/api")).data;

export const getDoaById = async (id) => {
  const { data } = await http.get(`/api/${id}`);
  const item = Array.isArray(data) ? data[0] : data;
  if (!item) throw new Error("Doa tidak ditemukan.");
  return item;
};

export const searchDoa = async (q) => {
  const data = (await http.get(`/api/doa/${encodeURIComponent(q)}`)).data;
  return Array.isArray(data) ? data : [data].filter(Boolean);
};

export const getRandomDoa = async () => {
  const { data } = await http.get("/api/doa/v1/random");
  const item = Array.isArray(data) ? data[0] : data;
  if (!item || !item.id) throw new Error("Gagal mengambil doa acak.");
  return item;
};