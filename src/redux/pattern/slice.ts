import { Pattern } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatternState {
  pattern: Pattern;
  zoom: number;
  blur: number;
  opacity: number;
  rotate: number;
  mask: boolean;
}

const initialState: PatternState = {
  pattern: Pattern.Instruments,
  zoom: 1,
  blur: 0,
  opacity: 1,
  rotate: 0,
  mask: false,
};

const patternSlice = createSlice({
  name: "pattern",
  initialState,
  reducers: {
    setPattern(state, action: PayloadAction<Pattern>) {
      state.pattern = action.payload;
    },
    setZoom(state, action: PayloadAction<number>) {
      state.zoom = action.payload;
    },
    setBlur(state, action: PayloadAction<number>) {
      state.blur = action.payload;
    },
    setOpacity(state, action: PayloadAction<number>) {
      state.opacity = action.payload;
    },
    setRotate(state, action: PayloadAction<number>) {
      state.rotate = action.payload;
    },
    setMask(state, action: PayloadAction<boolean>) {
      state.mask = action.payload;
    },
  },
});

export const { setBlur, setPattern, setOpacity, setRotate, setZoom, setMask } =
  patternSlice.actions;

export default patternSlice.reducer;
