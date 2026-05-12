import Flashcard from "./components/Flashcard";
import cards from "./cards";
function App() {
  return (
    <div>
      <Flashcard cards={cards} />
    </div>
  );
}

export default App;
