import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import serverUrl from "../../services/serverUrl";

export const checkSession = createAsyncThunk(
  "auth/checkSession/",
  async (session: string) => {
    try {
      const res = await axios({
        method: "post",
        url: `${serverUrl}/session/check`,
        data: {
          session,
        },
      });
      return session;
    } catch (error: any) {
      return error.response.data.detail.mess;
    }
  }
);

export const deleteSession = createAsyncThunk(
  "auth/deleteSession/",
  async (session: string) => {
    try {
      const res = await axios({
        method: "delete",
        url: `${serverUrl}/session/delete`,
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
  name: "auth",
  initialState: {
    isAuthenticated: Cookies.get("sessionId") ? true : false,
    session_id: Cookies.get("sessionId"),
    username: "",
  },
  reducers: {
    login: (state, { payload: { session_id, username } }) => {
      state.isAuthenticated = true;
      state.session_id = session_id;
      state.username = username;

      Cookies.set("sessionId", session_id, {
        expires: 1,
        secure: true,
        sameSite: "lax",
      });
      sessionStorage.setItem(session_id, JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.session_id = "";
      Cookies.remove("sessionId");
      sessionStorage.removeItem(state.session_id);
    },
  },
  extraReducers(builder) {
    builder.addCase(checkSession.fulfilled, (state, action) => {
      const storedData = sessionStorage.getItem(action.payload);
      try {
        const { username, session_id } = JSON.parse(storedData!);
        state.username = username;
        state.session_id = session_id;
      } catch (err) {
        console.error("Could not retrive data from session storage.");
      }
    });
    builder.addCase(deleteSession.fulfilled, (state, action) => {
      authSlice.caseReducers.logout(state);
    });
  },
});

export const authenticate = authSlice.actions.login;
export const deauthenticate = authSlice.actions.logout;
