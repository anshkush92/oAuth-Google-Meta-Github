import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import fakeDataReducer from "../features/fakeData/fakeData";

export const store = configureStore({
  reducer: {
    fakeData: fakeDataReducer,
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
