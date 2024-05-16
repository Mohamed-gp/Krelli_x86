import axios from "axios";

const env = "production";

// const url = "http://localhost:3000/"
const url = "https://krelli-x86-1.onrender.com";

const customAxios = axios.create({
  baseURL: "https://krelli-x86-1.onrender.com/",
  credentials: "include",
  withCredentials: true,
});

export default customAxios;
