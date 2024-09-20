import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties:
      localStorage.getItem("properties") == null
        ? []
        : JSON.parse(localStorage.getItem("properties") as string), // just a dummy data
  },
  reducers: {
    setPropeties(state, action) {
      state.properties = action.payload;
      localStorage.setItem("properties", JSON.stringify(action.payload));
    },
  },
});

const propertiesActions = propertiesSlice.actions;
const propertiesReducer = propertiesSlice.reducer;

export { propertiesActions, propertiesReducer };
