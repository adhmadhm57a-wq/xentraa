import { useState, useEffect } from "react";

export default function Support() {

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("support")) || [];
    setMessages(saved);
  }, []);

  const sendMessage = () => {

    if (!msg) return;

    const autoReply =
      "تم استلام رسالتك، سيتم الرد عليك قريباً من فريق الدعم";

    const newMsg = {
      text: msg,
      reply: autoReply,
      time: new Date().toLocaleString()
    };

    const updated = [...messages, newMsg];

    setMessages(updated);

    localStorage.setItem("support", JSON.stringify(updated));

    setMsg("");
  };

  return (

    <div className="container">

      <h1>خدمة العملاء</h1>

      <div className="card">

        <input
          placeholder="اكتب رسالتك"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button onClick={sendMessage}>
          إرسال
        </button>

      </div>

      {messages.map((m, i) => (

        <div className="card" key={i}>

          <p>📩 {m.text}</p>

          <p style={{color:"lightgreen"}}>
            🤖 {m.reply}
          </p>

          <small>{m.time}</small>

        </div>

      ))}

    </div>
  );
}
