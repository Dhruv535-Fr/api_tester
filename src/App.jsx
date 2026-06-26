import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import TesterPage from "./pages/TesterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tester" element={<TesterPage />} />
    </Routes>
  );
}