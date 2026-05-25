import axios from "axios";

const API_URL = "https://henesisbackend-production.up.railway.app/";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}users`, userData);
  return response.data;
};

// Función para login
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}users/login`, credentials);
    return response.data;
};