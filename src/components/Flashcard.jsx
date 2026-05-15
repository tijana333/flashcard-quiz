import { useState } from "react";
import "./flashcard.css";

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);
  console.log(question, answer);

  return (
    <div className={`card-wrap ${flipped ? "flipped" : ""}`}>
      <div className="card-inner" onClick={() => setFlipped((f) => !f)}>
        {/* FRONT */}
        <div className="card-face card-front">
          <div className="card-eyebrow">Question</div>
          <div className="card-text">{question}</div>
        </div>

        {/* BACK */}
        <div className="card-face card-back">
          <div className="card-eyebrow">Answer</div>
          <div className="card-text">{answer}</div>
        </div>
      </div>
    </div>
  );
}
