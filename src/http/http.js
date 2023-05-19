import axios from "axios";

export const tweetsApi = axios.create({
  baseURL: 'https://64673e6a2ea3cae8dc292c6f.mockapi.io',
});