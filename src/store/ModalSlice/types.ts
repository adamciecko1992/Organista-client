export type ModalType = "Player";

export type ModalSliceState = {
  currentModal: ModalType;
  isActive: boolean;
};

export type SetModalAction = {
  type: "SetModal";
  payload: ModalType;
};
