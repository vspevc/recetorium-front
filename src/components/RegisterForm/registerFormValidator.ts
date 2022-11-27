import * as Joi from "joi";
import RegisterUserData from "../../hooks/useUsers/types";

const registerFormSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(8).max(30).required(),
  passwordConfirm: Joi.ref("password"),
});

const registerFormValidator = async (registerFormData: RegisterUserData) => {
  return await registerFormSchema.validateAsync(registerFormData, {
    abortEarly: false,
  });
};

export default registerFormValidator;
