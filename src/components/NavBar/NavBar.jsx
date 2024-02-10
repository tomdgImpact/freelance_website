import "./NavBar.css";
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Home from '../Presentation/Presentation'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/skills" className="nav-item">Skills</Link>
      <Link to="/project" className="nav-item">Project</Link>
      <Link to="/services" className="nav-item">Services</Link>
    </nav>
  );
}

export default NavBar;