import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faEnvelope, faUser, faComment, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import ToggleSwitch from './ToggleSwitch';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-light bg-light ${styles.container}`}>
      <div className="container-fluid">
        <Link to="/" className={`navbar-brand ${styles.logo}`}>
          Mon Portfolio
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className={`navbar-nav ${styles.menu}`}>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/projets" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faProjectDiagram} /> Projets
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/testimonial" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faComment} /> Testimonial
              </Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link to="/contact" className={`nav-link ${styles.item} ms-3`} onClick={handleMenuToggle}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
            <li style={{marginTop:'6px',marginLeft:'50px'}}>
                <ToggleSwitch/>
             
            </li>
          </ul>

          
        </div>
      </div>
    </nav>
  );
}

export default Header;