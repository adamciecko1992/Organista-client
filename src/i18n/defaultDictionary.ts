export const defaultDictionary = {
	login: "login",
	register: "register",
	logout: "logout",
	copywright: "copywright",
	password: "password",
	login_remember_me: "Rememver me",
	forgot_password: "Forgot Password",
	prompt_register: "Don't have an account? Sign Up",
	dashboard_garage: "Garage",
	dashboard_clinic: "Clinic",
	dashboard_shop: "Shop",
	tool1: "Tool lvl 1",
	tool2: "Tool lvl 2",
	tool3: "Tool lvl 3",
	tool4: "Tool lvl 4",
	tool5: "Tool lvl 5",
	tool6: "Tool lvl 6",
};

export type Dictionary = typeof defaultDictionary;
export type DictionaryKey = keyof typeof defaultDictionary;
