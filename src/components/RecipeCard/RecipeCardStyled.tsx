import styled from "styled-components";

const RecipeCardStyled = styled.article`
  width: 100%;
  max-width: 450px;
  border: 1px solid ${(props) => props.theme.color.backgroundColor.darkest};
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.backgroundColor.dark};
  overflow: hidden;

  .recipe-card__header {
    display: flex;
    flex-direction: column;
  }

  .recipe-card__image {
    order: 1;
    height: 100px;
    object-fit: cover;
    object-position: center;
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
    padding: 15px;
  }

  .recipe-card__tags {
    display: flex;
    gap: 5px;
  }

  .tag {
    padding: 3px 15px;
    border: 1px solid ${(props) => props.theme.color.inkColor.base};
    border-radius: 50px;
    background-color: ${(props) => props.theme.color.inkColor.light};
  }

  .tag__desayuno {
    border-color: ${(props) => props.theme.color.yellowColor.base};
    background-color: ${(props) => props.theme.color.yellowColor.light};
  }

  .tag__almuerzo {
    border-color: ${(props) => props.theme.color.successColor.base};
    background-color: ${(props) => props.theme.color.successColor.light};
  }

  .tag__comida {
    border-color: ${(props) => props.theme.color.blueColor.base};
    background-color: ${(props) => props.theme.color.blueColor.light};
  }

  .tag__cena {
    border-color: ${(props) => props.theme.color.secondaryColor.darkest};
    background-color: ${(props) => props.theme.color.secondaryColor.base};
  }

  .tag__postre {
    border-color: ${(props) => props.theme.color.primaryColor.dark};
    background-color: ${(props) => props.theme.color.primaryColor.light};
  }

  .recipe-card__time {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default RecipeCardStyled;
