import styled from "styled-components";

const RecipeTypesCheckboxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.sizes.gap};

  .recipe-type__group {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .recipe-types__label {
    order: 2;
  }

  .recipe-types__checkbox {
    order: 1;
    cursor: pointer;
    padding-top: 3px;
    padding-left: 3px;
    width: 30px;
    aspect-ratio: 1 / 1;
    border: 1px solid ${(props) => props.theme.color.secondaryColor.darkest};
    border-radius: 5px;
    font-size: ${(props) => props.theme.font.largeFontSize};
    text-align: center;
    color: ${(props) => props.theme.color.inkColor.base};
    line-height: 25px;
    overflow: hidden;
    appearance: none;

    &:checked {
      background-color: ${(props) => props.theme.color.secondaryColor.light};

      &::before {
        content: "✓";
      }
    }
  }
`;

export default RecipeTypesCheckboxStyled;
