import { useEffect } from "react";
import Auth from "./pages/Auth/Auth";
import Boards from "./pages/Boards";
import Board from "./pages/Board";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store";
import { setIsLogged } from "./features/AuthSlice";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const dispatch = useAppDispatch();

  const [cookies] = useCookies(['token', 'username']); 
  console.log(cookies)
  const authState = useAppSelector((state) => state.auth);
  
  const { isLogged } = authState;

  useEffect(() => {
    if (cookies.token) {
      dispatch(setIsLogged(true));
    }
  }, []);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLogged ? <Boards />: <Navigate to="auth" />}
          />
          <Route
            path="auth"
            element={!isLogged ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="board/:id"
            element={isLogged ? <Board /> : <Navigate to="auth" />}
          />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
