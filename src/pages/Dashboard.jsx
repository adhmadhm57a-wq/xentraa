import { Link } from "react-router-dom";

export default function Dashboard() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  const courses =
    JSON.parse(localStorage.getItem("courses")) || [];

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
            عدد الكورسات
          </h2>

          <p>
            {courses.length}
          </p>

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
            AI Chat
          </h2>

          <Link to="/ai">

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

        <div className="card">

          <h2>
            الشهادات
          </h2>

          <Link to="/certificates">

            <button>
              فتح
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}
