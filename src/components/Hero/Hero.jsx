import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Replace the h1 text with the bg1.png image */}
        <img
          src="https://i.imgur.com/ammSTGj.png"
          alt="WALTZ CULTURAL FEST"
          className="hero-logo"
        />
        <p>Groove Along!</p>
        <div className="buttons">
          <button className="view-btn">View Details</button>
          <button className="register-btn"  onClick={() => navigate("/signup")}>Register Now</button>
        </div>
      </section>

      {/* Events Section */}
      <section className="events">
  <h2>EVENTS THAT BROUGHT US TOGETHER</h2>
  <div className="event-gallery">
    <div className="event">
      <img src="your-image-link-1.jpg" alt="Event 1" />
    </div>
    <div className="event">
      <img src="your-image-link-2.jpg" alt="Event 2" />
    </div>
    <div className="event">
      <img src="your-image-link-3.jpg" alt="Event 3" />
    </div>
    <div className="event">
      <img src="your-image-link-4.jpg" alt="Event 4" />
    </div>
    <div className="event">
      <img src="your-image-link-5.jpg" alt="Event 5" />
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="about">
        <h2>ABOUT US</h2>
        <div className="about-content">
          <div className="about-box">
            <h3>WALTZ 2K25</h3>
            <p>Experience the vibrant spirit of UIT BU's Cultural Fest 2025 – a celebration of music, dance, and creativity! Join us for an unforgettable fusion of talent, tradition, and innovation.</p>
          </div>
          <div className="about-box">
            <h3>UIT BURDWAN</h3>
            <p>UIT is a top engineering college with quality education,excellent infrastructure,experienced faculty,and a dynamic sudent community that promotes extracurricular acivities and hosts various events.</p>
          </div>
        </div>
      </section>

{/* Sponsors Section */}
      <section className="sponsors">
  <h2>SPONSORS</h2>
  <p className="sponsor-text">
    Their support has been invaluable in making Waltz 2k25 possible
  </p>
  <div className="sponsor-grid">
    {/* Sponsor 1 */}
    <div className="sponsor-container">
      <img src="your-google-developers-logo.jpg" alt="Google Developers" />
      <p>Powered By</p>
    </div>
    {/* Sponsor 2 */}
    <div className="sponsor-container">
      <img src="your-bank-of-baroda-logo.jpg" alt="Bank of Baroda" />
      <p>Presented By</p>
    </div>
    {/* Sponsor 3 */}
    <div className="sponsor-container">
      <img src="sponsor3.png" alt="Sponsor 3" />
      <p>Sponsor 3 Description</p>
    </div>
    {/* Sponsor 4 */}
    <div className="sponsor-container">
      <img src="sponsor4.png" alt="Sponsor 4" />
      <p>Sponsor 4 Description</p>
    </div>
    {/* Sponsor 5 */}
    <div className="sponsor-container">
      <img src="sponsor5.png" alt="Sponsor 5" />
      <p>Sponsor 5 Description</p>
    </div>
    {/* Sponsor 6 */}
    <div className="sponsor-container">
      <img src="sponsor6.png" alt="Sponsor 6" />
      <p>Sponsor 6 Description</p>
    </div>
  </div>
  <button className="sponsor-btn">Support Us</button>
</section>


    </div>
  );
};

export default Hero;
