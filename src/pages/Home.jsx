import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="container">

      <p className="topText">
        تصميم وتطوير Adham Ahmed
      </p>

      <h1>
        Xentra
      </h1>

      <p>
        تعلم البرمجة من الصفر حتى الاحتراف
      </p>

      <div className="grid">

        <div className="card">
          <h2>كورسات احترافية</h2>
        </div>

        <div className="card">
          <h2>امتحانات وشهادات</h2>
        </div>

        <div className="card">
          <h2>AI Assistant</h2>
        </div>

      </div>

      <div className="card">

        <h2>
          تواصل معنا
        </h2>

        <p>
          domaelmnwofy@gmail.com
        </p>

        <a
          href="https://wa.me/201026255717"
          target="_blank"
          rel="noreferrer"
        >

          <button>
            واتساب
          </button>

        </a>

      </div>

      <div className="bottomAdmin">

        <Link to="/login">

          <button>
            دخول الأدمن
          </button>

        </Link>

      </div>

    </div>
  );
}
