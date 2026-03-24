import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <span className="d">DEEP</span>
          <span className="n">NETSOFT</span>
          <div className="logo-icon">
            <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
              <polygon points="26,3 45,14 45,38 26,49 7,38 7,14" fill="none" stroke="#c9a84c" strokeWidth="2"/>
              <polygon points="26,9 38,17 38,35 26,43 14,35 14,17" fill="#c9a84c" opacity="0.15"/>
              <text x="26" y="31" textAnchor="middle" fill="#c9a84c" fontSize="16" fontWeight="bold" fontFamily="serif">D</text>
            </svg>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/create/menu" onClick={closeMenu}>Create Menu</Link></li>
          <li><Link to="/reservation" onClick={closeMenu}>Reservation</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/create/menu" onClick={closeMenu}>Create Menu</Link></li>
          <li><Link to="/reservation" onClick={closeMenu}>Make a Reservation</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};