import styled from "styled-components";

const RecipeListStyled = styled.div`
  .recipe-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.sizes.gap};
  }
`;

export default RecipeListStyled;
