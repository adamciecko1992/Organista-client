import axios from "axios";
import HashPassword from "../utils/hashing";
import serverUrl from "./serverUrl";

export async function register(
	email: string,
	username: string,
	password: string
) {
	try {
		const res = await axios({
			method: "post",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			url: `${serverUrl}/register/`,
			data: {
				email,
				username,
				password: HashPassword(password),
			},
		});
		return res;
	} catch (error: any) {
		console.error("Sign up unsuccessfull", error.response.data.detail);
	}
}
