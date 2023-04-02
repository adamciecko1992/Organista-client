import { useState, ChangeEvent } from "react";
import {
  Copyright,
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
  Grid,
  Link,
} from "../../components";
import { useTranslationsContext } from "../../i18n/TranslationsContext";
import { LoginInput } from "./types";


export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const t = useTranslationsContext();

  const handleTextInput =
    (key: LoginInput) =>
    ({
      target: { value: inputValue },
    }: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = () => {};

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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("login_remember_me")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {}}
          >
            {t("login")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("forgot_password")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t("prompt_register")}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
