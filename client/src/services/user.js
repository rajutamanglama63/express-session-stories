import axios from "axios";

const baseUrl = "/api/user";

const register = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const login = async (loginCredentials) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, loginCredentials);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const profile = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const allUser = async () => {
  try {
    const response = await axios.get(baseUrl);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${baseUrl}/logout`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { register, login, profile, logout, allUser };
