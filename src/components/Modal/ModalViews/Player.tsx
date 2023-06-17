import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  List,
  ListItem,
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
import { hideModal } from "../../../store/ModalSlice/ModalSlice";
import { PlayerStats } from "./PlayerStats";
import { PlayerCreator } from "./PlayerCreator";

export const Player = React.forwardRef(() => {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { session_id } = useAppSelector((s) => s.auth);
  const player = useAppSelector((s) => s.player.player);
  const t = useTranslationsContext();

  const handleLogOut = () => {
    if (session_id) {
      dispatch(deleteSession(session_id));
    }
    dispatch(deauthenticate());
    dispatch(hideModal());
    nav("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 400,
        flexDirection: "column",
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 400, padding: "20px" }}>
        <CardContent
          sx={{
            backgroundColor: "theme.palette.background.paper",
            boxShadow: "theme.shadows[5]",
            padding: "theme.spacing(2, 4, 3)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "auto",
            }}
          >
            {player ? <PlayerStats /> : <PlayerCreator />}
          </Box>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogOut}
          sx={{ marginLeft: "60%" }}
        >
          {t("logout")}
        </Button>
      </Card>
    </Box>
  );
});
