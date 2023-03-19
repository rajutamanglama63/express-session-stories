import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./reducers/allUserReducer";
import storyReducer from "./reducers/storyReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    story: storyReducer,
    users: allUserReducer,
  },
});

export default store;
