import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appState = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    movies: movieReducer,
  },
});
export default appState;
