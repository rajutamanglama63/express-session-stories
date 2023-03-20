import { createSlice } from "@reduxjs/toolkit";

import services from "../services/story";

const storyControlSlice = createSlice({
  name: "storyControl",
  initialState: {
    msg: "",
  },
  reducers: {
    editStory(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? { ...state, msg: responseData.msg }
        : { ...state, msg: responseData.msg };
    },
  },
});

export const { editStory } = storyControlSlice.actions;

export const storyUpdate = (id, updatedData) => {
  return async (dispatch) => {
    const result = await services.updateStory(id, updatedData);

    dispatch(editStory(result));
  };
};

export default storyControlSlice.reducer;
