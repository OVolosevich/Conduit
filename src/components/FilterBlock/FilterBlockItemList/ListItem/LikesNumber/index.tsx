import React from 'react';
import styles from './styles.module.css';

interface LikesNumberProps {
  likesNumber: number
}

const LikesNumber: React.FC<LikesNumberProps> = (props) => {
  const { likesNumber } = props;
  return (
    <div className={styles['list-item__likes-number-container']}>
      <i className={`${styles['list-item__likes-icon']} icon-heart`} />
      <span className="list-item__likes-number">{likesNumber}</span>
    </div>
  );
};

export default LikesNumber;
