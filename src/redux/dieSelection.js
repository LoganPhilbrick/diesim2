import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfDice: 1,
  numberOfSides: 4,
  rollResults: null,
  history: [],
};

export const dieSelectionSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setNumberOfDice: (state, { payload }) => {
      state.numberOfDice = payload;
    },
    setNumberOfSides: (state, { payload }) => {
      state.numberOfSides = payload;
    },
    calculateRolls: (state) => {
      state.rollResults = Math.floor(Math.random() * state.numberOfSides + 1) * state.numberOfDice;
    },
    trackHistory: (state) => {
      state.history = [`${state.numberOfDice} x D${state.numberOfSides} = ${state.rollResults}`, ...state.history];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNumberOfDice, setNumberOfSides, calculateRolls, trackHistory } = dieSelectionSlice.actions;

export default dieSelectionSlice.reducer;
