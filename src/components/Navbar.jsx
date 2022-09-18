import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../index.css"
function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="/"><span className="title"> La Betulia Travel</span></a>
          </h1>
        </li>
        <li><a href="about">About</a></li>
        <li><a href="Services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://www.instagram.com/japanunedited/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="fa"></FontAwesomeIcon></a></li>
      </ul>
    </nav>
    
  )
}

export default Navbar;
