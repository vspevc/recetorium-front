import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const { modal } = useAppSelector(({ ui }) => ui);
  const { type } = modal;
  const dispatch = useAppDispatch();

  let modalContent: JSX.Element;

  switch (type) {
    case "success":
      modalContent = (
        <>
          <h2>{modal.title}</h2>
          <p>{modal.content}</p>
        </>
      );
      break;

    case "error":
      modalContent = (
        <>
          <h2>{modal.title}</h2>
          <p>{modal.content}</p>
        </>
      );
      break;

    default:
      modalContent = (
        <>
          <h2>Algo ha salido mal</h2>
          <p>
            Vuelve a intentarlo y si el problema persiste ponte en contacto con
            los administradores
          </p>
        </>
      );
  }

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
      <div className="modal">{modalContent}</div>
    </ModalStyled>
  );
};

export default Modal;
