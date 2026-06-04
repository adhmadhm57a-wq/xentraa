export default function Certificates() {

  const students =
    JSON.parse(localStorage.getItem("students")) || [];

  return (

    <div className="container">

      <h1>
        الشهادات
      </h1>

      {
        students.map((student, index) => (

          <div className="card" key={index}>

            <h2>
              شهادة إتمام
            </h2>

            <p>
              {student.username}
            </p>

          </div>

        ))
      }

    </div>
  );
}
