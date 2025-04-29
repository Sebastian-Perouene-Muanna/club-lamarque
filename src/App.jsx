import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Inscripciones from "./pages/Inscripciones";
import Cuotas from "./pages/Cuotas";
import Tienda from "./pages/Tienda";
import Asociarme from "./pages/Asociarme";
import Perfil from "./pages/Perfil";
import RutaPrivada from "./components/RutaPrivada";
import Login from "./pages/Login";
import Disciplinas from "./pages/Disciplinas";
import Voley from "./pages/disciplinas/Voley";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router basename="/club-lamarque">
      <Navbar />
      <div className="bg-gray-50 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
          <Route path="/cuotas" element={<Cuotas />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/asociarme" element={<Asociarme />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/disciplinas/voley" element={<Voley />} />
          <Route
            path="/perfil"
            element={
              <RutaPrivada>
                <Perfil />
              </RutaPrivada>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
