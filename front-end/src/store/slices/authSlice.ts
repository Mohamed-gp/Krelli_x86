import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : null, // just a dummy data
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user",JSON.stringify(action.payload))
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user")
      
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
