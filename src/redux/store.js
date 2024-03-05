import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const makeStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
