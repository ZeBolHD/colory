import { RootState } from "./store";

export const selectPattern = (state: RootState) => state.pattern;
export const selectColors = (state: RootState) => state.colors;
