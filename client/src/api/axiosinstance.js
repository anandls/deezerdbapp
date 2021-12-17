import axios from "axios";
import { BASE_URL } from "../constants";

const axiosClient = axios.create();
axiosClient.defaults.baseURL = BASE_URL;

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 2000;

export { axiosClient };
