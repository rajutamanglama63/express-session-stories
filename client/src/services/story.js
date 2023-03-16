import axios from "axios";

const baseUrl = "/api/story";

const createStory = async (story) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, story);

    return response.data;
  } catch (error) {
    console.log("err from server: ", error);
    return error.response.data;
  }
};

export default { createStory };
