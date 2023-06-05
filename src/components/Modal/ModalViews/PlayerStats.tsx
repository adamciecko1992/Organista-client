import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  LinearProgress,
  Avatar,
} from "@mui/material";
import { useAppDispatch } from "../../../store";
import { useAppSelector } from "../../../store/useSelector";
import {
  deauthenticate,
  deleteSession,
} from "../../../store/AuthSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useTranslationsContext } from "../../../i18n/TranslationsContext";

export const PlayerStats = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { session_id } = useAppSelector((s) => s.auth);
  const t = useTranslationsContext();

  const handleLogOut = () => {
    if (session_id) {
      dispatch(deleteSession(session_id));
    }
    dispatch(deauthenticate());
    nav("/");
  };
  const hpPercentage = 80;
  const moneyAmount = 1000;

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 400, padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <Avatar
            sx={{ width: 120, height: 80, borderRadius: 0 }}
            src="/img_avatar.png"
            alt="Avatar"
          />
        </Box>
        <CardContent
          sx={{
            backgroundColor: "theme.palette.background.paper",
            boxShadow: "theme.shadows[5]",
            padding: "theme.spacing(2, 4, 3)",
          }}
        >
          <Typography variant="h5" component="h2" id="player-status-modal">
            Player Status
          </Typography>
          <Typography variant="body1" id="player-status-description">
            <ul>
              <li>Player Name: John Doe</li>
              <li>
                HP:
                <LinearProgress variant="determinate" value={hpPercentage} />
              </li>
              <li>Money: ${moneyAmount}</li>
              <li>Inventory: Alkohol, Koks i lasery</li>
            </ul>
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleLogOut}>
            {t("logout")}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
