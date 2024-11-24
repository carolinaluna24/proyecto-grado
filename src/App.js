import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import StudentPanel from "./pages/StudentPanel";
import AdvisorPanel from "./pages/AdvisorPanel";
import CoordinatorPanel from "./pages/CoordinatorPanel";
import Login from "./pages/Login";
import JuryPanel from "./pages/JuryPanel";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student" element={<StudentPanel />} />
            <Route path="/advisor" element={<AdvisorPanel />} />
            <Route path="/jury" element={<JuryPanel />} />
            <Route path="/coordinator" element={<CoordinatorPanel />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

