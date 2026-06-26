import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";
import TesterLayout from "./pages/App/TesterLayout";
import Dashboard from "./pages/App/Dashboard";
import NewTest from "./pages/App/NewTest";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tester" element={<TesterLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="new-test" element={<NewTest />} />
        <Route path="history" element={<div className="p-8">History (Coming Soon)</div>} />
        <Route path="reports" element={<div className="p-8">Reports (Coming Soon)</div>} />
        <Route path="settings" element={<div className="p-8">Settings (Coming Soon)</div>} />
        <Route path="results/:id" element={<div className="p-8">Test Results</div>} />
      </Route>
    </Routes>
  );
}