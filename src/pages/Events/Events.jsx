import React, { useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay for better text readability */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/ZJ2gHJt.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }} 
      />
      
      {/* Content container with proper spacing for navbar/footer */}
      <div className="container mx-auto px-4 py-32 md:py-40 lg:py-48">
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[50vh]">
          {/* Animated heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to Our <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Exciting Events!</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore thrilling competitions, performances, and activities that will make unforgettable memories.
          </p>
          
          {/* Enhanced button with hover and click animations */}
          <Link 
            to="/events/list"
            className={`relative overflow-hidden inline-flex items-center justify-center 
                        bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800
                        text-white text-lg font-semibold py-4 px-8 rounded-xl 
                        transition-all duration-300 transform hover:scale-105 
                        shadow-lg hover:shadow-xl active:scale-95
                        group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Button shine effect on hover */}
            <span className={`absolute inset-0 bg-white opacity-10 ${isHovered ? 'animate-button-shine' : 'hidden'}`}></span>
            
            {/* Button content with animated icon */}
            <span className="relative z-10 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2 group-hover:animate-bounce"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" 
                />
              </svg>
              View Event List
            </span>
            
            {/* Ripple effect for clicks */}
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 group-active:animate-ripple"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;