import { useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const admin = localStorage.getItem("admin");

    if (!admin) {

      navigate("/login");

    }

  }, []);

  return (

    <div className="container">

      <h1>
        لوحة تحكم Xentra
      </h1>

      <div className="grid">

        <div className="card">

          <h2>
            الطلاب
          </h2>

          <Link to="/students">

            <button>
              فتح
            </button>

          </Link>

        </div>

        <div className="card">

          <h2>
            المدرسين
          </h2>

          <Link to="/teachers">

            <button>
              فتح
            </button>

          </Link>

        </div>

        <div className="card">

          <h2>
            الكورسات
          </h2>

          <Link to="/courses">

            <button>
              فتح
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}
