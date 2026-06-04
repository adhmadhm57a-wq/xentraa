import { useState, useEffect } from "react";

export default function Courses() {

  const [course, setCourse] = useState("");

  const [video, setVideo] = useState(null);

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

    if (!video) {

      alert("اختر فيديو");

      return;

    }

    const videoURL =
      URL.createObjectURL(video);

    const newCourse = {
      course,
      video: videoURL,
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
          type="file"
          accept="video/*"
          onChange={(e) =>
            setVideo(e.target.files[0])
          }
        />

        <input
          placeholder="رابط ملفات الأكواد"
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

            <video
              width="100%"
              controls
            >

              <source
                src={item.video}
                type="video/mp4"
              />

            </video>

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
