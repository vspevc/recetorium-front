import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesState, RecipeStructure } from "./types";

export const recipesInitialState: RecipesState = {
  recipes: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: recipesInitialState,
  reducers: {
    loadRecipes: (currentState, action: PayloadAction<RecipeStructure[]>) => ({
      ...currentState,
      recipes: action.payload,
    }),
  },
});

export const recipesReducer = recipesSlice.reducer;

export const { loadRecipes: loadRecipesActionCreator } = recipesSlice.actions;
