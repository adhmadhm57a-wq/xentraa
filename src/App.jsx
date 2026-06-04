import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import StudentPanel from "./pages/StudentPanel";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Exams from "./pages/Exams";
import Certificates from "./pages/Certificates";
import AIChat from "./pages/AIChat";
import Subscriptions from "./pages/Subscriptions";
import Payment from "./pages/Payment";
import PaymentsAdmin from "./pages/PaymentsAdmin";

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
        <Route path="/exams" element={<Exams />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/ai" element={<AIChat />} />

        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payments-admin" element={<PaymentsAdmin />} />

      </Routes>
    </BrowserRouter>
  );
}
