import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackModalPayload, UIState } from "./types";

const uiInitialState: UIState = {
  modal: {
    isOpen: false,
    title: "",
    content: "",
    type: "default",
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
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showSuccessModal: showSuccessModalActionCreator,
  showErrorModal: showErrorModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
