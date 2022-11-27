import Button from "../Button/Button";
import FeedbackModalStyled from "./FeedbackModalStyled";
import { FeedbackModalProps } from "./types";

const FeedbackModal = ({
  title,
  content,
  closeAction,
  isError = false,
}: FeedbackModalProps): JSX.Element => {
  return (
    <FeedbackModalStyled isError={isError}>
      <h2 className="modal__title">{title}</h2>
      <p className="modal__content">{content}</p>
      <Button className="modal__button" action={closeAction}>
        Salir
      </Button>
    </FeedbackModalStyled>
  );
};

export default FeedbackModal;
