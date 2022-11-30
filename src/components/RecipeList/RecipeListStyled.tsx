import styled from "styled-components";

const RecipeListStyled = styled.div`
  .recipe-list {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.sizes.gap};
  }
`;

export default RecipeListStyled;
