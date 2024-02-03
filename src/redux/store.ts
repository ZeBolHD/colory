import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import patternReducer from "./pattern/slice";
import colorsReducer from "./colors/slice";

export const store = configureStore({
  reducer: { pattern: patternReducer, colors: colorsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
