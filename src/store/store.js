import { configureStore } from "@reduxjs/toolkit";
import assessorReducer from "../features/assessor/assessorSlice";

export const store = configureStore({
  reducer: { assessor: assessorReducer },
});
