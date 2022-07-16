// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Planning the initial State ----------------
const initialState = {
  isLoggedIn: false,
};

// Test --------------------- Creating the slice ------------------------
export const userStatusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { loginUser, logoutUser } = userStatusSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default userStatusSlice.reducer;
