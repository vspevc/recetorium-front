import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "../Button/Button";
import RecipeInputCardStyled from "./RecipeInputCardStyled";
import RecipeInputCardProps from "./types";

const RecipeInputCard = ({
  prefix,
  body,
  index,
  editData,
  deleteData,
}: RecipeInputCardProps): JSX.Element => {
  const editingData = () => editData(index);
  const deletingData = () => deleteData(index);

  return (
    <RecipeInputCardStyled>
      <div className="input-card__data">
        <span>{prefix}</span> - <span>{body}</span>
      </div>
      <div className="input-card__interaction">
        <Button
          ariaLabel="Editar"
          action={editingData}
          options={{ variant: "small", type: "button" }}
        >
          <FontAwesomeIcon icon={regular("pen-to-square")} />
        </Button>
        <Button
          ariaLabel="Eliminar"
          action={deletingData}
          options={{ variant: "small", type: "button" }}
        >
          <FontAwesomeIcon className="delete" icon={solid("trash-can")} />
        </Button>
      </div>
    </RecipeInputCardStyled>
  );
};

export default RecipeInputCard;
