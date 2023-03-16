import "./App.scss";
import { useAppDispatch } from "./store";
import { useAppSelector } from "./store/useSelector";
import {authenticate, deauthenticate} from "./store/AuthSlice/AuthSlice";


function App() {
  const isAuth = useAppSelector((s) => s.auth.isAuthenticated);
  const dispatch = useAppDispatch()

  return (
    <>
    {isAuth ? "Yeag": "Nope"}
      <div>Works ?</div>
      <button onClick={()=> dispatch(authenticate())}>Auth</button>
      <button onClick={()=> dispatch(deauthenticate())}>Deauth</button>
    </>
  );
}

export default App;
