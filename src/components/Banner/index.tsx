import React from 'react';
import styles from './styles.module.css';

const Banner: React.FC = () => (
  <div className={styles.banner}>
    <h1 className={styles.header}>Conduit</h1>
    <p className={styles.banner__moto}>A place to share your knowledge.</p>
  </div>
);

export default Banner;
