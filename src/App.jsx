import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
