import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
function App() {
  return (
    <div>
      <Flashcard cards={cards} />
    </div>
  );
}

export default App;
