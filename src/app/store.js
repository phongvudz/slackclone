import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../feautures/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
