import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const { modal } = useAppSelector(({ ui }) => ui);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  return (
    <ModalStyled>
      <div
        data-testid="test"
        className="modal-overlay"
        onClick={closeModal}
      ></div>
      <div className="modal">{modal}</div>
    </ModalStyled>
  );
};

export default Modal;
