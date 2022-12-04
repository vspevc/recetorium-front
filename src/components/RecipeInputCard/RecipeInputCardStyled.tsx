import styled from "styled-components";

const RecipeInputCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  .input-card__interaction {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;

export default RecipeInputCardStyled;
