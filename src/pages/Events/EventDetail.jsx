import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const events = [
    {
      id: "1",
      title: "Rock Band Night",
      date: "April 5, 2024",
      time: "7:00 PM",
      location: "Main Stage",
      description: "A high-energy rock concert featuring top college bands.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rules: [
        "Bands must consist of 3-6 members.",
        "Only live instruments allowed.",
        "Max performance time: 15 minutes."
      ]
    },
    {
      id: "2",
      title: "Jazz Fusion Concert",
      date: "April 6, 2024",
      time: "8:00 PM",
      location: "Jazz Lounge",
      description: "A mesmerizing night of smooth and experimental jazz performances.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rules: [
        "Bands must have at least 3 members.",
        "Open to both instrumental and vocal jazz acts.",
        "Max performance time: 12 minutes."
      ]
    },
    {
      id: "3",
      title: "Electronic DJ Battle",
      date: "April 7, 2024",
      time: "9:00 PM",
      location: "Underground Club",
      description: "A thrilling DJ battle where top student DJs compete for the crown.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rules: [
        "Participants must bring their own DJ equipment.",
        "Sets should be between 10-15 minutes.",
        "No pre-recorded mixes allowed."
      ]
    },
    {
      id: "4",
      title: "Cultural Talent Showcase",
      date: "April 8, 2024",
      time: "6:00 PM",
      location: "Cultural Hall",
      description: "A celebration of diverse cultural performances including dance, drama, and music.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      rules: [
        "Solo and group performances allowed.",
        "Time limit: 10 minutes per act.",
        "Respect cultural sensitivities."
      ]
    }
  ];

  const event = events.find(event => event.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900/90" style={{
        backgroundImage: "url('https://i.imgur.com/ZJ2gHJt.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}>
        <div className="text-center text-white p-8 bg-black/50 rounded-xl">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Timeline
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative" style={{
      backgroundImage: "url('https://i.imgur.com/ZJ2gHJt.png')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center"
    }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Back button */}
      <div className="relative z-10 pt-6 px-4 sm:pt-8 sm:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-purple-300 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Timeline</span>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20">
          {/* Event image */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{event.title}</h1>
            </div>
          </div>

          {/* Event details */}
          <div className="p-6 space-y-6 text-white">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <span className="mr-2">📅</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <span className="mr-2">⏰</span>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <span className="mr-2">📍</span>
                <span>{event.location}</span>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-3 text-purple-300">About the Event</h2>
              <p className="text-white/90">{event.description}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-3 text-purple-300">Rules & Guidelines</h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span className="text-white/90">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;