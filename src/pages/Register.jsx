import { useState } from "react";

export default function Register() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const register = async () => {

    const response = await fetch(
      "https://YOUR_BACKEND_URL/register",
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

    alert(data.message);

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
