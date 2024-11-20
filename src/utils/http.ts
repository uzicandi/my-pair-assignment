import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

const http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default http;
