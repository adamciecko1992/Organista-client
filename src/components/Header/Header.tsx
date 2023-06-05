import { Button, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "..";
import logoImage from "../../assets/logo.jpg";
import { useAppDispatch } from "../../store";
import {
  checkSession,
  deauthenticate,
  deleteSession,
} from "../../store/AuthSlice/AuthSlice";
import PlayerAvatar from "../PlayerManager/PlayerManager";
import { useAppSelector } from "../../store/useSelector";

export const Header = () => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const session_id = useAppSelector((s) => s.auth.session_id);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    const checkAndDeleteSession = async () => {
      if (session_id) {
        const res = await dispatch(checkSession(session_id));
        if (res.payload === "Session expired") {
          alert("Session expired. Logging out");
          dispatch(deleteSession(session_id));
        }
      }
    };

    if (session_id) {
      checkAndDeleteSession();
    }
  }, [session_id]);

  return (
    <Box
      sx={{
        height: "10vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Link to="/dashboard/" style={{ width: "30%", textDecoration: "none" }}>
        <Box
          sx={{
            minHeight: "10vh",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${logoImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        ></Box>
      </Link>
      {isAuthenticated && (
        <Box sx={{ marginRight: "3rem" }}>
          <PlayerAvatar />
        </Box>
      )}
    </Box>
  );
};
