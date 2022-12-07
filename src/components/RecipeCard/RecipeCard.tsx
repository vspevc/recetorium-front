import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRecipes from "../../hooks/useRecipes/useRecipes";
import { useAppSelector } from "../../redux/hooks";
import Button from "../Button/Button";
import RecipeTypeTag from "../RecipeTypeTag/RecipeTypeTag";
import RecipeCardStyled from "./RecipeCardStyled";
import RecipeCardProps from "./types";

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const {
    pagination: { currentPage },
  } = useAppSelector(({ ui }) => ui);
  const { deleteRecipe, loadRecipes } = useRecipes();
  const { id, name, types, elaborationTime, image } = recipe;

  const deleteAndReload = async () => {
    await deleteRecipe(id);
    await loadRecipes(`/recipes/search?page=${currentPage}`);
  };

  return (
    <RecipeCardStyled>
      <header className="recipe-card__header">
        <h2 className="recipe-card__title">{name}</h2>
        <img
          className="recipe-card__image"
          src={image}
          alt={name}
          height="308"
          width="432"
        />
        <Button
          className="recipe-card__delete"
          ariaLabel="Eliminar receta"
          action={deleteAndReload}
          options={{ variant: "round" }}
        >
          <FontAwesomeIcon className="delete" icon={solid("trash-can")} />
        </Button>
      </header>
      <div className="recipe-card__info">
        <div className="recipe-card__tags">
          {types.map((type) => (
            <RecipeTypeTag key={type.name} name={type.name} />
          ))}
        </div>
        <div className="recipe-card__time">
          <FontAwesomeIcon
            className="recipe-card__time-icon"
            icon={solid("hourglass2")}
          />
          {elaborationTime}
        </div>
      </div>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
