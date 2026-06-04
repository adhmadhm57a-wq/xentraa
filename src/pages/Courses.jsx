import { useState } from "react";

export default function Courses() {

  const [course, setCourse] = useState("");

  const [video, setVideo] = useState("");

  const addCourse = () => {

    const courses =
      JSON.parse(localStorage.getItem("courses")) || [];

    courses.push({
      course,
      video
    });

    localStorage.setItem(
      "courses",
      JSON.stringify(courses)
    );

    alert("تم رفع الكورس");

  };

  return (

    <div className="container">

      <h1>
        إدارة الكورسات
      </h1>

      <input
        placeholder="اسم الكورس"
        onChange={(e) =>
          setCourse(e.target.value)
        }
      />

      <input
        placeholder="رابط الفيديو"
        onChange={(e) =>
          setVideo(e.target.value)
        }
      />

      <button onClick={addCourse}>
        رفع الكورس
      </button>

    </div>
  );
}
