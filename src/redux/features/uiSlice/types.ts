export interface ModalStructure {
  isOpen?: boolean;
  type: "success" | "error";
  title?: string;
  content?: string;
}

export interface UIState {
  modal: ModalStructure;
}
