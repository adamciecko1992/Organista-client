import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LogIn } from "./views/Login/Login";
import { Register } from "./views/Register/Register";



function App() {

  return (
    <BrowserRouter>
    <Route path="/" exact component={LogIn} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
  </BrowserRouter>
  );
}

export default App;
