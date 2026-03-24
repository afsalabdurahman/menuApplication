import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="d">DEEP</span><span className="n">NETSOFT</span>
      </div>

      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <polygon points="26,3 45,14 45,38 26,49 7,38 7,14" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
        <polygon points="26,9 38,17 38,35 26,43 14,35 14,17" fill="#c9a84c" opacity="0.12"/>
        <text x="26" y="30" textAnchor="middle" fill="#c9a84c" fontSize="15" fontWeight="bold" fontFamily="serif">D</text>
      </svg>

      <ul className="nav-links">
        <li><a href="">Home</a></li>
        <li><Link to={"/"}>Menu</Link></li>
    
        <li><Link to={"/create/menu"} >Create Menu</Link></li>
        <li><Link to={"/reservation"}>MAKE A RESERVATION</Link></li>
        <li><Link to={"/contact"}>CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

