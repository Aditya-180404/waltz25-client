import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
        <div className="logo">
          <a href="/">
            <img src="./logo.png" alt="Logo" className="w-20" />
          </a>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          {["Home", "About", "Event", "Galleries", "News", "Sponsor Us"].map(
            (item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-cyan-400 transition-all duration-300 ease-in-out animate-pulse">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex space-x-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
          <button
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-col space-y-1 cursor-pointer" onClick={handleHamburgerClick}>
          <span className="block w-8 h-1 bg-white animate-pulse"></span>
          <span className="block w-8 h-1 bg-white animate-pulse"></span>
          <span className="block w-8 h-1 bg-white animate-pulse"></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center h-screen bg-cover bg-center bg-black bg-opacity-90">
          <div className="w-full h-screen flex flex-col items-center justify-center">
            {/* Close Button */}
            <button className="absolute top-5 right-5 text-white font-bold bg-black bg-opacity-70 p-3 rounded-full z-50 transition-all duration-300 hover:bg-white hover:text-black"
              onClick={handleCloseMenu}
            >
              ✖
            </button>

            {/* Logo */}
            <div className="absolute top-5 left-5 w-full flex justify-center items-center">
              <a href="/">
                <img src="./logo2.png" alt="Logo" className="w-32" />
              </a>
            </div>

            {/* Menu Links */}
            <ul className="text-center mt-20 space-y-6">
              {["Home", "About", "Event", "Galleries", "News", "Sponsor Us"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white text-2xl font-bold inline-block transition-all duration-300 hover:animate-bounce hover:text-cyan-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Authentication Buttons */}
            <div className="absolute bottom-10 flex gap-6">
              <button
                className="px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-lg shadow-lg transition-all duration-300 hover:animate-bounce hover:shadow-red-500"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:animate-bounce hover:shadow-blue-500"
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
