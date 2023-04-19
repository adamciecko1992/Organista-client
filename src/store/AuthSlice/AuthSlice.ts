import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		session_id: "",
	},
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
			state.session_id = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.session_id = "";
		},
	},
});

export const authenticate = authSlice.actions.login;
export const deauthenticate = authSlice.actions.logout;
