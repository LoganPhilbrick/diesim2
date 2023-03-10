import { configureStore } from "@reduxjs/toolkit";
import dieSelectionReducer from "./dieSelection";

export const store = configureStore({
  reducer: {
    dieSelection: dieSelectionReducer,
  },
});
