import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx"; 
import Footer from "./components/Footer/Footer.jsx"; 
import Home from "./pages/Home/Home.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

const App = () => (
  <>
  
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  <ContactUs/>
  </>
);
import Team from "./pages/Team/Team.jsx";
import Merchandise from "./pages/Merchandise/Merchandise.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Conditions from "./pages/Conditions/Conditions.jsx";
import Hero from "./components/Hero/Hero.jsx";  
import Events from "./pages/Events/Events.jsx";
import EventLists from "./pages/Events/EventLists.jsx";
import EventDetail from "./pages/Events/EventDetail.jsx";

import "./App.css";  

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const definedRoutes = ["/", "/home", "/signup", "/login", "/team", "/merchandise", "/schedule", "/terms"];
  
  const isUndefinedRoute = !definedRoutes.includes(location.pathname);
  const hideNavbar = isUndefinedRoute || location.pathname === "/login" || location.pathname === "/signup";
  const hideFooter = isUndefinedRoute; // Footer is hidden only on undefined routes

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/terms" element={<Conditions />} />
        {/* ✅ Fix: No extra `<Routes>` wrapper */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/list" element={<EventLists />} />
        <Route path="/events/:id" element={<EventDetail />} />

      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};


export default App;
