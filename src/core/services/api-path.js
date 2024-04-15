import axios from "axios";

const apiPathUri = axios.create({
  baseURL: "http://localhost:3000/v1/api/",
});

export default apiPathUri;
