import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import ModalStyled from "./ModalStyled";

const Modal = (): JSX.Element => {
  const { modal } = useAppSelector(({ ui }) => ui);
  const { type } = modal;
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeModalActionCreator());
  };

  let modalContent: JSX.Element;

  switch (type) {
    case "success":
      modalContent = (
        <FeedbackModal
          title={modal.title!}
          content={modal.content!}
          closeAction={closeModal}
        />
      );
      break;

    case "error":
      modalContent = (
        <FeedbackModal
          title={modal.title!}
          content={modal.content!}
          closeAction={closeModal}
          isError={true}
        />
      );
      break;

    default:
      modalContent = <></>;
  }

  return (
    <ModalStyled>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal">{modalContent}</div>
    </ModalStyled>
  );
};

export default Modal;
