import styled from "styled-components";
import { FeedbackModalStyledProps } from "./types";

const FeedbackModalStyled = styled.div<FeedbackModalStyledProps>`
  .modal__title {
    color: ${(props) =>
      props.isError
        ? props.theme.color.primaryColor.dark
        : props.theme.color.successColor.base};
  }

  .modal__button {
    display: flex;
    justify-content: center;
  }
`;

export default FeedbackModalStyled;
