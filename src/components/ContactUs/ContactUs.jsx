import React from "react";
import "../Hero/Hero.css"

const ContactUs = () => {
  return (
    <section className="contact">
      <h2>CONTACT US</h2>
      <div className="contact-details">
        {/* Left Side: Email and Phone */}
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope icon"></i> <strong>Email Us on:</strong>
          </p>
          <p>
            <i className="fas fa-envelope icon"></i>{" "}
            <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-envelope icon"></i>{" "}
            <a href="mailto:uriet@gmail.com">uriet@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone icon"></i> <strong>Call us on:</strong>
          </p>
          <p>
            <i className="fas fa-phone icon"></i> +91-294259526
          </p>
          <p>
            <i className="fas fa-phone icon"></i> +91-985858536
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message"></textarea>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
