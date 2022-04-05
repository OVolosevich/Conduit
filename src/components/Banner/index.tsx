import React from 'react';
import styles from './styles.module.css';

const Banner: React.FC = () => (
  <div data-testid="banner" className={styles.banner}>
    <h1 title="Conduit logo" className={styles.header}>
      <span className={styles['header__red-letter']}>C</span>
      <span className={styles['header__orange-letter']}>o</span>
      <span className={styles['header__yellow-letter']}>n</span>
      <span className={styles['header__green-letter']}>d</span>
      <span className={styles['header__blue-letter']}>u</span>
      <span className={styles['header__dark-blue-letter']}>i</span>
      <span className={styles['header__purple-letter']}>t</span>
    </h1>
    <p data-testid="conduit-moto" className={styles.banner__moto}>A place to share your knowledge.</p>
  </div>
);

export default Banner;
