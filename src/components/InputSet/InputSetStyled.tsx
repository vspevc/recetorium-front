import styled, { css } from "styled-components";
import { InputSetStyledProps } from "./types";

const isDisabledStyle = css`
  .input-set__input {
    border-color: ${(props) => props.theme.color.inkColor.light};
  }

  .input-set__input,
  .input-set__label,
  .input-set__caption {
    color: ${(props) => props.theme.color.inkColor.light};
  }
`;
const isErrorStyle = css`
  .input-set__input {
    padding-right: 50px;
    border-color: ${(props) => props.theme.color.primaryColor.dark};
  }

  .input-set__icon {
    display: block;
  }

  .input-set__caption {
    color: ${(props) => props.theme.color.primaryColor.dark};
  }
`;

const InputStyled = styled.div<InputSetStyledProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .input-set__icon-wrapper {
    position: relative;
  }

  .input-set__input {
    display: inline-block;
    width: 100%;
    border: 2px solid ${(props) => props.theme.color.inkColor.base};
    border-radius: 8px;
    outline: none;

    &:focus {
      border-color: ${(props) => props.theme.color.secondaryColor.darkest};
    }
  }

  .input-set__icon {
    display: none;
    position: absolute;
    top: 14px;
    right: 22px;
    color: ${(props) => props.theme.color.primaryColor.dark};
    font-size: ${(props) => props.theme.font.mainFontSize};
  }

  .input-set__label {
    padding-left: 7px;
  }

  .input-set__caption {
    padding: 2px 7px;
  }

  ${(props) => props.isDisabled && isDisabledStyle};
  ${(props) => props.isError && isErrorStyle};
`;

export default InputStyled;
