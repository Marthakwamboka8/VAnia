import "./Footer.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Logo />
            <p>
              Virtual Assistance With Purpose.
              Connecting businesses with skilled virtual assistants through
              a professional and secure collaboration platform.
            </p>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <a href="/">Home</a>
            <a href="/">Find Assistants</a>
            <a href="/">Services</a>
            <a href="/">About</a>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <a href="/">Help Centre</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <p>Nairobi, Kenya</p>
            <p>chistantusayora@gmail.com</p>
            <p>+254 799438280</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 VAnia. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;