import { useEffect, useState } from "react";
import { Ingredient } from "../../redux/features/recipesSlice/types";
import Button from "../Button/Button";
import InputSet from "../InputSet/InputSet";
import RecipeInputCard from "../RecipeInputCard/RecipeInputCard";
import RecipeIngredientsInputStyled from "./RecipeIngredientsInputStyled";
import RecipeIngredientsInputProps from "./types";

const RecipeIngredientsInput = ({
  ingredients,
  callback,
}: RecipeIngredientsInputProps): JSX.Element => {
  const [recipeIngredients, setrecipeIngredients] =
    useState<Ingredient[]>(ingredients);
  const [ingredientData, setIngredientData] = useState<Ingredient>(
    {} as Ingredient
  );
  const [editMode, setEditMode] = useState<{ isEdit: boolean; index: number }>({
    isEdit: false,
    index: NaN,
  });

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { id, value } = input;
    const inputId = id === "ingredientName" ? "name" : id;

    setIngredientData({ ...ingredientData, [inputId]: value });
  };
  const addIngredient = () => {
    if (!ingredientData.name || !ingredientData.quantity) {
      return;
    }

    const newIngredients = [...recipeIngredients, ingredientData];
    setrecipeIngredients(newIngredients);
    setIngredientData({} as Ingredient);
  };

  const updateIngredient = () => {
    const { index } = editMode;
    const newIngredients = [...recipeIngredients];
    newIngredients[index] = ingredientData;
    setrecipeIngredients(newIngredients);
    setIngredientData({} as Ingredient);
    setEditMode({ isEdit: false, index: NaN });
  };

  const editIngredient = (index: number) => {
    setEditMode({ isEdit: true, index: index });
    setIngredientData(recipeIngredients[index]);
  };

  const deleteIngredient = (index: number) => {
    setrecipeIngredients(
      recipeIngredients.filter((ingredient, position) => position !== index)
    );
  };

  useEffect(() => {
    callback(recipeIngredients);
  }, [callback, recipeIngredients]);

  return (
    <RecipeIngredientsInputStyled>
      <h2>Ingredientes</h2>

      <div className="ingredients-input">
        {recipeIngredients.map((ingredient, index) => (
          <RecipeInputCard
            key={index}
            prefix={ingredient.quantity}
            body={ingredient.name}
            index={index}
            editData={editIngredient}
            deleteData={deleteIngredient}
          />
        ))}

        <InputSet
          id="ingredientName"
          labelText="Nombre del ingrediente"
          inputValue={ingredientData.name}
          handleValue={handleValue}
        />

        <div className="ingredients-input__quantity">
          <InputSet
            id="quantity"
            labelText="Cantidad"
            inputValue={ingredientData.quantity}
            captionText="Ejemplo: 1, 100gr, 10ml..."
            handleValue={handleValue}
          />

          {editMode.isEdit ? (
            <Button
              className="ingredients-input__add"
              ariaLabel="Editar ingrediente"
              action={updateIngredient}
              options={{ type: "button" }}
            >
              Editar
            </Button>
          ) : (
            <Button
              className="ingredients-input__add"
              action={addIngredient}
              options={{ type: "button" }}
            >
              Añadir
            </Button>
          )}
        </div>
      </div>
    </RecipeIngredientsInputStyled>
  );
};

export default RecipeIngredientsInput;
