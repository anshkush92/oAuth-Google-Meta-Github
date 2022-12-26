import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import fakeDataReducer from "../features/fakeData/fakeData";
import userStatusReducer  from "../features/userStatus/userStatus";

export const store = configureStore({
  reducer: {
    fakeData: fakeDataReducer,
    userStatus: userStatusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
