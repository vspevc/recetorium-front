import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UIState from "./types";

const uiInitialState: UIState = {
  modal: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showModal: (currentState, action: PayloadAction<JSX.Element>) => ({
      ...currentState,
      modal: action.payload,
    }),
    closeModal: (currentState) => ({
      ...currentState,
      modal: null,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showModal: showModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
