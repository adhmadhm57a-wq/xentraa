import { useEffect, useState } from "react";

export default function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {

    fetch(
      "https://YOUR_BACKEND_URL/students"
    )

    .then((res) => res.json())

    .then((data) => {

      setStudents(data);

    });

  }, []);

  return (

    <div className="container">

      <h1>
        الطلاب المسجلين
      </h1>

      {
        students.map((student, index) => (

          <div className="card" key={index}>

            <h2>
              {student.username}
            </h2>

          </div>

        ))
      }

    </div>
  );
}
