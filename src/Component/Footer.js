import React from 'react';
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <p className="text-center text-light">
        © 2023 Cheikh. Tous droits réservés.
        Designed and Developed by Cheikh
      </p>
    </div>
  );
}

export default Footer;
