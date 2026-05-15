import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  function nextCard() {
    if (currentCard === cards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  }

  function prevCard() {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  }
  return (
    <div className="flash-card">
      <Flashcard
        question={cards[currentCard].question}
        answer={cards[currentCard].answer}
        flipped={flipped}
        setFlipped={setFlipped}
      />
      <button onClick={prevCard} disabled={currentCard === 0}>
        Prev
      </button>
      <p>
        {currentCard + 1} / {cards.length}
      </p>
      <button onClick={nextCard} disabled={currentCard === cards.length - 1}>
        Next
      </button>
    </div>
  );
}

export default App;
