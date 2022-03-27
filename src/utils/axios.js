import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
