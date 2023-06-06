import Modal from "@mui/material/Modal";
import { useAppSelector } from "../../store/useSelector";
import { useAppDispatch } from "../../store";
import { hideModal } from "../../store/ModalSlice/ModalSlice";
import { Player } from "./ModalViews/Player";

const MainModal = () => {
  const { isActive, currentModal } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      open={isActive}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onBackdropClick={handleClose}
      sx={{
        margin: "8% 50%",
      }}
    >
      {currentModal === "Player" ? <Player /> : <div />}
    </Modal>
  );
};

export default MainModal;
