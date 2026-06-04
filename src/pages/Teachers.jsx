import { useState, useEffect } from "react";

export default function Teachers() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [teachers, setTeachers] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const teacherUsers = users.filter(
      (u) => u.role === "teacher"
    );

    setTeachers(teacherUsers);

  }, []);

  const saveUsers = (updatedTeachers) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // حذف المدرسين القدام
    const nonTeachers = users.filter(
      (u) => u.role !== "teacher"
    );

    const updatedUsers = [
      ...nonTeachers,
      ...updatedTeachers
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setTeachers(updatedTeachers);
  };

  const addTeacher = () => {

    const admin = localStorage.getItem("admin");

    if (!admin) {
      return alert("الأدمن فقط");
    }

    if (!username || !password) {
      return alert("اكمل البيانات");
    }

    if (editIndex !== null) {

      const updated = [...teachers];

      updated[editIndex] = {
        ...updated[editIndex],
        username,
        password
      };

      saveUsers(updated);

      setEditIndex(null);

      alert("تم تعديل المدرس");

    } else {

      const newTeacher = {
        username,
        password,
        role: "teacher"
      };

      const updated = [...teachers, newTeacher];

      saveUsers(updated);

      alert("تم إضافة المدرس");

    }

    setUsername("");
    setPassword("");

  };

  const editTeacher = (index) => {

    const teacher = teachers[index];

    setUsername(teacher.username);
    setPassword(teacher.password);

    setEditIndex(index);

  };

  const deleteTeacher = (index) => {

    const updated = teachers.filter(
      (_, i) => i !== index
    );

    saveUsers(updated);

    alert("تم حذف المدرس");

  };

  return (
    <div className="container">

      <h1>إدارة المدرسين</h1>

      {/* ➕ إضافة / تعديل مدرس */}
      <div className="card">

        <input
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={addTeacher}>

          {editIndex !== null
            ? "تعديل المدرس"
            : "إضافة مدرس"}

        </button>

      </div>

      {/* 📋 قائمة المدرسين */}
      {teachers.length === 0 ? (

        <p>لا يوجد مدرسين</p>

      ) : (

        teachers.map((teacher, index) => (

          <div className="card" key={index}>

            <h3>
              👨‍🏫 {teacher.username}
            </h3>

            <p>
              كلمة المرور: {teacher.password}
            </p>

            <button
              onClick={() => editTeacher(index)}
            >
              تعديل
            </button>

            <button
              onClick={() => deleteTeacher(index)}
              style={{ background: "red" }}
            >
              حذف
            </button>

          </div>

        ))

      )}

    </div>
  );
}
