import axios from "axios";

const customAxios = axios.create({
  baseURL:
    import.meta.env.VITE_ENV == "development"
      ? "http://localhost:3001/api"
      : "https://krelli1.production-server.tech/api",
  withCredentials: true,
});

export default customAxios;
