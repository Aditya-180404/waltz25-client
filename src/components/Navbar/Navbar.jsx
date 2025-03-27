import React,{ useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-300/50 backdrop-blur-lg text-blue-700 shadow-lg z-50 border-b border-white/40">

        <div className="logo">
          <a href="/">
            <img src="./logo.png" alt="Logo" className="w-35 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>

        {/* Updated: Increased Font Size & Spacing */}
        <ul className="hidden md:flex space-x-20 text-4xl font-extrabold">
          {["Home", "About", "Event", "Galleries", "Sponsor Us"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-blue-800 hover:text-red-700 transition-all duration-300 ease-in-out animate-pulse"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Updated: Increased Button Spacing */}
        <div className="hidden md:flex space-x-10">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transform hover:animate-bounce hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={handleHamburgerClick}
        >
          <span className="block w-8 h-1 bg-red-900 transition-all duration-300 transform hover:shadow-cyan-400 hover:scale-110"></span>
          <span className="block w-8 h-1 bg-red-900 transition-all duration-300 transform hover:shadow-cyan-400 hover:scale-110"></span>
          <span className="block w-8 h-1 bg-red-900 transition-all duration-300 transform hover:shadow-cyan-400 hover:scale-110"></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center h-screen bg-cover bg-center bg-black bg-opacity-90 bg-[url('/phone option.png')]">
          <div className="w-full h-screen flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white font-bold bg-black bg-opacity-70 p-3 rounded-full z-50 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-cyan-400 hover:bg-white hover:text-black"
              onClick={handleCloseMenu}
            >
              ✖
            </button>

            {/* Logo */}
            <div className="absolute top-14 left-0 w-full flex justify-center items-center">
              <a href="/">
                <img src="./logo2.png" alt="Logo" className="w-32 animate-pulse" />
              </a>
            </div>

            {/* Updated: Increased Mobile Link Spacing */}
            <ul className="text-center mt-12 space-y-8 text-4xl">
              {["Home", "About", "Event", "Galleries", "Sponsor Us"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-blue-800 font-bold hover:text-cyan-400 transition-all duration-300 ease-in-out animate-pulse"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Updated: Increased Button Spacing */}
            <div className="absolute bottom-10 flex gap-24">
              <button
                className="px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-red-500"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-500"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

