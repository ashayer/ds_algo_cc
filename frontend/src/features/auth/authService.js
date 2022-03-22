import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  const visited = localStorage.getItem("visited");
  if (response.data) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
    if (!visited) {
      localStorage.setItem("visited", false);
    }
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  if (response.data) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
