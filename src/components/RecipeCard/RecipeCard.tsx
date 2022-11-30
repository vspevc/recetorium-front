import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipeCardStyled from "./RecipeCardStyled";
import RecipeCardProps from "./types";

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const { name, types, elaborationTime, image } = recipe;

  return (
    <RecipeCardStyled>
      <header className="recipe-card__header">
        <h3 className="recipe-card__title">{name}</h3>
        <img
          className="recipe-card__image"
          src={image}
          alt="{name}"
          height="308"
          width="432"
        />
      </header>
      <div className="recipe-card__info">
        <div className="recipe-card__tags">
          {types.some((type) => type.name === "desayuno") && (
            <span className="tag tag__desayuno">desayuno</span>
          )}
          {types.some((type) => type.name === "almuerzo") && (
            <span className="tag tag__almuerzo">almuerzo</span>
          )}
          {types.some((type) => type.name === "comida") && (
            <span className="tag tag__comida">comida</span>
          )}
          {types.some((type) => type.name === "cena") && (
            <span className="tag tag__cena">cena</span>
          )}
          {types.some((type) => type.name === "postre") && (
            <span className="tag tag__postre">postre</span>
          )}
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
