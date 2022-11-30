interface Type {
  name: "desayuno" | "almuerzo" | "comida" | "cena" | "postre";
}

interface Ingredient {
  name: string;
  quantity: string;
}

interface Step {
  step: string;
  order: number;
}

export interface RecipeStructure {
  id: string;
  name: string;
  urlSlug: string;
  author: string;
  types: Type[];
  ingredients: Ingredient[];
  steps: Step[];
  elaborationTime: string;
  image: string;
}

interface RecipeCardProps {
  recipe: RecipeStructure;
}

export default RecipeCardProps;
