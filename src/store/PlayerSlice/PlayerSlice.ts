import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import serverUrl from "../../services/serverUrl";

export const getPlayerStats = createAsyncThunk(
  "player/getData",
  async (session: string) => {
    try {
      return await axios({
        method: "delete",
        url: `${serverUrl}/player/getData`,
        data: {
          session,
        },
      });
    } catch (error: any) {
      return error;
    }
  }
);

export const authSlice = createSlice({
  name: "player",
  initialState: {
    playerStats: null,
  } as any,
  reducers: {
    setStats(state, action) {
      state.playerStats = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPlayerStats.fulfilled, (state, action) => {
      authSlice.caseReducers.setStats(state, action.payload);
    });
  },
});
