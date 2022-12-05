import styled from "styled-components";

const RecipeIngredientsInputStyled = styled.div`
  .ingredients-input {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.gap};

    &__quantity {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    &__add {
      min-width: fit-content;
    }
  }
`;

export default RecipeIngredientsInputStyled;
