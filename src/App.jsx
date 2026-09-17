import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BookConsultation from "./pages/BookConsultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bookconsultation" element={<BookConsultation/>}/>

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;