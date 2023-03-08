import { createSlice } from "@reduxjs/toolkit";

import services from "../services/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    msg: "",
    loading: true,
    user: {},
  },
  reducers: {
    setUserRegister(state, action) {
      const responseData = action.payload;
      console.log("actionType: ", action.type);
      console.log("responseData: ", responseData);
    },
  },
});

export const { setUserRegister } = userSlice.actions;

export const registerUser = (data) => {
  return async (dispatch) => {
    const result = await services.register(data);

    dispatch(setUserRegister(result));
  };
};

export default userSlice.reducer;
