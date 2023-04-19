import axios from "axios";
import HashPassword from "../utils/hashing";
import serverUrl from "./serverUrl";

export async function login(email: string, password: string) {
	try {
		const res = await axios({
			method: "post",
			url: `${serverUrl}/login/`,
			data: {
				email,
				password: HashPassword(password),
			},
		});
		console.log(res)
		return res;
	} catch (error: any) {
		console.error("Sign in unsuccessfull", error.response.data.detail);
	}
}
