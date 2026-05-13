import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
function App() {
  return (
    <div>
      <Flashcard cards={cards} />
    </div>
  );
}

import Header from "./components/Header";

function App() {
  return (
    <div id="app">
      <Header />
    </div>
  );
}
export default App;
