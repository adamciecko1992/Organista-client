import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { Layout } from "./components";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Route path="/" exact component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
