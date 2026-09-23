import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BookConsultation from "./pages/BookConsultation";
import JoinOurTeam from "./pages/JoinOurTeam";
import WhyVania from "./pages/WhyVania";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bookconsultation" element={<BookConsultation/>}/>
        <Route path="/whyania" element={<WhyVania />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/joinourteam" element={<JoinOurTeam />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;