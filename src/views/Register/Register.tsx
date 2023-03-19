import { useState, ChangeEvent, MouseEvent } from "react";
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

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const t = useTranslationsContext();

  const handleTextInput =
    (key: LoginInput) =>
    ({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) => {
      switch (key) {
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

  const handleSubmit = async () => {
    try {
      const registerResult = await register(username, password);
    } catch (err) {
        setError(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {t("login")}
        </Typography>
        <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            onClick={(e) => handleSubmit()}
          >
            {t("login")}
          </Button>
        </Box>
        {error && "NIE UDAŁO SIE SORKA"}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
