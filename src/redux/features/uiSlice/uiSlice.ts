import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalStructure, UIState } from "./types";

const uiInitialState: UIState = {
  modal: {
    isOpen: false,
    title: "",
    content: "",
    type: "success",
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
        type: "success",
      },
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showModal: showModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
