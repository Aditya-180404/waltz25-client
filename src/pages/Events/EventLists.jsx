import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: 'Rock Band Night',
    date: 'April 5, 2024 • Sign in 5:30pm',
    category: 'Music',
    year: '2024'
  },
  {
    id: 2,
    title: 'Jazz Fusion Concert',
    date: 'April 6, 2024 • Sign in 6:00pm',
    category: 'Music',
    year: '2024'
  },
  {
    id: 3,
    title: 'Electronic DJ Battle',
    date: 'April 7, 2024 • Sign in 7:30pm',
    category: 'Music',
    year: '2024'
  },
  {
    id: 4,
    title: 'Cultural Talent Showcase',
    date: 'April 8, 2024 • Sign in 5:00pm',
    category: 'Cultural',
    year: '2024'
  }
];

const EventTimeline = () => {
  return (
    <div className="min-h-screen relative text-white flex flex-col items-center py-10 px-4">
      {/* Background image with overlay */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="https://i.imgur.com/ZJ2gHJt.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Stylish Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Upcoming Events
          </span>
        </h1>
        <p className="text-lg md:text-xl text-purple-100/80">
          Explore our exciting lineup of musical and cultural events
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line - Responsive */}
        <div className="absolute left-1/2 w-0.5 md:w-1 bg-purple-500/30 h-full transform -translate-x-1/2"></div>
        
        {events.map((event, index) => (
          <div 
            key={event.id} 
            className={`flex flex-row items-center mb-16 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            {/* Event Card */}
            <div className={`w-1/2 px-6 flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full border border-gray-700/50">
                <h2 className="text-xl font-bold text-purple-300">{event.year}</h2>
                <h3 className="text-base font-semibold text-white mt-1">{event.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{event.date}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400">{event.category}</span>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center"
                  >
                    View <span className="hidden sm:inline">Details</span> →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Circle Marker */}
            <div className="relative flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
            
            {/* Spacer */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;