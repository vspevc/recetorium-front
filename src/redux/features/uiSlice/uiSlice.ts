import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalStructure, UIState } from "./types";

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
    showModal: (currentState, action: PayloadAction<ModalStructure>) => ({
      ...currentState,
      modal: { ...action.payload, isOpen: true },
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
  showModal: showModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
