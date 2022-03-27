import React from 'react';
import styles from './styles.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      className={styles.footer__link}
      href="https://github.com/OVolosevich/Conduit"
    >
      <i className={`icon-github ${styles.footer__icon}`} />
      GitHub
    </a>
  </footer>
);

export default Footer;
