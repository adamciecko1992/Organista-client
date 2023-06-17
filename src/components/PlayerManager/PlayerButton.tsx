import Avatar from "@mui/material/Avatar";
import { AccountCircle } from "@mui/icons-material";
import { useAppDispatch } from "../../store";
import { setModal } from "../../store/ModalSlice/ModalSlice";
import { useAppSelector } from "../../store/useSelector";
import { getPlayerStats } from "../../store/PlayerSlice/PlayerSlice";
import { Button } from "@mui/material";

const PlayerButton = () => {
	const dispatch = useAppDispatch();
	const username = useAppSelector((s) => s.auth.username);

	const handlePlayerClick = () => {
		dispatch(getPlayerStats(username));
		dispatch(setModal("Player"));
	};

	return (
		<Button>
			<Avatar onClick={handlePlayerClick}>
				<AccountCircle />
			</Avatar>
		</Button>
	);
};

export default PlayerButton;
