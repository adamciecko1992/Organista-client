import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
