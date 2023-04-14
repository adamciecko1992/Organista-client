import { useState, ChangeEvent } from "react";
import {
	Copyright,
	Container,
	CssBaseline,
	Box,
	Typography,
	TextField,
	Button,
} from "../../components";
import { useTranslationsContext } from "../../i18n/TranslationsContext";
import { register } from "../../services/register";
import { LoginInput } from "./types";
import { useHistory } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const t = useTranslationsContext();

	const history = useHistory();

	const handleTextInput =
		(key: LoginInput) =>
		({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) => {
			switch (key) {
				case "email":
					setEmail(inputValue);
					break;
				case "password":
					setPassword(inputValue);
					break;
				case "username":
					setUsername(inputValue);
					break;
				default:
					throw new Error("Unknown input.");
			}
		};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const registerResult = await register(email, username, password);
			if (registerResult?.status !== 201) throw new Error("Bad request");
			history.push("/dashboard/");
		} catch (err) {
			setError(true);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					paddingY: "25%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					{t("register")}
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						name="email"
						label="Email"
						type="email"
						id="email"
						autoFocus
						autoComplete="email-address"
						value={email}
						onChange={handleTextInput("email")}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="User Name"
						name="username"
						autoComplete="username"
						value={username}
						onChange={handleTextInput("username")}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label={t("password")}
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={handleTextInput("password")}
					/>
					<Button
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						type="submit"
					>
						{t("register")}
					</Button>
				</Box>
				{error && "NIE UDAŁO SIE SORKA"}
			</Box>
			<Copyright/>
		</Container>
	);
};
