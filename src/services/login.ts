import axios from "axios";
import HashPassword from "../utils/hashing";
import serverUrl from "./serverUrl";

export async function login(username: string, password: string) {
	try {
		const res = await axios({
			method: "post",
			url: `${serverUrl}/login/`,
			data: {
				username,
				password: HashPassword(password),
			},
		});
		return res;
	} catch (error) {
		console.error("Sign in unsuccessfull", error);
	}
}
