import { ValidationError } from "joi";
import { useState } from "react";
import RecipeFormData from "../../hooks/useRecipes/types";
import {
  Ingredient,
  Step,
  Type,
} from "../../redux/features/recipesSlice/types";
import { showErrorModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import apiMessageToSpanish from "../../utils/api/translations/apiMessageToSpanish";
import processJoiError from "../../utils/joi/processJoiError";
import Button from "../Button/Button";
import InputSet from "../InputSet/InputSet";
import RecipeIngredientsInput from "../RecipeIngredientsInput/RecipeIngredientsInput";
import RecipeStepsInput from "../RecipeStepsInput/RecipeStepsInput";
import RecipeTypesCheckbox from "../RecipeTypeCheckbox/RecipeTypesCheckbox";
import RecipeFormStyled from "./RecipeFormStyled";
import recipeFormValidator from "./recipeFormValidation";
import RecipeFormProps from "./types";

const RecipeForm = ({
  type,
  recipeData,
  sendFormData,
}: RecipeFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [recipeFormData, setRecipeFormData] =
    useState<RecipeFormData>(recipeData);
  const [imageUrl, setImageUrl] = useState<string>(
    "/images/recipes/default.webp"
  );
  const [typesFormData, setTypesFormData] = useState<Type[]>(
    recipeFormData.types
  );
  const [ingredientsFormData, setIngredientsFormData] = useState<Ingredient[]>(
    recipeFormData.ingredients
  );
  const [stepsFormData, setStepsFormData] = useState<Step[]>(
    recipeFormData.steps
  );
  const [formErrors, setFormErrors] = useState({
    name: false,
    elaborationTime: false,
  });
  const { name: nameError, elaborationTime: elaborationTimeError } = formErrors;

  const handleRecipeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { id: inputId, value: inputValue } = input;

    if (inputId === "image") {
      const file = (input.files as FileList)[0];

      setImageUrl(URL.createObjectURL(file));
      setRecipeFormData({ ...recipeFormData, [inputId]: file });
      return;
    }

    setFormErrors({ ...formErrors, [inputId]: false });

    setRecipeFormData({ ...recipeFormData, [inputId]: inputValue });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      ...recipeFormData,
      types: typesFormData,
      ingredients: ingredientsFormData,
      steps: stepsFormData,
    };
    try {
      await recipeFormValidator(formData);

      sendFormData(formData);
    } catch (error: unknown) {
      const errorMessages = (error as ValidationError).message;
      const errors = processJoiError(errorMessages).reduce(
        (currentValue, inputError) => ({ ...currentValue, [inputError]: true }),
        {}
      );
      const translatedErrors = apiMessageToSpanish(
        errorMessages.replaceAll(". ", ", ")
      );

      setFormErrors({ ...formErrors, ...errors });
      dispatch(
        showErrorModalActionCreator({
          title: "Error al intentar crear Receta",
          content: translatedErrors,
        })
      );
    }
  };

  return (
    <RecipeFormStyled>
      <form className="register-form" onSubmit={handleSubmit}>
        <InputSet
          id="name"
          inputType="text"
          labelText="Nombre de la Receta"
          inputValue={recipeFormData.name}
          required={true}
          handleValue={handleRecipeFormData}
          options={{ isError: nameError }}
        />

        <RecipeTypesCheckbox
          types={typesFormData}
          callback={setTypesFormData}
        />

        <InputSet
          id="elaborationTime"
          inputType="text"
          labelText="Tiempo de elaboración"
          captionText="Por ejemplo: 15 min, 1h 30 min..."
          inputValue={recipeFormData.elaborationTime}
          required={true}
          handleValue={handleRecipeFormData}
          options={{ isError: elaborationTimeError }}
        />

        <div className="register-form__image-input">
          <img
            className="register-form__image"
            src={imageUrl}
            alt="Imagen para la receta"
            width="370"
            height="240"
          />
          <Button as="label" options={{ htmlFor: "image" }}>
            Seleccionar imagen
          </Button>
          <input type="file" id="image" onChange={handleRecipeFormData} />
        </div>

        <RecipeIngredientsInput
          ingredients={ingredientsFormData}
          callback={setIngredientsFormData}
        />

        <RecipeStepsInput steps={stepsFormData} callback={setStepsFormData} />

        <Button options={{ type: "submit" }}>
          {type === "create" ? "Crear Receta" : "Modificar Receta"}
        </Button>
      </form>
    </RecipeFormStyled>
  );
};

export default RecipeForm;
