import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appState = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
  },
});
export default appState;
