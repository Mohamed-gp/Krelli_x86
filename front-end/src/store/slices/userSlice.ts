import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user: {listing : []}, // just a dummy data
  },
  reducers: {
    rent(state, action) {
      state.user.listing = action.payload;
    },

  },
});

const authActions = userSlice.actions;
const authReducer = userSlice.reducer;

export { authActions, authReducer };
