import styled from "styled-components";

const RecipeStepsInputStyled = styled.div`
  .steps-input {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.gap};

    &__step {
      padding: ${(props) =>
        `${props.theme.sizes.smallElementPadding.vertical} ${props.theme.sizes.smallElementPadding.horizontal}`};
      width: 100%;
      height: 180px;
      border: 2px solid ${(props) => props.theme.color.inkColor.base};
      border-radius: 8px;
      font-family: inherit;
      font-size: inherit;
    }
  }
`;

export default RecipeStepsInputStyled;
