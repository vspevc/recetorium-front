import styled from "styled-components";

const RecipeCardStyled = styled.article`
  width: 100%;
  max-width: 450px;
  border: 1px solid ${(props) => props.theme.color.backgroundColor.darkest};
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.backgroundColor.dark};
  overflow: hidden;

  .recipe-card__header {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .recipe-card__image {
    order: 1;
    height: 100px;
    object-fit: cover;
    object-position: center;
  }

  .recipe-card__delete {
    position: absolute;
    top: 50px;
    right: 8px;
  }

  .recipe-card__title {
    order: 2;
    margin: 0;
    padding: 8px 15px 0;
    border: none;
  }

  .recipe-card__info {
    display: flex;
    justify-content: space-between;
    gap: ${(props) => props.theme.sizes.gap};
    padding: 15px;
  }

  .recipe-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .recipe-card__time {
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }
`;

export default RecipeCardStyled;
