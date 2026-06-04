import { Link } from "react-router-dom";

export default function Dashboard() {

  const admin = localStorage.getItem("admin");

  if (!admin) {
    return (
      <div className="container">
        <h2>ممنوع الدخول</h2>
        <p>هذه الصفحة للأدمن فقط</p>
      </div>
    );
  }

  return (
    <div className="container">

      {/* Header */}
      <h1>لوحة تحكم الأدمن</h1>

      <p className="small">
        إدارة منصة Xentra
      </p>

      {/* Stats (بسيطة MVP) */}
      <div className="card">

        <h3>إحصائيات سريعة</h3>

        <p>
          الطلاب: {JSON.parse(localStorage.getItem("students") || "[]").length}
        </p>

        <p>
          المدرسين: {JSON.parse(localStorage.getItem("teachers") || "[]").length}
        </p>

        <p>
          الكورسات: {JSON.parse(localStorage.getItem("courses") || "[]").length}
        </p>

      </div>

      {/* Admin Controls */}
      <div className="grid">

        <Link to="/students">
          <button>الطلاب</button>
        </Link>

        <Link to="/teachers">
          <button>المدرسين</button>
        </Link>

        <Link to="/courses">
          <button>الكورسات</button>
        </Link>

        <Link to="/exams">
          <button>الاختبارات</button>
        </Link>

        <Link to="/certificates">
          <button>الشهادات</button>
        </Link>

        <Link to="/ai">
          <button>AI مساعد</button>
        </Link>

        <Link to="/payments-admin">
          <button>مراجعة الاشتراكات</button>
        </Link>

        <Link to="/support">
          <button>الدعم الفني</button>
        </Link>

      </div>

      {/* Danger Zone */}
      <div className="card">

        <h3>أدوات متقدمة</h3>

        <button
          onClick={() => {
            localStorage.clear();
            alert("تم مسح البيانات");
            window.location.reload();
          }}
          style={{ background: "red" }}
        >
          مسح كل البيانات
        </button>

      </div>

    </div>
  );
          }
