import React from 'react';
import styles from './styles.module.css';

interface LikesNumberProps {
  likesNumber: number
}

const LikesNumber: React.FC<LikesNumberProps> = (props) => (
  <div className="list-item__likes-number-container">
    <i className="icon-heart" />
    <span className="list-item__likes-number">{props.likesNumber}</span>
  </div>
);

export default LikesNumber;
