import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/bookconsultation">Book Consultation</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button type="button" className="btn-outline">
            join our team
          </button>

          <Link to="/bookconsultation" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/bookconsultation"
          onClick={() => setMenuOpen(false)}
        >
          Book Consultation
        </Link>

        <Link
          to="/services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <button type="button" className="btn-outline">
          join our team
        </button>

        <Link
          to="/bookconsultation"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Link>

      </div>
    </header>
  );
};

export default Navbar;