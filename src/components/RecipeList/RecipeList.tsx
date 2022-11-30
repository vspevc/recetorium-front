import { useAppSelector } from "../../redux/hooks";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeListStyled from "./RecipeListStyled";

const RecipeList = (): JSX.Element => {
  const { recipes } = useAppSelector(({ recipes }) => recipes);

  return (
    <RecipeListStyled>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </RecipeListStyled>
  );
};

export default RecipeList;
