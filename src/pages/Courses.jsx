export default function Courses() {

  const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python"
  ];

  return (

    <div className="container">

      <h1>
        الكورسات
      </h1>

      {
        courses.map((course, index) => (

          <div className="card" key={index}>

            <h2>
              {course}
            </h2>

            <button>
              مشاهدة الكورس
            </button>

          </div>

        ))
      }

    </div>
  );
}
