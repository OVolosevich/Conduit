import React from "react";
import styles from "./styles.module.css";

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <p>Loading</p>
    </div>
  );
};

export default Preloader;
