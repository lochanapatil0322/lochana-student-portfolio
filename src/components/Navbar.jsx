import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">LP<span>.</span></NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
