import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./Slices/userLoginSlice";

export const store = configureStore({
  reducer: { userLogin: userLoginReducer },
});
