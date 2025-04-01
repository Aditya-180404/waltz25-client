import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated from localStorage or session
    const user = localStorage.getItem("userLoggedIn");
    if (user === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    localStorage.setItem("userLoggedIn", "true");
    setIsAuthenticated(true);
    navigate("/login");
  };

  const handleRegister = () => {
    localStorage.setItem("userLoggedIn", "true");
    setIsAuthenticated(true);
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setIsAuthenticated(false);
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="logo">
          <a href="/">
            <img src="./logo.png" alt="Logo" className="logo-image" />
          </a>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {["Home", "About", "Event", "Galleries", "Merch", "Sponsor Us"].map(
            (item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link">
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Button Section OR User Profile */}
        <div className={`button-section ${isMobileMenuOpen ? 'hidden' : ''}`}>
          {!isAuthenticated ? (
            <>
              <button className="btn-register" onClick={handleRegister}>
                Register
              </button>
              <button className="btn-login" onClick={handleLogin}>
                Login
              </button>
            </>
          ) : (
            <div className="user-profile">
              <img
                src="./user-icon.png" // Replace with actual profile picture
                alt="User"
                className="user-icon"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              />
              {isProfileDropdownOpen && (
                <div className="profile-dropdown">
                  <Link to="/profile" className="dropdown-item">Profile</Link>
                  <button className="dropdown-item logout" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            {/* Close Button */}
            <button className="close-button" onClick={handleCloseMenu}>
              ✖
            </button>

            {/* Logo */}
            <div className="mobile-logo">
              <a href="/">
                <img src="./logo2.png" alt="Logo" className="logo-image-mobile" />
              </a>
            </div>

            {/* Mobile Links */}
            <ul className="mobile-nav-links">
              {["Home", "About", "Event", "Galleries", "Merch", "Sponsor Us"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="mobile-nav-link"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Buttons or User Profile */}
            <div className="mobile-buttons">
              {!isAuthenticated ? (
                <>
                  <button className="btn-mobile-login" onClick={handleLogin}>
                    Login
                  </button>
                  <button className="btn-mobile-register" onClick={handleRegister}>
                    Register
                  </button>
                </>
              ) : (
                <div className="mobile-user-profile">
                  <img
                    src="./Profile.png" // Replace with actual profile picture
                    alt="User"
                    className="user-icon-mobile"
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  />
                  {isProfileDropdownOpen && (
                    <div className="profile-dropdown-mobile">
                      <Link to="/profile" className="dropdown-item">Profile</Link>
                      <button className="dropdown-item logout" onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
