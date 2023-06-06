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

export const PlayerStats = React.forwardRef(() => {
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
    </>
  );
});
