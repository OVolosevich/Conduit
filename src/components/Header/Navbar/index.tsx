import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { unregisteredGuestData } from '../../../variables';

function Navbar(): JSX.Element {
  const { navbarLinks } = unregisteredGuestData;
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__links-container']}>
        {navbarLinks.map((item) => (
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
