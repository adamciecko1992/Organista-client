import axios from "axios";

export async function login(username: string, password: string) {
	try {
		const res = await axios({
			method: "post",
			url: "http://127.0.0.1:8000/iop/login/",
			data: {
				username,
				password,
			},
		});
		return res;
	} catch (error) {
		console.error("Sign in unsuccessfull", error);
	}
}
