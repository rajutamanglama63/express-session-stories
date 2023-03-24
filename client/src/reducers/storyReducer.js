import { createSlice } from "@reduxjs/toolkit";

import services from "../services/story";

const storySlice = createSlice({
  name: "story",
  initialState: [],
  reducers: {
    appendStory(state, action) {
      const responseData = action.payload;

      return responseData.success ? [...state, responseData.story] : null;
    },

    setStory(state, action) {
      const responseData = action.payload;

      return responseData;
    },
  },
});

export const { appendStory, setStory } = storySlice.actions;

export const storyCreation = (story) => {
  return async (dispatch) => {
    const result = await services.createStory(story);

    dispatch(appendStory(result));
  };
};

export const allStories = () => {
  return async (dispatch) => {
    const result = await services.getStories();

    dispatch(setStory(result));
  };
};

export default storySlice.reducer;
