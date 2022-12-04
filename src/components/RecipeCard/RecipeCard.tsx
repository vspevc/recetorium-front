import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipeTypeTag from "../RecipeTypeTag/RecipeTypeTag";
import RecipeCardStyled from "./RecipeCardStyled";
import RecipeCardProps from "./types";

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const { name, types, elaborationTime, image } = recipe;

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
      </header>
      <div className="recipe-card__info">
        <div className="recipe-card__tags">
          {types.map((type, index) => (
            <RecipeTypeTag key={index} name={type.name} />
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
