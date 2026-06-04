import { useState, useEffect } from "react";

export default function Teachers() {

  const [teacherName, setTeacherName] = useState("");

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {

    const savedTeachers =
      JSON.parse(localStorage.getItem("teachers")) || [];

    setTeachers(savedTeachers);

  }, []);

  const addTeacher = () => {

    const admin =
      localStorage.getItem("admin");

    if (!admin) {

      alert("الأدمن فقط");

      return;

    }

    const updatedTeachers = [
      ...teachers,
      teacherName
    ];

    setTeachers(updatedTeachers);

    localStorage.setItem(
      "teachers",
      JSON.stringify(updatedTeachers)
    );

    alert("تم إضافة المدرس");

  };

  return (

    <div className="container">

      <h1>
        إدارة المدرسين
      </h1>

      <div className="card">

        <input
          placeholder="اسم المدرس"
          onChange={(e) =>
            setTeacherName(e.target.value)
          }
        />

        <button onClick={addTeacher}>
          إضافة مدرس
        </button>

      </div>

      {
        teachers.map((teacher, index) => (

          <div className="card" key={index}>

            <h2>
              {teacher}
            </h2>

          </div>

        ))
      }

    </div>
  );
}
