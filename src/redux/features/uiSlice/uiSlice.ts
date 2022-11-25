import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uiState from "./types";

const uiInitialState: uiState = {
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
  },
});

export const uiReducer = uiSlice.reducer;

export const { showModal: showModalActionCreator } = uiSlice.actions;
