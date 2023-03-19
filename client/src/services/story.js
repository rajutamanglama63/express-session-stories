import axios from "axios";

const baseUrl = "/api/story";

const createStory = async (story) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, story);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getStories = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { createStory, getStories };
