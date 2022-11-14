import axios from "axios";

export default axios.create({
  baseURL: "http://admin.infinity-versestudioz.xyz/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
