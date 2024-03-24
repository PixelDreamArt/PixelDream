import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./features/authorization/authSlice";
import { apiSlice } from "../api/apiSlice";
const rootReducer = combineReducers(
  {
    // user: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  {
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  }
);

export const store = configureStore({
  reducer: rootReducer,
});
export const useAppSelector = useSelector;
