import jsPDF from "jspdf";
import { useState } from "react";

export default function Certificates() {

  const [name, setName] = useState("");

  const generateCertificate = () => {

    if (!name) {
      return alert("اكتب اسم الطالب");
    }

    const doc = new jsPDF();

    // Title
    doc.setFontSize(24);

    doc.text("Xentra Certificate", 60, 40);

    // Student
    doc.setFontSize(18);

    doc.text(
      `This certificate is awarded to`,
      55,
      70
    );

    doc.setFontSize(22);

    doc.text(name, 80, 90);

    // Course
    doc.setFontSize(16);

    doc.text(
      "For successfully completing programming courses",
      20,
      120
    );

    // Footer
    doc.text(
      "Developed by Adham Ahmed",
      60,
      170
    );

    doc.save(`${name}-certificate.pdf`);
  };

  return (
    <div className="container">

      <h1>الشهادات</h1>

      <div className="card">

        <input
          placeholder="اسم الطالب"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button onClick={generateCertificate}>
          تحميل الشهادة PDF
        </button>

      </div>

    </div>
  );
}
