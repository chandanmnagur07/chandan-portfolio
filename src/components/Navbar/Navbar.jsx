import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <header className="site-header">
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">CMN</div>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="nav-buttons">

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            &#9776;
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;