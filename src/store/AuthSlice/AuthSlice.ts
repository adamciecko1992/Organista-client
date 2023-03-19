import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: () => ({
       isAuthenticated: true,
    }),
    logout: () => ({
      isAuthenticated: false,
    }),
  },
});

export const authenticate = authSlice.actions.login;
export const deauthenticate = authSlice.actions.logout;

