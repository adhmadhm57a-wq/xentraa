import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="container">

      <h1>
        Xentra
      </h1>

      <p>
        تعلم البرمجة من الصفر حتى الاحتراف
      </p>

      <Link to="/login">

        <button>
          دخول الأدمن
        </button>

      </Link>

      <div className="card">

        <h2>
          منصة تعليم برمجة احترافية
        </h2>

        <p>
          كورسات حديثة
        </p>

        <p>
          شهادات للطلاب
        </p>

        <p>
          مشاريع عملية
        </p>

      </div>

      <div className="card">

        <h2>
          تواصل معنا
        </h2>

        <p>
          Gmail:
        </p>

        <p>
          domaelmnwofy@gmail.com
        </p>

        <a
          href="https://wa.me/201026255717"
          target="_blank"
          rel="noreferrer"
        >

          <button>
            تواصل واتساب
          </button>

        </a>

      </div>

      <footer>

        تطوير Adham Ahmed

      </footer>

    </div>
  );
}
