export interface Type {
  name: "desayuno" | "almuerzo" | "comida" | "cena" | "postre";
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Step {
  step: string;
  order: number;
}

export interface RecipeMainData {
  name: string;
  author: string;
  types: Type[];
  ingredients: Ingredient[];
  steps: Step[];
  elaborationTime: string;
}

export interface RecipeStructure extends RecipeMainData {
  id: string;
  urlSlug: string;
  image: string;
}

export interface RecipesState {
  recipes: RecipeStructure[];
}
