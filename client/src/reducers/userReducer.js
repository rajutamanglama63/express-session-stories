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

      return responseData.success
        ? {
            ...state,
            msg: responseData.msg,
            loading: false,
            user: responseData.newUser,
          }
        : { ...state, msg: responseData.msg, loading: false, user: {} };
    },

    setUserLogin(state, action) {},
  },
});

export const { setUserRegister, setUserLogin } = userSlice.actions;

export const registerUser = (data) => {
  return async (dispatch) => {
    const result = await services.register(data);

    dispatch(setUserRegister(result));
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    const result = await services.login(data);

    dispatch(setUserLogin(result));
  };
};

export default userSlice.reducer;
