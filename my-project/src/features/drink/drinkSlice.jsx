import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMojito: 20,
  numOfMargarita: 20,
  numOfOldfashioned: 20,
  numOfCosmopolitan: 24,
  numOfPinacolada: 22,
  numOfNegroni: 14,
  numOfEspressomartini: 18,
  numOfMojitomocktail: 12,
  numOfVirginpinacolada: 12,
  numOfShirleytemple: 12,
};

const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    ordered: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "mojito":
          state.numOfMojito--;
          break;
        case "margarita":
          state.numOfMargarita--;
          break;
        case "oldfashioned":
          state.numOfOldfashioned--;
          break;
        case "cosmopolitan":
          state.numOfCosmopolitan--;
          break;
        case "pinacolada":
          state.numOfPinacolada--;
          break;
        case "negroni":
          state.numOfNegroni--;
          break;
        case "espressoMartini":
          state.numOfEspressomartini;
          break;
        case "mojitoMocktail":
          state.numOfMojitomocktail;
          break;
        case "virginPinacolada":
          state.numOfVirginpinacolada--;
          break;
        case "shirleytemple":
          state.numOfShirleytemple--;
          break;
      }
    },
    restocked: (state, action) => {
      const { item } = action.payload;
      switch (item) {
        case "mojito":
          state.numOfMojito += action.payload;
          break;
        case "margarita":
          state.numOfMargarita += action.payload;
          break;
        case "oldfashioned":
          state.numOfOldfashioned += action.payload;
          break;
        case "cosmopolitan":
          state.numOfCosmopolitan += action.payload;
          break;
        case "pinacolada":
          state.numOfPinacolada += action.payload;
          break;
        case "negroni":
          state.numOfNegroni += action.payload;
          break;
        case "espressoMartini":
          state.numOfEspressomartini += action.payload;
          break;
        case "mojitoMocktail":
          state.numOfMojitomocktail += action.payload;
          break;
        case "virginPinacolada":
          state.numOfVirginpinacolada += action.payload;
          break;
        case "shirleytemple":
          state.numOfShirleytemple += action.payload;
          break;
      }
    },
  },
});

export default drinkSlice.reducer;
export const { ordered, restocked } = drinkSlice.actions;
