import { createSlice } from "@reduxjs/toolkit";

import services from "../services/story";

const storySlice = createSlice({
  name: "story",
  initialState: [],
  reducers: {
    setStory(state, action) {
      const responseData = action.payload;

      return responseData.success ? [...state, responseData] : null;
    },
  },
});

export const { setStory } = storySlice.actions;

export const storyCreation = (story) => {
  return async (dispatch) => {
    const result = await services.createStory(story);

    dispatch(setStory(result));
  };
};

export default storySlice.reducer;
