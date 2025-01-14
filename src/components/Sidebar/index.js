import './index.scss';
import { Link, NavLink } from 'react-router-dom';

import LogoTitle from '../../assets/images/logo-s.png';
import LogoSubTitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';
//import { Outlet } from 'react-router-dom';

const Sidebar = () => (

    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoTitle} alt="logo" />
            <img className="sub-logo" src={LogoSubTitle} alt="ike" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ikeigboebisi"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ikeigbo"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/igboebisi/"
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="skype:ike.igboebisi?chat"
                >
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar