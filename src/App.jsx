// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

// Import halaman yang baru dibuat
import Home from "./pages/Home";
import About from "./pages/About";
import Kegiatan from "./pages/Kegiatan";
import Pengurus from "./pages/Pengurus";
import News from "./pages/News";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/pengurus" element={<Pengurus />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
