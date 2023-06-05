import Avatar from "@mui/material/Avatar";
import { AccountCircle } from "@mui/icons-material";
import { useAppDispatch } from "../../store";
import { setModal } from "../../store/ModalSlice/ModalSlice";

const PlayerAvatar = () => {
  const dispatch = useAppDispatch();

  return (
    <Avatar onClick={() => dispatch(setModal("Player"))}>
      <AccountCircle />
    </Avatar>
  );
};

export default PlayerAvatar;
