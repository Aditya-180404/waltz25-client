
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function ContactUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="contact-us"
      className="min-h-screen bg-black text-white font-orbitron p-6 md:p-12 lg:p-16 bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('public/bgpic.png')" }}
    >
      <h1
        className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-center tracking-widest drop-shadow-lg  font-['Pacifico',cursive] ${animate ? 'animate-slide-down' : ''}`}
      >
        CONTACT <span className="ml-2">US</span> 
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl mt-10 md:mt-14 lg:mt-20 gap-12 md:gap-16 lg:gap-20">
        {/* Contact Form (Above Contact Info for Mobile & Tablet) */}
        <div className={`w-full lg:w-3/5 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-xl shadow-lg shadow-violet-600/50 order-1 lg:order-2 ${animate ? 'animate-slide-right' : ''}`}>
          <form className="flex flex-col space-y-3">
            <label className="text-sm md:text-md text-violet-400" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full border border-violet-600 bg-transparent text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-violet-600 transition-all hover:scale-105"
            />

            <label className="text-sm md:text-md text-violet-400" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full border border-violet-600 bg-transparent text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-violet-600 transition-all hover:scale-105"
            />

            <label className="text-sm md:text-md text-violet-400" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="2"
              placeholder="Enter your message"
              className="w-full border border-violet-600 bg-transparent text-white rounded-md p-2 text-sm focus:ring-2 focus:ring-violet-600 transition-all hover:scale-105"
            ></textarea>

            <button
              type="submit"
              className={`w-full md:w-40 h-10 text-md font-bold border border-violet-600 bg-violet-600 text-white rounded-md transition-all hover:bg-transparent hover:text-violet-300 hover:scale-110 shadow-md shadow-violet-600/50 mt-1 ${animate ? 'animate-bounce' : ''}`}
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Information (Centered for Mobile & Tablet, Left-aligned for Desktop) */}
        <div className={`w-full lg:w-2/5 text-center lg:text-left order-2 lg:order-1 ${animate ? 'animate-slide-left' : ''}`}>
          <div className="mb-10 md:mb-14">
            <h3 className="text-3xl md:text-4xl text-white drop-shadow-md">Email&nbsp;&nbsp;Us&nbsp;&nbsp;on:</h3>
            <ul className="text-md md:text-lg space-y-4 mt-4 tracking-wider">
              <li className="flex items-center gap-3 justify-center lg:justify-start transition-all duration-300 hover:text-yellow-400 hover:scale-105">
                <FaEnvelope /> waltz.uit.bu.2025.tech@gmail.com
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start transition-all duration-300 hover:text-yellow-400 hover:scale-105">
                <FaEnvelope /> admin@waltzuit.in
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl text-white drop-shadow-md">Call&nbsp;&nbsp;Us&nbsp;&nbsp;on:</h3>
            <ul className="text-md md:text-lg space-y-4 mt-4 tracking-wider">
              <li className="flex items-center gap-3 justify-center lg:justify-start transition-all duration-300 hover:text-yellow-400 hover:scale-105">
                <FaPhone /> +91&nbsp;7407788005
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start transition-all duration-300 hover:text-yellow-400 hover:scale-105">
                <FaPhone /> +91&nbsp;9123699383
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
