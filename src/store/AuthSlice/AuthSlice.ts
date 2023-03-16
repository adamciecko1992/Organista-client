import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuthenticated:false,
    },
    reducers: {
        login: () => {

        },
        logout: () => {

        }
    },
  });
  