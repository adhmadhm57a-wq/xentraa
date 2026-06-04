export default function StudentPanel() {

  const student =
    JSON.parse(localStorage.getItem("student"));

  return (

    <div className="container">

      <h1>
        مرحبًا {student?.username}
      </h1>

      <div className="card">

        <h2>
          كورساتك
        </h2>

        <p>
          يمكنك مشاهدة الفيديوهات والامتحانات
        </p>

      </div>

    </div>
  );
}
