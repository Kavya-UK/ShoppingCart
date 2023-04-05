import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "./ShoppingCartSlice";
export const store = configureStore({
  reducer: {
    ShoppingCart:ShoppingCartSlice
  },
});
