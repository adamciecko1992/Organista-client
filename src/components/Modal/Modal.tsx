import Modal from "@mui/material/Modal";
import { PortalContainer } from "../shared/PortalContainer";
import { useAppSelector } from "../../store/useSelector";
import { useAppDispatch } from "../../store";
import { hideModal } from "../../store/ModalSlice/ModalSlice";
import { PlayerStats } from "./ModalViews/PlayerStats";

export const PortalizedModal = () => {
  return (
    <PortalContainer>
      <MainModal />
    </PortalContainer>
  );
};

const MainModal = () => {
  const { isActive, currentModal } = useAppSelector((s) => s.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <div>
      <Modal
        open={isActive}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          top: "30%",
        }}
      >
        {currentModal === "Player" ? <PlayerStats /> : <></>}
      </Modal>
    </div>
  );
};

export default MainModal;
