import { useState } from "react";

export default function Exams() {

  const [exam, setExam] = useState("");

  const addExam = () => {

    const exams =
      JSON.parse(localStorage.getItem("exams")) || [];

    exams.push(exam);

    localStorage.setItem(
      "exams",
      JSON.stringify(exams)
    );

    alert("تم إضافة الامتحان");

  };

  return (

    <div className="container">

      <h1>
        إدارة الامتحانات
      </h1>

      <input
        placeholder="اسم الامتحان"
        onChange={(e) =>
          setExam(e.target.value)
        }
      />

      <button onClick={addExam}>
        إضافة امتحان
      </button>

    </div>
  );
}
