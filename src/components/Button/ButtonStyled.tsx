import styled, { css } from "styled-components";
import { ButtonStyledProps } from "./types";

const largeButtonStyle = css`
  width: 100%;
`;
const smallButtonStyle = css`
  padding: ${(props) => props.theme.sizes.smallElementPadding.vertical};
`;
const roundButtonStyle = css`
  padding: ${(props) => props.theme.sizes.smallElementPadding.vertical};
  border-radius: 50%;
  opacity: 80%;
`;
const mixedButtonStyle = css`
  display: flex;
  gap: 5px;
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: pointer;
  display: inline-block;
  padding: ${(props) =>
    `${props.theme.sizes.smallElementPadding.vertical} ${props.theme.sizes.smallElementPadding.horizontal}`};
  height: 46px;
  min-width: 45px;
  border: 2px solid ${(props) => props.theme.color.secondaryColor.darkest};
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.secondaryColor.base};
  color: ${(props) => props.theme.color.inkColor.base};
  font-weight: ${(props) => props.theme.font.mediumFontWeight};
  text-align: center;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.color.secondaryColor.dark};
    text-decoration: none;
  }

  &:focus {
    border-color: ${(props) => props.theme.color.secondaryColor.light};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.secondaryColor.light};
    border-color: ${(props) => props.theme.color.secondaryColor.base};
    color: ${(props) => props.theme.color.inkColor.light};
  }

  ${(props) => props.variant === "large" && largeButtonStyle};
  ${(props) => props.variant === "small" && smallButtonStyle};
  ${(props) => props.variant === "round" && roundButtonStyle};
  ${(props) => props.variant === "mixed" && mixedButtonStyle};
`;

export default ButtonStyled;
