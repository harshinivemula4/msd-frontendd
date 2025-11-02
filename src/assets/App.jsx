import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Contact from "./Contact";
import Registrations from "./Registrations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
