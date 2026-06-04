export default function Teachers() {

  const teachers = [
    "Adham Ahmed",
    "Mahmoud",
    "Karim"
  ];

  return (

    <div className="container">

      <h1>
        المدرسين
      </h1>

      {
        teachers.map((teacher, index) => (

          <div className="card" key={index}>

            <h2>
              {teacher}
            </h2>

            <p>
              مدرس برمجة
            </p>

          </div>

        ))
      }

    </div>
  );
}
