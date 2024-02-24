import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Routes, useLocation } from "react-router-dom";
 import "./App.css";

import Home from "./Components/Home";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" ? (
        <Login />
      ) : location.pathname === "/signup" ? (
        <SignUp />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
