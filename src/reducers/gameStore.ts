import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./gameSlice";
export const store = configureStore({
  reducer: gameSlice.reducer,
});
export type RootState = ReturnType<typeof store.getState>;
