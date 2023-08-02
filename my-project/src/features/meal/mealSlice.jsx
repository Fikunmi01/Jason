import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfSpicytofu: 32,
  numOfLamb: 50,
  numOfSalmon: 40,
  numOfBbqribs: 44,
  numOfChickenparmesan: 32,
  numOfShrimppad: 35,
  numOfMushroomrisotto: 56,
  numOfBeef: 40,
  numOfVeggie: 38,
  numOfCajun: 60,
};

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    ordered: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "spicytofu":
          state.numOfSpicytofu--;
          break;
        case "lamb":
          state.numOfLamb--;
          break;
        case "salmon":
          state.numOfSalmon--;
          break;
        case "bbqribs":
          state.numOfBbqribs--;
          break;
        case "chickenparmesan":
          state.numOfChickenparmesan--;
          break;
        case "shrimppad":
          state.numOfShrimppad--;
          break;
        case "mushroomrisotto":
          state.numOfMushroomrisotto--;
          break;
        case "beef":
          state.numOfBeef--;
          break;
        case "veggie":
          state.numOfVeggie--;
          break;
        case "cajun":
          state.numOfCajun--;
          break;
      }
    },
    restocked: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "spicytofu":
          state.numOfSpicytofu += action.payload;
          break;
        case "lamb":
          state.numOfLamb += action.payload;
          break;
        case "salmon":
          state.numOfSalmon += action.payload;
          break;
        case "bbqribs":
          state.numOfBbqribs += action.payload;
          break;
        case "chickenparmesan":
          state.numOfChickenparmesan += action.payload;
          break;
        case "shrimppad":
          state.numOfShrimppad += action.payload;
          break;
        case "mushroomrisotto":
          state.numOfMushroomrisotto += action.payload;
          break;
        case "beef":
          state.numOfBeef += action.payload;
          break;
        case "veggie":
          state.numOfVeggie += action.payload;
          break;
        case "cajun":
          state.numOfCajun += action.payload;
          break;
      }
    },
  },
});

export default mealSlice.reducer;
export const { ordered, restocked } = mealSlice.actions;
