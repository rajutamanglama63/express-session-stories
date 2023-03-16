import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./reducers/storyReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    story: storyReducer,
  },
});

export default store;
