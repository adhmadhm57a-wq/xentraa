import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import TeacherPanel from "./pages/TeacherPanel";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route
          path="/teacher-panel"
          element={<TeacherPanel />}
        />

      </Routes>

    </BrowserRouter>
  );
}
