import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCaprese: 12,
  numOfSpinach: 16,
  numOfChickenSatay: 32,
  numOfNachos: 24,
  numOfShrimp: 40,
  numOfMushrooms: 20,
  numOfCalamari: 28,
  numOfWings: 28,
};

const snackSlice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    ordered: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "caprese":
          state.numOfCaprese--;
          break;
        case "spinach":
          state.numOfSpinach--;
          break;
        case "chickenSatay":
          state.numOfChickenSatay--;
          break;
        case "nachos":
          state.numOfNachos--;
          break;
        case "shrimp":
          state.numOfShrimp--;
          break;
        case "mushrooms":
          state.numOfMushrooms--;
          break;
        case "calamari":
          state.numOfCalamari--;
          break;
        case "wings":
          state.numOfWings--;
          break;
        default:
          break;
      }
    },
    restocked: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "caprese":
          state.numOfCaprese += action.payload;
          break;
        case "spinach":
          state.numOfSpinach += action.payload;
          break;
        case "chickenSatay":
          state.numOfChickenSatay += action.payload;
          break;
        case "nachos":
          state.numOfNachos += action.payload;
          break;
        case "shrimp":
          state.numOfShrimp += action.payload;
          break;
        case "mushroom":
          state.numOfMushrooms += action.payload;
          break;
        case "calamari":
          state.numOfCalamari += action.payload;
          break;
        case "wings":
          state.numOfWings += action.payload;
      }
    },
  },
});

export default snackSlice.reducer;
export const { ordered, restocked } = snackSlice.actions;
