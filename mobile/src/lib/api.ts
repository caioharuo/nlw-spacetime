import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.24.114.234:3333",
});
