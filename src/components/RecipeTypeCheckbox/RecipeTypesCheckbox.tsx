import { useEffect, useState } from "react";
import { Type } from "../../redux/features/recipesSlice/types";
import RecipeTypeTag from "../RecipeTypeTag/RecipeTypeTag";
import RecipeTypesCheckboxStyled from "./RecipeTypesCheckboxStyled";
import RecipeTypesCheckboxProps from "./types";

const RecipeTypesCheckbox = ({
  types,
  callback,
}: RecipeTypesCheckboxProps): JSX.Element => {
  const [recipeTypes, setRecipeTypes] = useState<Type[]>(types);

  const checkedType = {
    desayuno: recipeTypes.some(({ name }) => name === "desayuno")
      ? true
      : false,
    almuerzo: recipeTypes.some(({ name }) => name === "almuerzo")
      ? true
      : false,
    comida: recipeTypes.some(({ name }) => name === "comida") ? true : false,
    cena: recipeTypes.some(({ name }) => name === "cena") ? true : false,
    postre: recipeTypes.some(({ name }) => name === "postre") ? true : false,
  };

  const handleTypesData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    const isInTypes = recipeTypes.some(({ name }) => name === id);

    if (checked && !isInTypes) {
      setRecipeTypes([...recipeTypes, { name: id as Type["name"] }]);
    }

    if (!checked && isInTypes) {
      setRecipeTypes(recipeTypes.filter(({ name }) => name !== id));
    }
  };

  useEffect(() => {
    callback(recipeTypes);
  }, [callback, recipeTypes]);

  return (
    <RecipeTypesCheckboxStyled>
      <div className="recipe-type__group">
        <label className="recipe-types__label" htmlFor="desayuno">
          <RecipeTypeTag name="desayuno" />
        </label>
        <input
          id="desayuno"
          className="recipe-types__checkbox"
          type="checkbox"
          checked={checkedType.desayuno}
          onChange={handleTypesData}
        />
      </div>

      <div className="recipe-type__group">
        <label className="recipe-types__label" htmlFor="almuerzo">
          <RecipeTypeTag name="almuerzo" />
        </label>
        <input
          id="almuerzo"
          className="recipe-types__checkbox"
          type="checkbox"
          checked={checkedType.almuerzo}
          onChange={handleTypesData}
        />
      </div>

      <div className="recipe-type__group">
        <label className="recipe-types__label" htmlFor="comida">
          <RecipeTypeTag name="comida" />
        </label>
        <input
          id="comida"
          className="recipe-types__checkbox"
          type="checkbox"
          checked={checkedType.comida}
          onChange={handleTypesData}
        />
      </div>

      <div className="recipe-type__group">
        <label className="recipe-types__label" htmlFor="cena">
          <RecipeTypeTag name="cena" />
        </label>
        <input
          id="cena"
          className="recipe-types__checkbox"
          type="checkbox"
          checked={checkedType.cena}
          onChange={handleTypesData}
        />
      </div>

      <div className="recipe-type__group">
        <label className="recipe-types__label" htmlFor="postre">
          <RecipeTypeTag name="postre" />
        </label>
        <input
          id="postre"
          className="recipe-types__checkbox"
          type="checkbox"
          checked={checkedType.postre}
          onChange={handleTypesData}
        />
      </div>
    </RecipeTypesCheckboxStyled>
  );
};

export default RecipeTypesCheckbox;
