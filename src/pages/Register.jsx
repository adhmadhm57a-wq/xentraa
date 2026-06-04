import { useState } from "react";

export default function Register() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const register = () => {

    const users =
      JSON.parse(localStorage.getItem("students")) || [];

    users.push({
      username,
      password
    });

    localStorage.setItem(
      "students",
      JSON.stringify(users)
    );

    alert("تم إنشاء الحساب");

  };

  return (

    <div className="container">

      <h1>
        تسجيل طالب
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

      <button onClick={register}>
        تسجيل
      </button>

    </div>
  );
}
