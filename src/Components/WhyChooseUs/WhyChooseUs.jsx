import { FaGem, FaTruck, FaCouch, FaShieldAlt } from "react-icons/fa";
import whyImg from "../../assets/why-img.png";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGem />,
      title: "Premium Quality",
      description:
        "Crafted with carefully selected materials for lasting beauty and durability.",
    },
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      description:
        "Enjoy hassle-free delivery and get your favorite furniture at your doorstep.",
    },
    {
      icon: <FaCouch />,
      title: "Ultimate Comfort",
      description:
        "Thoughtfully designed furniture that brings comfort and elegance to your home.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payments",
      description:
        "Shop with confidence using our safe and reliable payment methods.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-heading">
          <span className="why-choose-subtitle">WHY FURNIQUE</span>

          <h2>
            Why Choose <span>Us?</span>
          </h2>

          <p>
            At Furnique, we go beyond furniture — we deliver a better living
            experience. Discover what makes us special.
          </p>
        </div>

        <div className="why-choose-features">
          {features.map((feature, index) => (
            <div className="why-choose-card" key={index}>
              <div className="why-choose-icon">{feature.icon}</div>

              <h3 className="why-choose-title">{feature.title}</h3>

              <p className="why-choose-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-choose-image">
          <img src={whyImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
