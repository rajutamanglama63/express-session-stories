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
    delStory(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? { ...state, msg: responseData.msg }
        : { ...state, msg: responseData.msg };
    },
  },
});

export const { editStory, delStory } = storyControlSlice.actions;

export const storyUpdate = (id, updatedData) => {
  return async (dispatch) => {
    const result = await services.updateStory(id, updatedData);

    dispatch(editStory(result));
  };
};

export const storyDelete = (id) => {
  return async (dispatch) => {
    const result = await services.deleteStory(id);

    dispatch(delStory(result));
  };
};

export default storyControlSlice.reducer;
