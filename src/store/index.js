import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from "../features/customization/customizationSlice";

// ===============================|| REDUX - MAIN STORE ||=============================== //

export const store = configureStore({
  reducer: {
    customization: customizationReducer
  },
});
