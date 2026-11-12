import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4 className="footer-logo">
              FURNIQUE<span>.</span>
            </h4>
            <p className="footer-description">
              Crafted for comfort, designed for living. Discover timeless
              furniture that makes every space feel like home.
            </p>

            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <p className="footer-text">Stay connected with Furnique.</p>

            <div className="footer-socials">
              <Link
                to="https://github.com/ahmedraza484/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>

              <Link
                to="https://www.linkedin.com/in/ahmedrazajpg/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>CONTACT US</h4>

            <div className="contact-link">
              <span>EMAIL</span>
              <Link to="mailto:ahmedraza.jpg@gmail.com" target="_blank">
                ahmedraza.jpg@gmail.com
              </Link>
            </div>

            <div className="contact-link">
              <span>PHONE</span>
              <Link to="tel:+923248817986">+92 324 8817986</Link>
            </div>

            <div className="contact-link">
              <span>LOCATION</span>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Furnique. All Rights Reserved.</p>
          <p>Made with care for beautiful homes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
