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
    userRegister(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? {
            ...state,
            msg: responseData.msg,
            loading: false,
            user: responseData.newUser,
          }
        : { ...state, msg: responseData.msg, loading: false, user: {} };
    },

    userLogin(state, action) {
      const responseData = action.payload;

      return responseData.success
        ? {
            ...state,
            msg: responseData.msg,
            loading: false,
            user: responseData.user,
          }
        : { ...state, msg: responseData.msg, loading: false, user: {} };
    },

    userLogout(state, action) {
      const responseData = action.payload;
      console.log("responseData: ", responseData);

      return responseData.success
        ? { ...state, msg: responseData.msg, loading: false, user: {} }
        : { ...state, msg: responseData.msg, loading: false, user: {} };
    },
  },
});

export const { userRegister, userLogin } = userSlice.actions;

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

    dispatch();
  };
};

export default userSlice.reducer;