import { useEffect, useState } from "react";

export default function AdminSupport() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("support")) || [];
    setMessages(saved);
  }, []);

  const clearMessages = () => {
    localStorage.removeItem("support");
    setMessages([]);
  };

  return (

    <div className="container">

      <h1>رسائل الدعم الفني</h1>

      <button onClick={clearMessages}>
        حذف كل الرسائل
      </button>

      {messages.length === 0 && (
        <p>لا توجد رسائل</p>
      )}

      {messages.map((m, i) => (

        <div className="card" key={i}>

          <h3>رسالة الطالب</h3>
          <p>{m.text}</p>

          <h3>رد تلقائي</h3>
          <p style={{color:"lightgreen"}}>
            {m.reply}
          </p>

          <small>{m.time}</small>

        </div>

      ))}

    </div>
  );
}
