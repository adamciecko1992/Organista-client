import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import serverUrl from "../../services/serverUrl";
import { useAppDispatch } from "../useDispatch";

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
	},
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
			state.session_id = action.payload;
			Cookies.set("sessionId", action.payload, {
				expires: 1,
				secure: true,
				sameSite: "lax",
			});
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.session_id = "";
			Cookies.remove("sessionId");
		},
	},
	extraReducers(builder) {
		builder.addCase(checkSession.fulfilled, (state, action) => {
			console.log(action.payload)
		});
		builder.addCase(deleteSession.fulfilled, (state, action) => {
			authSlice.caseReducers.logout(state);
		});
	},
});

export const authenticate = authSlice.actions.login;
export const deauthenticate = authSlice.actions.logout;
