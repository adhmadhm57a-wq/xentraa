import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="container">

      {/* ✨ Header */}
      <div style={{ marginBottom: "20px" }}>

        <p className="small">
          تصميم وتطوير Adham Ahmed
        </p>

        <h1 style={{ fontSize: "42px", margin: "10px 0" }}>
          Xentra
        </h1>

        <p style={{ opacity: 0.8 }}>
          منصة تعليم البرمجة والتقنية
        </p>

      </div>

      {/* 📊 Quick Info */}
      <div className="card">

        <h3>مرحباً بك في Xentra 🚀</h3>

        <p>
          تعلم البرمجة، اختبارات، كورسات فيديو، شهادات، ودعم فني في مكان واحد.
        </p>

      </div>

      {/* 🔘 Main Navigation */}
      <div className="grid">

        <Link to="/student-login">
          <button>دخول طالب</button>
        </Link>

        <Link to="/register">
          <button>تسجيل طالب</button>
        </Link>

        <Link to="/login">
          <button>دخول الأدمن</button>
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

        <Link to="/subscriptions">
          <button>الاشتراكات</button>
        </Link>

        <Link to="/payment">
          <button>الدفع</button>
        </Link>

        <Link to="/support">
          <button>خدمة العملاء</button>
        </Link>

        <Link to="/ai">
          <button>AI مساعد</button>
        </Link>

      </div>

      {/* 📱 Features */}
      <div className="card">

        <h3>مميزات المنصة</h3>

        <ul style={{ textAlign: "right", lineHeight: "1.8" }}>
          <li>✔ كورسات فيديو من الأدمن فقط</li>
          <li>✔ اختبارات اختياري + مقالي</li>
          <li>✔ نظام اشتراكات مجاني ومدفوع</li>
          <li>✔ دعم فني مباشر</li>
          <li>✔ شهادات تلقائية</li>
        </ul>

      </div>

      {/* 💡 Footer */}
      <footer style={{ marginTop: "30px", opacity: 0.7 }}>

        © 2026 Xentra Platform — All Rights Reserved

      </footer>

    </div>
  );
}
