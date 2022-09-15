import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import "../index.css"

function Footer () {
  return (
    <footer>
      <p><FontAwesomeIcon icon={faCopyright} className="fa"></FontAwesomeIcon> La Betulia Travel</p>
    </footer>

  )
}

export default Footer;
