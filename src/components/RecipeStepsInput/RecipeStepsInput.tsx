import { useEffect, useState } from "react";
import { Step } from "../../redux/features/recipesSlice/types";
import Button from "../Button/Button";
import RecipeInputCard from "../RecipeInputCard/RecipeInputCard";
import RecipeStepsInputStyled from "./RecipeStepsInputStyled";
import RecipeStepsInputProps from "./types";

const RecipeStepsInput = ({
  steps,
  callback,
}: RecipeStepsInputProps): JSX.Element => {
  const initialOrder: number = steps.length ? steps.length + 1 : 1;
  const [recipeSteps, setrecipeSteps] = useState<Step[]>(steps);
  const [stepData, setStepData] = useState<Step>({
    step: "",
    order: initialOrder,
  });
  const [editMode, setEditMode] = useState<{ isEdit: boolean; index: number }>({
    isEdit: false,
    index: NaN,
  });

  const handleValue = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const input = event.target;
    const { id, value } = input;

    setStepData({ ...stepData, [id]: value });
  };
  const addStep = () => {
    if (!stepData.step || !stepData.order) {
      return;
    }

    const newSteps = [...recipeSteps, stepData];
    setrecipeSteps(newSteps);
    setStepData({ step: "", order: newSteps.length + 1 });
  };

  const updateStep = () => {
    const { index } = editMode;
    const newSteps = [...recipeSteps];
    newSteps[index] = stepData;
    setrecipeSteps(newSteps);
    setStepData({ step: "", order: newSteps.length + 1 });
    setEditMode({ isEdit: false, index: NaN });
  };

  const editStep = (index: number) => {
    setEditMode({ isEdit: true, index: index });
    setStepData(recipeSteps[index]);
  };

  const deleteStep = (index: number) => {
    const newSteps = recipeSteps
      .filter((step, position) => position !== index)
      .map((step, position) => ({
        step: step.step,
        order: (step.order = position + 1),
      }));

    setrecipeSteps(newSteps);
  };

  useEffect(() => callback(recipeSteps), [callback, recipeSteps]);

  return (
    <RecipeStepsInputStyled>
      <h3>Paso a paso</h3>

      <div className="steps-input">
        {recipeSteps.map((step, index) => (
          <RecipeInputCard
            key={index}
            prefix={step.order.toString()}
            body={step.step}
            index={index}
            editData={editStep}
            deleteData={deleteStep}
          />
        ))}

        <div>
          <label htmlFor="step">Describe el paso a realizar</label>
          <textarea
            className="steps-input__step"
            id="step"
            value={stepData.step}
            onChange={handleValue}
          ></textarea>
        </div>

        <input
          type="hidden"
          id="order"
          value={stepData.order}
          onChange={handleValue}
        />

        {editMode.isEdit ? (
          <Button className="steps-input__add" action={updateStep}>
            Editar paso
          </Button>
        ) : (
          <Button className="steps-input__add" action={addStep}>
            Añadir paso
          </Button>
        )}
      </div>
    </RecipeStepsInputStyled>
  );
};

export default RecipeStepsInput;
