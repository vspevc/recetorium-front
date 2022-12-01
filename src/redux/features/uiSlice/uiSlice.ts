import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackModalPayload, PaginationStructure, UIState } from "./types";

export const uiInitialState: UIState = {
  modal: {
    isOpen: false,
    title: "",
    content: "",
    type: "default",
  },
  pagination: {
    currentPage: 0,
    totalPages: 0,
    previousPage: null,
    nextPage: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showSuccessModal: (
      currentState,
      action: PayloadAction<FeedbackModalPayload>
    ) => ({
      ...currentState,
      modal: { ...action.payload, isOpen: true, type: "success" },
    }),
    showErrorModal: (
      currentState,
      action: PayloadAction<FeedbackModalPayload>
    ) => ({
      ...currentState,
      modal: { ...action.payload, isOpen: true, type: "error" },
    }),
    closeModal: (currentState) => ({
      ...currentState,
      modal: {
        isOpen: false,
        title: "",
        content: "",
        type: "default",
      },
    }),
    loadPagination: (
      currentState,
      action: PayloadAction<PaginationStructure>
    ) => ({
      ...currentState,
      pagination: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showSuccessModal: showSuccessModalActionCreator,
  showErrorModal: showErrorModalActionCreator,
  closeModal: closeModalActionCreator,
  loadPagination: loadPaginationActionCreator,
} = uiSlice.actions;
