import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import styles from './styles.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Logo />
      <Navbar />
    </div>
  </header>
);

export default Header;
