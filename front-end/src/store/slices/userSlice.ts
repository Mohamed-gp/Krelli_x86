import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    history: localStorage.getItem("history")
      ? JSON.parse(localStorage.getItem("history") as string)
      : [],

  },
  reducers: {
    appendHistory(state, action) {
      if (state?.history?.length % 2 == 0) {
        state.history.push({
          role: "user",
          parts: [{ text: action?.payload }],
        });
      } else {
        state.history.push({
          role: "model",
          parts: [{ text: action?.payload }],
        });
      }
    },
  },
});

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };
