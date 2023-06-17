import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
} from "@mui/material";

export const PlayerCreator = () => {
  const [open, setOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const avatars = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
  ];

  const handleAvatarClick = (avatar: any) => {
    setSelectedAvatar(avatar);
    setOpen(false);
  };

  const handleOpenAvatarPicker = () => {
    setOpen(true);
  };

  const handleCloseAvatarPicker = () => {
    setOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Player Name"
        variant="outlined"
        fullWidth
        required
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenAvatarPicker}
      >
        Choose Avatar
      </Button>

      <Dialog open={open} onClose={handleCloseAvatarPicker}>
        <DialogTitle>Choose Avatar</DialogTitle>
        <DialogContent>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: "theme.spacing(2)",
            }}
          >
            {avatars.map((avatar) => (
              <Avatar
                key={avatar}
                alt="Avatar"
                src={avatar}
                sx={{
                  width: 60,
                  height: 60,
                  margin: "theme.spacing(1)",
                  cursor: "pointer",
                }}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAvatarPicker} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button type="submit" variant="contained" color="primary">
        Create Player
      </Button>
    </form>
  );
};
