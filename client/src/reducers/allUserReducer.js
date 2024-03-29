import { createSlice } from "@reduxjs/toolkit";

import services from "../services/user";

const allUserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      const responseData = action.payload;

      return responseData;
    },
  },
});

export const { setUsers } = allUserSlice.actions;

export const getAllUser = () => {
  return async (dispatch) => {
    const result = await services.allUser();

    dispatch(setUsers(result));
  };
};

export default allUserSlice.reducer;
