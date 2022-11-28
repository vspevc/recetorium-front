import { ModalStructure } from "../../redux/features/uiSlice/types";

const loadModal = {
  successFeedback: (title: string, content: string): ModalStructure => ({
    isOpen: true,
    title: title,
    content: content,
    type: "success",
  }),
  errorFeedback: (title: string, content: string): ModalStructure => ({
    isOpen: true,
    title: title,
    content: content,
    type: "error",
  }),
};

export default loadModal;
