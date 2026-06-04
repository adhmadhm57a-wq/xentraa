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

        {/* 🏠 الصفحة الرئيسية */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* 🔐 تسجيل الدخول */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* 👑 لوحة الأدمن */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* 📚 الكورسات */}
        <Route
          path="/courses"
          element={<Courses />}
        />

        {/* 👨‍🏫 إدارة المدرسين */}
        <Route
          path="/teachers"
          element={<Teachers />}
        />

        {/* 👨‍🏫 لوحة المدرس */}
        <Route
          path="/teacher-panel"
          element={<TeacherPanel />}
        />

      </Routes>

    </BrowserRouter>
  );
}
