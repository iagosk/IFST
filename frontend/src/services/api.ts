import axios from 'axios';

const api = await axios.create({
  baseURL: "http://localhost:3000/",
});

export default api;