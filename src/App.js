import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/Navigation.jsx";
import Login from "./routes/login/Login.jsx";
import SignUp from "./routes/signUp/SignUp.jsx";
import Home from "./routes/home/Home.jsx";

import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
