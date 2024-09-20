import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { userReducer } from "./slices/userSlice";
import { propertiesReducer } from "./slices/propertiesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    properties: propertiesReducer,
  },
});

export default store;

export type IRootState = ReturnType<typeof store.getState>;
