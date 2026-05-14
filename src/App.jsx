import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Flashcard
        question="What is React?"
        answer="A JavaScript library for building UI."
      />{" "}
    </div>
  );
}

export default App;
