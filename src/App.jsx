import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NevBar from "./Components/NevBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      < NevBar />
      <main className="main-content">
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
              </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
