import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { Layout } from "./components";
import { ThemeProvider } from "@mui/material";
import {theme} from "./themes/defaultTheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
