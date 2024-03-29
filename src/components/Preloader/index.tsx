import React from 'react';
import styles from './styles.module.css';

const Preloader: React.FC = () => (
  <div data-testid="preloader" className={styles.preloader}>
    <p>Loading</p>
  </div>
);

export default Preloader;
