import "./Footer.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/vania.assist?stkn=NnI0am9sc3AzMzc%3D&utm_source=qr",
      icon: <FaInstagram />,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@vania.assist?_r=1&_t=ZS-99hV7G9vMRh",
      icon: <FaTiktok />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/vania-assist/",
      icon: <FaLinkedinIn />,
    },
    {
      name: "X",
      url: "https://x.com/vaniaassist?s=11",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1KuMhVp24N/?mibextid=wwXIfr",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand section */}
          <div className="footer-brand">
            <Logo />

            <p>
              Virtual Assistance With Purpose. Connecting businesses with
              skilled Kenyan virtual assistants through a professional and
              secure collaboration platform.
            </p>
          </div>

          {/* Platform links */}
          <div className="footer-links">
            <h4>Platform</h4>

            <Link to="/">Home</Link>
            <Link to="/book-consultation">Book Consultation</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
          </div>

          {/* Contact and social links */}
          <div className="footer-contact">
            <h4>Contact</h4>

            <p>Nairobi, Kenya</p>

            <a href="mailto:info@vaniaassist.com">
              info@vaniaassist.com
            </a>

            <a href="mailto:hello@vaniaassist.com">
              hello@vaniaassist.com
            </a>

            <h4 className="social-heading">Follow VAnia</h4>

            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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