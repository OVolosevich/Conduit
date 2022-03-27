import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar(): JSX.Element {
  const [isVisitorInSystem, setVisitorInSystem] = useState<boolean>(false);
  const linksForGuest: string[] = ['home', 'sign in', 'sign up'];
  const linksForUser: string[] = ['home', 'new article', 'settings', 'username'];
  const getLinksForNavbar = (): string[] => (isVisitorInSystem ? linksForUser : linksForGuest);
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__links-container']}>
        {getLinksForNavbar().map((item) => (
          <li key={item}>
            <NavLink className={styles.nav__link} to={item === 'home' ? '/' : item.replace(' ', '-')}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
