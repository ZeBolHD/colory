import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Color = string;

const colors: Color[] = [
  "#0057FF",
  "#FFB45C",
  "#67F45B",
  "#00E0FF",
  "#FF0000",
  "#B4CEFF",
  "#E5E6FF",
  "#CAE9FF",
];

interface ColorsState {
  colors: Color[];
  selectedColors: Color[];
  gradientType: "linear" | "radial";
}

const initialState: ColorsState = {
  colors: colors,
  selectedColors: [],
  gradientType: "linear",
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    selectColor(state, action: PayloadAction<Color>) {
      state.selectedColors.push(action.payload);
    },

    removeColor(state, action: PayloadAction<number>) {
      state.selectedColors.splice(action.payload, 1);
    },

    randomizeColors(state) {
      state.selectedColors = [];

      for (let i = 0; i < 4; i++) {
        const color =
          state.colors[Math.floor(Math.random() * state.colors.length)];
        state.selectedColors.push(color);
      }
    },

    setGradientType(state, action: PayloadAction<ColorsState["gradientType"]>) {
      state.gradientType = action.payload;
    },

    resetColors(state) {
      state.selectedColors = [];
    },
  },
});

export const {
  selectColor,
  randomizeColors,
  removeColor,
  setGradientType,
  resetColors,
} = colorsSlice.actions;

export default colorsSlice.reducer;
