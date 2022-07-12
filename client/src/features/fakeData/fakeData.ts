// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FakeData } from "../../types/fakeData.type";

// Test ---------------------- Initial State  ----------------------
const initialState = {} as FakeData;

// Test --------------------- Creating the slice ------------------------
export const fakeDataSlice = createSlice({
  name: "fakeData",
  initialState,
  reducers: {
    getFakeData: (state, action: PayloadAction<FakeData>) => {
      state.heading = action.payload.heading;
      state.paragraph = action.payload.paragraph;
      state.chips = action.payload.chips;
      state.names = action.payload.names;
      state.imagesUrl = action.payload.imagesUrl;
      state.avatars = action.payload.avatars;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { getFakeData } = fakeDataSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default fakeDataSlice.reducer;
