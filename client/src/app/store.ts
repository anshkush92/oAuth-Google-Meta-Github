import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import toggleCardReducer from "../features/toggleCardExpand/toggleCard";

export const store = configureStore({
  reducer: {
    toggleCard: toggleCardReducer,
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
