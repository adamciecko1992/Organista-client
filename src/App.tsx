import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { Layout } from "./components";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/defaultTheme";
import { useAppSelector } from "./store/useSelector";
import MainModal from "./components/Modal/Modal";

function App() {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainModal />
        <Layout>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
              }
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
