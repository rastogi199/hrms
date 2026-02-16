import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-backend-xxuu.onrender.com/api/"
});

export default API;


