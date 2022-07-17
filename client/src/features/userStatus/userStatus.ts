// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test --------------------- Planning the initial State ----------------
import { userData } from "../../types/userData.type";

const initialState = {
  isLoggedIn: false,
  userData: {} as userData,
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
    setUserData: (state, action: PayloadAction<userData>) => {
      state.userData = action.payload;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { loginUser, logoutUser, setUserData } = userStatusSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default userStatusSlice.reducer;
