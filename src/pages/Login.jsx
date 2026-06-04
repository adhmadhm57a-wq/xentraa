import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {

    // 👑 الأدمن الأساسي
    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem("admin", "true");

      navigate("/dashboard");

      return;
    }

    // 👨‍🏫 المدرسين
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (!user) {
      return alert("بيانات خاطئة");
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    // 👨‍🏫 مدرس
    if (user.role === "teacher") {

      navigate("/teacher-panel");

      return;
    }

    // 👨‍🎓 طالب
    if (user.role === "student") {

      navigate("/student-panel");

      return;
    }

  };

  return (
    <div className="container">

      <h1>تسجيل الدخول</h1>

      <div className="card">

        <input
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={login}>
          دخول
        </button>

      </div>

    </div>
  );
      }
