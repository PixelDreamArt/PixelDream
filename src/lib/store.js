import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./features/user/userSlice";

const rootReducer = combineReducers({
  user: authReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
export const useAppSelector = useSelector;
