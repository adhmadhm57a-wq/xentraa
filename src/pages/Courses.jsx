import { useState, useEffect } from "react";

export default function Courses() {

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [file, setFile] = useState("");
  const [type, setType] = useState("free");

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(saved);
  }, []);

  const addCourse = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const admin = localStorage.getItem("admin");

    if (!admin && (!user || user.role !== "teacher")) {
      return alert("غير مصرح");
    }

    const newCourse = {
      id: Date.now(),
      title,
      video: video ? URL.createObjectURL(video) : "",
      file,
      type,
      createdBy: user?.username || "admin"
    };

    const updated = [...courses, newCourse];

    setCourses(updated);
    localStorage.setItem("courses", JSON.stringify(updated));

    setTitle("");
    setVideo(null);
    setFile("");
    setType("free");

  };

  // 🛒 الكورسات المشتراة
  const purchased =
    JSON.parse(localStorage.getItem("purchasedCourses")) || [];

  const buyCourse = (id) => {

    const updated = [...purchased, id];

    localStorage.setItem(
      "purchasedCourses",
      JSON.stringify(updated)
    );

    alert("تم شراء الكورس");
  };

  return (
    <div className="container">

      <h1>الكورسات</h1>

      {/* ➕ إضافة كورس */}
      {(localStorage.getItem("admin") ||
        JSON.parse(localStorage.getItem("user"))?.role === "teacher") && (

        <div className="card">

          <h3>إضافة كورس</h3>

          <input
            placeholder="اسم الكورس"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />

          <input
            placeholder="ملفات"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="free">مجاني</option>
            <option value="premium">مدفوع</option>
          </select>

          <button onClick={addCourse}>
            نشر الكورس
            </button>

        </div>
      )}

      {/* 📺 عرض الكورسات */}
      {courses.map((c) => {

        const isPurchased = purchased.includes(c.id);

        return (

          <div className="card" key={c.id}>

            <h3>{c.title}</h3>

            <p>بواسطة: {c.createdBy}</p>

            {/* 🔒 الحماية */}
            {c.type === "premium" && !isPurchased ? (

              <>
                <p style={{ color: "red" }}>
                  🔒 هذا كورس مدفوع
                </p>

                <button onClick={() => buyCourse(c.id)}>
                  شراء الكورس
                </button>
              </>

            ) : (

              <>
                {c.video && (
                  <video width="100%" controls>
                    <source src={c.video} />
                  </video>
                )}

                {c.file && (
                  <a href={c.file} target="_blank">
                    تحميل الملفات
                  </a>
                )}
              </>

            )}

          </div>

        );

      })}

    </div>
  );
}
