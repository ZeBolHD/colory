import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import patternReducer from "./pattern/slice";

export const store = configureStore({
  reducer: { pattern: patternReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
