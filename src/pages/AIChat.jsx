import { useState } from "react";

export default function AIChat() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    if (!message) return;

    try {

      const res = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization:
              "Bearer YOUR_OPENAI_API_KEY"
          },

          body: JSON.stringify({

            model: "gpt-4o-mini",

            messages: [
              {
                role: "system",
                content:
                  "أنت مساعد برمجة ذكي لمنصة Xentra"
              },

              {
                role: "user",
                content: message
              }
            ]

          })

        }
      );

      const data = await res.json();

      setReply(
        data.choices[0].message.content
      );

    } catch (err) {

      console.log(err);

      alert("حدث خطأ");

    }

  };

  return (
    <div className="container">

      <h1>AI Chat</h1>

      <div className="card">

        <textarea
          placeholder="اسأل AI"
          value={message}
          onChange={(e)=>
            setMessage(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          إرسال
        </button>

      </div>

      {reply && (

        <div className="card">

          <h3>الرد:</h3>

          <p>{reply}</p>

        </div>

      )}

    </div>
  );
}
