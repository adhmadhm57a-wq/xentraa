import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentLogin from "./pages/StudentLogin";
import StudentPanel from "./pages/StudentPanel";

import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Exams from "./pages/Exams";
import Certificates from "./pages/Certificates";

import Payment from "./pages/Payment";
import PaymentsAdmin from "./pages/PaymentsAdmin";
import Subscriptions from "./pages/Subscriptions";

import Support from "./pages/Support";
import AdminSupport from "./pages/AdminSupport";

import AIChat from "./pages/AIChat";

import TeacherPanel from "./pages/TeacherPanel";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* 🏠 الرئيسية */}
        <Route path="/" element={<Home />} />

        {/* 🔐 تسجيل الدخول */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-login" element={<StudentLogin />} />

        {/* 👨‍🎓 الطالب */}
        <Route path="/student-panel" element={<StudentPanel />} />

        {/* 👑 الأدمن */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />

        {/* 📚 الكورسات */}
        <Route path="/courses" element={<Courses />} />

        {/* 🧪 الاختبارات */}
        <Route path="/exams" element={<Exams />} />

        {/* 🏆 الشهادات */}
        <Route path="/certificates" element={<Certificates />} />

        {/* 💰 الاشتراكات */}
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payments-admin" element={<PaymentsAdmin />} />

        {/* 🆘 الدعم */}
        <Route path="/support" element={<Support />} />
        <Route path="/admin-support" element={<AdminSupport />} />

        {/* 🤖 AI */}
        <Route path="/ai" element={<AIChat />} />

        {/* 👨‍🏫 المدرس */}
        <Route path="/teacher-panel" element={<TeacherPanel />} />

      </Routes>

    </BrowserRouter>
  );
}
