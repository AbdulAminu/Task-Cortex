import { useState } from "react";
import lg from "../assets/lg.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="Log">
        <img src={lg} alt="Company logo" className="imgA" />
        <h1 className="heading">Task Cortex</h1>
      </div>

      <div 
        className={`menu ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`NavLst ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/AboutThisProject" onClick={() => setMenuOpen(false)}>About This project</NavLink></li>
        <li><NavLink to="/contactInfo" onClick={() => setMenuOpen(false)}>Contact info</NavLink></li>
      </ul>
    </nav>
  );
}