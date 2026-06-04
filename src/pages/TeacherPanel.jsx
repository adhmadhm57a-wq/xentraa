import { Link } from "react-router-dom";

export default function TeacherPanel() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "teacher") {

    return (
      <div className="container">

        <h2>ممنوع الدخول</h2>

      </div>
    );
  }

  return (
    <div className="container">

      {/* 👨‍🏫 بيانات المدرس */}
      <h1>لوحة المدرس</h1>

      <div className="card">

        <h3>
          مرحباً {user.username}
        </h3>

        <p>
          يمكنك إدارة الكورسات الخاصة بك
        </p>

      </div>

      {/* 📚 أدوات المدرس */}
      <div className="grid">

        <Link to="/courses">
          <button>
            إدارة الكورسات
          </button>
        </Link>

        <Link to="/exams">
          <button>
            إدارة الاختبارات
          </button>
        </Link>

        <Link to="/support">
          <button>
            الدعم الفني
          </button>
        </Link>

      </div>

      {/* 🚪 تسجيل خروج */}
      <div className="card">

        <button
          style={{ background: "red" }}
          onClick={() => {

            localStorage.removeItem("user");

            window.location.href = "/";

          }}
        >
          تسجيل خروج
        </button>

      </div>

    </div>
  );
}
