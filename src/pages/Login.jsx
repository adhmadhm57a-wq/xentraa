import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    if (

      username === "admin" &&
      password === "123456"

    ) {

      localStorage.setItem("admin", "true");

      navigate("/dashboard");

    } else {

      alert("بيانات غلط");

    }
  };

  return (

    <div className="container">

      <h1>
        تسجيل دخول الأدمن
      </h1>

      <input
        type="text"
        placeholder="اسم المستخدم"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        دخول
      </button>

    </div>
  );
}
