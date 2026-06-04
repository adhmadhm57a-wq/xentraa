import { useState, useEffect } from "react";

export default function Courses() {

  const [course, setCourse] = useState("");

  const [video, setVideo] = useState("");

  const [codeFile, setCodeFile] = useState("");

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const savedCourses =
      JSON.parse(localStorage.getItem("courses")) || [];

    setCourses(savedCourses);

  }, []);

  const addCourse = () => {

    const admin =
      localStorage.getItem("admin");

    if (!admin) {

      alert("الأدمن فقط");

      return;

    }

    const newCourse = {
      course,
      video,
      codeFile
    };

    const updatedCourses = [
      ...courses,
      newCourse
    ];

    setCourses(updatedCourses);

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    alert("تم رفع الكورس");

  };

  return (

    <div className="container">

      <h1>
        إدارة الكورسات
      </h1>

      <div className="card">

        <input
          placeholder="اسم الكورس"
          onChange={(e) =>
            setCourse(e.target.value)
          }
        />

        <input
          placeholder="رابط فيديو الشرح"
          onChange={(e) =>
            setVideo(e.target.value)
          }
        />

        <input
          placeholder="رابط ملف الأكواد"
          onChange={(e) =>
            setCodeFile(e.target.value)
          }
        />

        <button onClick={addCourse}>
          رفع الكورس
        </button>

      </div>

      {
        courses.map((item, index) => (

          <div className="card" key={index}>

            <h2>
              {item.course}
            </h2>

            <iframe
              width="100%"
              height="220"
              src={item.video}
              title="video"
              allowFullScreen
            />

            <br />

            <a
              href={item.codeFile}
              target="_blank"
              rel="noreferrer"
            >

              <button>
                تحميل ملفات الأكواد
              </button>

            </a>

          </div>

        ))
      }

    </div>
  );
}
