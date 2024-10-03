import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateRoom } from "./components/pages/CreateRoom/CreateRoom";
import Header from "./components/molecules/Header/Header";

function App() {
  return (
    <Router>
      <Header logoLabel="Crear partida" />
      <Routes>
        <Route path="/" element={<CreateRoom />} />
        <Route path="/partida/:nombre" element={<></>} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
