import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/assistants">Find Assistants</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="nav-actions">
          <button className="btn-outline">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/assistants" onClick={() => setMenuOpen(false)}>Find Assistants</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

        <button className="btn-outline">Sign In</button>
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;