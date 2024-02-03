import "./NavBar.css";
import logo from '../../assets/images/logo.png';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;