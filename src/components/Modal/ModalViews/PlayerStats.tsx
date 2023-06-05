import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAppDispatch } from "../../../store";
import { useAppSelector } from "../../../store/useSelector";
import {
  deauthenticate,
  deleteSession,
} from "../../../store/AuthSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useTranslationsContext } from "../../../i18n/TranslationsContext";
import React from "react";

export const PlayerStats = React.forwardRef(() => {
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 400,
      }}
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
            <List>
              <ListItem>
                <ListItemText primary="John Doe" secondary="Player Name" />
              </ListItem>
              <ListItem>
                <ListItemText primary="80" secondary="HP" />
              </ListItem>
              <ListItem>
                <ListItemText primary="$1000" secondary="Money" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Whatever" secondary="Inventory" />
              </ListItem>
            </List>
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
});
