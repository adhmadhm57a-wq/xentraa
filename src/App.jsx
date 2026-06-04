import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import StudentPanel from "./pages/StudentPanel";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import AIChat from "./pages/AIChat";
import Exams from "./pages/Exams";
import Certificates from "./pages/Certificates";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/student-login" element={<StudentLogin />} />

        <Route path="/student-panel" element={<StudentPanel />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/students" element={<Students />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/ai" element={<AIChat />} />

        <Route path="/exams" element={<Exams />} />

        <Route path="/certificates" element={<Certificates />} />

      </Routes>

    </BrowserRouter>

  );
}
