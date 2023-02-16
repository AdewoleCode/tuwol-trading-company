import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Gallery from "../src/components/gallery/Gallery"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
