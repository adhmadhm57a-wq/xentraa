import { useState } from "react";

export default function AIChat() {

  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const send = () => {

    if (
      message.includes("html")
    ) {

      setReply(
        "HTML هي لغة بناء صفحات الويب"
      );

    } else {

      setReply(
        "AI Xentra جاهز لمساعدتك"
      );

    }
  };

  return (

    <div className="container">

      <h1>
        AI Chat
      </h1>

      <input
        placeholder="اكتب رسالتك"
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button onClick={send}>
        إرسال
      </button>

      <div className="card">

        <p>
          {reply}
        </p>

      </div>

    </div>
  );
}
