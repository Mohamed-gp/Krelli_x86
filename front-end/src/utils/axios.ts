import axios from "axios";

const customAxios = axios.create({
  baseURL:
    import.meta.env.VITE_ENV == "development"
      ? "http://localhost:3000/api"
      : "https://krelli.production-server.tech/api",
  // baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default customAxios;
