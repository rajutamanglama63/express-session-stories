import axios from "axios";

const baseUrl = "/api/user";

const register = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);

    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

export default { register };
