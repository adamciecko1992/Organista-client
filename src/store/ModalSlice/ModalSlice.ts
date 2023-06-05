import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalSliceState, ModalType } from "./types";

export const modalSlice = createSlice({
  initialState: {
    currentModal: "Player",
    isActive: false,
  } as ModalSliceState,
  name: "ModalSlice",
  reducers: {
    show(state, action: PayloadAction<ModalType>) {
      state.currentModal = action.payload;
      state.isActive = true;
    },
    hide(state) {
      state.isActive = false;
    },
  },
});

export const setModal = modalSlice.actions.show;
export const hideModal = modalSlice.actions.hide;
