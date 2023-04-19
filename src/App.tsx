import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { Layout } from "./components";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/defaultTheme";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Layout>
					<Routes>
						<Route path="/" element={<LogIn />} />
						<Route path="/register" element={<Register />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
