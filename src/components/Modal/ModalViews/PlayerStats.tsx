import {
  CardContent,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../store/useSelector";

export const PlayerStats = React.forwardRef(() => {
  const { player } = useAppSelector((s) => s.player)

  return (
    <>
      <Box
        sx={{
          marginRight: "10px",
        }}
      >
        <Avatar
          sx={{ width: 120, height: 80, borderRadius: 0 }}
          src="/img_avatar.png"
          alt="Avatar"
        />
      </Box>

      <Typography variant="h5" component="h2" id="player-status-modal">
        Player Status
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={player.username} secondary="Player Name" />
        </ListItem>
        <ListItem>
          <ListItemText primary={player.hp} secondary="HP" />
        </ListItem>
        <ListItem>
          <ListItemText primary={player.money} secondary="Money" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Whatever" secondary="Inventory" />
        </ListItem>
      </List>
    </>
  );
});
