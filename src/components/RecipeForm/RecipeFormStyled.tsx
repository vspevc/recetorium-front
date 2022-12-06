import styled from "styled-components";

const RecipeFormStyled = styled.div`
  .register-form {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.gap};

    &__image-input {
      display: flex;
      flex-direction: column;
    }

    &__image {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default RecipeFormStyled;
