import React, { useState } from 'react';
import styles from './styles.module.css';

function Navbar(): JSX.Element {
  const [isVisitorInSystem, setVisitorInSystem] = useState(false);
  const linksForGuest: string[] = ['home', 'sign in', 'sign up'];
  const linksForUser: string[] = ['home', 'new article', 'settings', 'username'];
  const getLinksForNavbar = (): string[] => (isVisitorInSystem ? linksForUser : linksForGuest);
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__links-container']}>
        {getLinksForNavbar().map((item) => (
          <li className={styles.nav__links} key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
