// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Structure of the state -------------------
const initialState = {
  isExpanded: false,
};

// Test --------------------- Creating the slice ------------------------
export const toggleCardSlice = createSlice({
  name: "toggleCard",
  initialState,
  reducers: {
    onClickToggleExpand: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { onClickToggleExpand } = toggleCardSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default toggleCardSlice.reducer;
