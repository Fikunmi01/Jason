import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../features/meal/mealSlice";
import snackReducer from "../features/snack/snackSlice";
import drinkReducer from "../features/drink/drinkSlice";

const store = configureStore({
  reducer: {
    meal: mealReducer,
    snack: snackReducer,
    drink: drinkReducer,
  },
});

export default store;
