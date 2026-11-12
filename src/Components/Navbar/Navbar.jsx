import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" width="200" />
        </div>

        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>

        <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us" onClick={() => setMenuOpen(false)}>
              WHY CHOOSE US
            </Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1>
          Perfect Harmony
          <br />
          Comfort & Style
        </h1>

        <p>
          Discover stylish, high-quality furniture
          <br />
          that fits your lifestyle.
        </p>

        <div className="btn-div">
          <button className="btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
