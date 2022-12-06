import * as Joi from "joi";
import RecipeFormData from "../../hooks/useRecipes/types";

const registerFormSchema = Joi.object({
  name: Joi.string().min(2).required(),
  author: Joi.allow(),
  types: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().valid(
          "desayuno",
          "almuerzo",
          "comida",
          "cena",
          "postre"
        ),
      })
    )
    .required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        name: Joi.string(),
        quantity: Joi.string(),
      })
    )
    .required(),
  steps: Joi.array()
    .items(
      Joi.object({
        step: Joi.string(),
        order: Joi.number(),
      })
    )
    .required(),
  elaborationTime: Joi.string().max(13).required(),
  image: Joi.allow(),
});

const recipeFormValidator = async (registerFormData: RecipeFormData) => {
  return await registerFormSchema.validateAsync(registerFormData, {
    abortEarly: false,
  });
};

export default recipeFormValidator;
