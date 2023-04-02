import axios from "axios";

export async function register(
	email: string,
	username: string,
	password: string
) {
	try {
		const res = await axios({
			method: "post",
			url: "http://127.0.0.1:8000/iop/register/",
			data: {
				email,
				username,
				password,
			},
		});
		return res;
	} catch (error) {
		console.error("Sign up unsuccessfull", error);
	}
}
