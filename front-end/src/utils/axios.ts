import axios from "axios";

// const url = "http://localhost:3000/"
// const url = "https://krelli-x86-1.onrender.com";
const customAxios = axios.create({
  // baseURL: "https://krelli-x86-1.onrender.com/",
  baseURL: "https://krelli-x86.onrender.com/",
  // baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default customAxios;
