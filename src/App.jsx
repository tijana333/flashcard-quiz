import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [currentCard, setCurrentCard] = useState(0);

  function nextCard() {
    if (currentCard === cards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  }
  return (
    <div onClick={nextCard}>
      <h1>{cards[currentCard].question}</h1>
    </div>
  );
}

export default App;
