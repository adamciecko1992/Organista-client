import React, { useState, ChangeEvent } from "react";
import {
  Copyright,
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
} from "../../components";
import { useTranslationsContext } from "../../i18n/TranslationsContext";
import { LoginInput } from "./types";
import { AdditionalActions } from "./AdditionalActions";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { authenticate } from "../../store/AuthSlice/AuthSlice";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ show: false, message: "" });
  const t = useTranslationsContext();

  const dispatch = useAppDispatch();

  const nav = useNavigate();

  const handleTextInput =
    (key: LoginInput) =>
    ({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) => {
      switch (key) {
        case "password":
          setPassword(inputValue);
          break;
        case "email":
          setEmail(inputValue);
          break;
        default:
          throw new Error("Unknown input.");
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const loginResult = await login(email, password);

      if (loginResult?.status === 202) {
        dispatch(
          authenticate({
            session_id: loginResult.data.sess_id,
            username: loginResult.data.username,
          })
        );

        nav("/dashboard/");
      } else throw new Error(loginResult.response.data.detail.mess);
    } catch (err: any) {
      setError({ show: true, message: err.message });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30%",
        }}
      >
        <Typography component="h1" variant="h5">
          {t("login")}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email-address"
            type="email"
            autoFocus
            value={email}
            onChange={handleTextInput("email")}
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("login_remember_me")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("login")}
          </Button>
          {error.show && error.message}
          <AdditionalActions />
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
