export const defaultDictionary  = {
    "login": "login",
    "register": "register",
    "logout": "logout",
    "copywright": "copywright",
    "password": "password",
    "login_remember_me": "Rememver me",
    "forgot_password":"Forgot Password",
    "prompt_register": "Don't have an account? Sign Up",
    "dashboard_garage": "Garage",
    "dashboard_clinic": "Clinic",
    "dashboard_shop":"Shop"
}

export type Dictionary = typeof defaultDictionary;
export type DictionaryKey = keyof typeof defaultDictionary;