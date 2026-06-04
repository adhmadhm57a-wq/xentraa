import { Link } from "react-router-dom";

export default function Dashboard() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const courses =
    JSON.parse(localStorage.getItem("courses")) || [];

  const teachers =
    JSON.parse(localStorage.getItem("teachers")) || [];

  return (

    <div className="container">

      <h1>
        لوحة تحكم Xentra
      </h1>

      <div className="grid">

        <div className="card">

          <h2>
            عدد الطلاب
          </h2>

          <p>
            {students.length}
          </p>

        </div>

        <div className="card">

          <h2>
            عدد المدرسين
          </h2>

          <p>
            {teachers.length}
          </p>

        </div>

        <div className="card">

          <h2>
            عدد الكورسات
          </h2>

          <p>
            {courses.length}
          </p>

        </div>

        <div className="card">

          <h2>
            إدارة المدرسين
          </h2>

          <Link to="/teachers">

            <button>
              فتح
            </button>

          </Link>

        </div>

        <div className="card">

          <h2>
            إدارة الكورسات
          </h2>

          <Link to="/courses">

            <button>
              فتح
            </button>

          </Link>

        </div>

        <div className="card">

          <h2>
            الامتحانات
          </h2>

          <Link to="/exams">

            <button>
              فتح
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}
