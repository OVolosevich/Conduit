import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import styles from './styles.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Logo />
    <Navbar />
  </header>
);

export default Header;
