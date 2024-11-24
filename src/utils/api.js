import axios from "axios";

const api = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": 'df36766df4msh611d2126b0e0dd2p1a7b86jsn19e479662678',
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export default api;
