export default function Students() {

  const students = [
    "Ahmed",
    "Mohamed",
    "Ali",
    "Youssef"
  ];

  return (

    <div className="container">

      <h1>
        الطلاب
      </h1>

      {
        students.map((student, index) => (

          <div className="card" key={index}>

            <h2>
              {student}
            </h2>

            <p>
              طالب برمجة
            </p>

          </div>

        ))
      }

    </div>
  );
}
