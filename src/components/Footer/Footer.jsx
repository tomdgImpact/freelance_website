import './Footer.css'; // Ensure to create this CSS file for styling
import logo from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import discord from '../../assets/images/discorde.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact</h3>
        <p>What would you do if you had a software expert available at your fingertips ?
            Want to start new project ? Or just say hey. reach me at :
        </p>
        <ul>
          <li>Email: tom.durand-gasselin@outlook.com</li>
          <li>
            <img src={logo} alt='Linkedin' className='social-icon' />
            <a href="https://www.linkedin.com/in/tom-durand-gasselin/">Tom Durand-Gasselin</a></li>
          <li>
            <img src={github} alt='github' className='social-icon' />
            <a href="https://github.com/tomdgImpact/">tomdgImpact</a>
          </li>
          <li>
            <img src={discord} alt='Discord' className='social-icon' />
            ImpactSec#2523
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
