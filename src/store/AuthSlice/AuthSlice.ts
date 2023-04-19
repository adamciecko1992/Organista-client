import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: Cookies.get("sessionId") ? true : false,
		session_id: "",
	},
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
			state.session_id = action.payload;
			Cookies.set("sessionId", action.payload, {
				expires: 1,
				secure: true,
				sameSite: "lax"
			});
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.session_id = "";
			Cookies.remove("sessionId");
		},
	},
});

export const authenticate = authSlice.actions.login;
export const deauthenticate = authSlice.actions.logout;
