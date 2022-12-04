import RecipeTypeTagStyled from "./RecipeTypeTagStyled";
import { RecipeTypeTagProps } from "./types";

const RecipeTypeTag = ({ name }: RecipeTypeTagProps): JSX.Element => {
  return <RecipeTypeTagStyled name={name}>{name}</RecipeTypeTagStyled>;
};

export default RecipeTypeTag;
