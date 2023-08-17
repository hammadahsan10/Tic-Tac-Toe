import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from "./TicTacToe/TicTacToe";

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<TicTacToe/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
