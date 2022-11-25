import ModalStyled from "./ModalStyled";
import ModalProps from "./types";

const Modal = ({ children }: ModalProps): JSX.Element => {
  return (
    <ModalStyled>
      <div className="modal-overlay"></div>
      <div className="modal">{children}</div>
    </ModalStyled>
  );
};

export default Modal;
