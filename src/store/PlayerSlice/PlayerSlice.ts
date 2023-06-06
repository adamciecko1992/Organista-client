import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import serverUrl from "../../services/serverUrl";

export const getPlayerStats = createAsyncThunk(
  "player/getData",
  async (userName: string) => {
    try {
      const result = await axios({
        method: "get",
        url: `${serverUrl}/player_data/player/${userName}`,
      });
      return result.data;
    } catch (error: any) {
      return null;
    }
  }
);

type PlayerSliceState = {
  player: any;
};

export const playerSlice = createSlice({
  name: "player",
  initialState: { player: null } as PlayerSliceState,
  reducers: {
    setStats(state, action) {
      state.player = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPlayerStats.fulfilled, (state, action) => {
      state.player = action.payload;
    });
    builder.addCase(getPlayerStats.rejected, (state) => {
      state.player = null;
    });
  },
});
