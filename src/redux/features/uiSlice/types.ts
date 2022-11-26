export interface ModalStructure {
  isOpen?: boolean;
  type: "default" | "success" | "error";
  title?: string;
  content?: string;
}

export interface UIState {
  modal: ModalStructure;
}
