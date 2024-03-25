import { createSlice } from "@reduxjs/toolkit";

export const authSlice2 = createSlice({
  name: "auth",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = authSlice2.actions;

export default authSlice2.reducer;
