import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateRoom } from "./components/pages/CreateRoom/CreateRoom";
import PokerRoom from "./components/pages/PokerRoom/PokerRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateRoom />} />
        <Route path="/partida/:gameName" element={<PokerRoom />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
