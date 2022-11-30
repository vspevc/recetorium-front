import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { recipesReducer } from "./features/recipesSlice/recipesSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    recipes: recipesReducer,
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
