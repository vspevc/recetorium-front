import axios, { AxiosInstance } from "axios";

const recetoriumApi = (): AxiosInstance => {
  const { REACT_APP_API_URL: apiUrl } = process.env;
  return axios.create({ baseURL: apiUrl, timeout: 10000 });
};

export default recetoriumApi;
