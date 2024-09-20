import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      localStorage.getItem("user") == null
        ? null
        : JSON.parse(localStorage.getItem("user") as string), // just a dummy data
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    setWishlist(state, action) {
      state.user.Favorite = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
