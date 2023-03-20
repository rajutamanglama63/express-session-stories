import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "./reducers/allUserReducer";
import storyControlReducer from "./reducers/storyControlReducer";
import storyReducer from "./reducers/storyReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    story: storyReducer,
    storyControl: storyControlReducer,
    users: allUserReducer,
  },
});

export default store;
