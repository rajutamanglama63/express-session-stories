import { createSlice } from "@reduxjs/toolkit";

import services from "../services/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    msg: "",

    user: {},
  },
  reducers: {
    userRegister(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? {
            ...state,
            msg: responseData.msg,

            user: responseData.newUser,
          }
        : { ...state, msg: responseData.msg, user: {} };
    },

    userLogin(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? {
            ...state,
            msg: responseData.msg,

            user: responseData.user,
          }
        : { ...state, msg: responseData.msg, user: {} };
    },

    userLogout(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? { ...state, msg: responseData.msg, user: {} }
        : { ...state, msg: responseData.msg, user: {} };
    },
  },
});

export const { userRegister, userLogin, userLogout } = userSlice.actions;

export const registerUser = (data) => {
  return async (dispatch) => {
    const result = await services.register(data);

    dispatch(userRegister(result));
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const result = await services.login({ email, password });

    dispatch(userLogin(result));
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    const result = await services.logout();

    dispatch(userLogout(result));
  };
};

export default userSlice.reducer;
