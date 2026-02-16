import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-l19d.onrender.com/api/"
});

export default API;


