"use client";

import { useState } from "react";

type ChatBotProps = {
  subject: string;
  grade: string;
};

export default function ChatBot({ subject, grade }: ChatBotProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askBot() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, subject, grade }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border rounded-lg p-3"
        rows={4}
        placeholder={`Ask a ${grade} ${subject} question`}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askBot}
        className="bg-black text-white px-6 py-2 rounded-lg"
      >
        Ask
      </button>

      {answer && (
        <div className="border rounded-lg p-4 bg-gray-50">
          {answer}
        </div>
      )}
    </div>
  );
}
