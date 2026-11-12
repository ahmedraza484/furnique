import AboutImg from "../../assets/about-img.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <span className="about-label">ABOUT FURNIQUE</span>

        <h1>
          Crafted for Comfort
          <br />
          Designed for Living.
        </h1>

        <p>
          At Furnique, we believe that furniture is more than just something you
          fill your home with — it's what makes a house feel like home. We bring
          together timeless design, exceptional craftsmanship, and everyday
          comfort to create furniture that reflects your lifestyle. From cozy
          sofas to elegant dining sets, every piece is thoughtfully selected to
          bring beauty, warmth, and functionality into your living space.
        </p>

        <Link to="/contact" className="about-btn">
          Contact Us
          <span> →</span>
        </Link>
      </div>

      <div className="about-img">
        <img src={AboutImg} alt="Furnique elegant living room furniture" />
      </div>
    </section>
  );
};

export default About;
