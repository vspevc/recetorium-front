import styled, { css } from "styled-components";
import { RecipeTypeTagStyledProps } from "./types";

const desayuno = css`
  border-color: ${(props) => props.theme.color.yellowColor.base};
  background-color: ${(props) => props.theme.color.yellowColor.light};
`;

const almuerzo = css`
  border-color: ${(props) => props.theme.color.successColor.base};
  background-color: ${(props) => props.theme.color.successColor.light};
`;

const comida = css`
  border-color: ${(props) => props.theme.color.blueColor.base};
  background-color: ${(props) => props.theme.color.blueColor.light};
`;

const cena = css`
  border-color: ${(props) => props.theme.color.secondaryColor.darkest};
  background-color: ${(props) => props.theme.color.secondaryColor.base};
`;

const postre = css`
  border-color: ${(props) => props.theme.color.primaryColor.dark};
  background-color: ${(props) => props.theme.color.primaryColor.light};
`;

const RecipeTypeTagStyled = styled.span<RecipeTypeTagStyledProps>`
  padding: 4px 15px;
  max-height: 32px;
  border: 1px solid ${(props) => props.theme.color.inkColor.base};
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.inkColor.light};

  ${(props) => props.name === "desayuno" && desayuno}
  ${(props) => props.name === "almuerzo" && almuerzo}
  ${(props) => props.name === "comida" && comida}
  ${(props) => props.name === "cena" && cena}
  ${(props) => props.name === "postre" && postre}
`;

export default RecipeTypeTagStyled;
