import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function StudentLogin() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    const response = await fetch(
      "https://YOUR_BACKEND_URL/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    if (data.success) {

      localStorage.setItem(
        "student",
        JSON.stringify(data.student)
      );

      navigate("/student-panel");

    } else {

      alert("بيانات غلط");

    }

  };

  return (

    <div className="container">

      <h1>
        دخول الطلاب
      </h1>

      <input
        placeholder="اسم المستخدم"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={login}>
        دخول
      </button>

    </div>
  );
}
