import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeroCarousel from "./components/home/HeroCarousel";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroCarousel/>}/>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;