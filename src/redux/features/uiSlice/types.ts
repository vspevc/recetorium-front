export interface ModalStructure {
  isOpen?: boolean;
  type: "default" | "success" | "error";
  title?: string;
  content?: string;
}

export interface PaginationStructure {
  currentPage: number;
  totalPages: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface FeedbackModalPayload {
  title: string;
  content: string;
}

export interface UIState {
  modal: ModalStructure;
  pagination: PaginationStructure;
}
