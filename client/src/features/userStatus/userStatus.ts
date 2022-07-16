// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test --------------------- Planning the initial State ----------------
import { googleUserData } from "../../types/googleUserData.type";

const initialState = {
  isLoggedIn: false,
  googleUserData: {} as googleUserData,
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
    setUserData: (state, action: PayloadAction<googleUserData>) => {
      state.googleUserData = action.payload;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { loginUser, logoutUser, setUserData } = userStatusSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default userStatusSlice.reducer;
