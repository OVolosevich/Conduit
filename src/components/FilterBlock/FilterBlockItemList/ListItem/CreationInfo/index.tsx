import React from 'react';
import { CreationInfo } from '../../../data';
import styles from './styles.module.css';

interface CreationInfoProps {
  creationInfo: CreationInfo
}

const CreationInfo: React.FC<CreationInfoProps> = (props) => {
  const { author, authorAvatarUrl, date } = props.creationInfo;
  return (
    <div className={styles['creation-info']}>
      <img
        className={styles['creation-info__avatar']}
        alt="autor avatar"
        width="30px"
        height="30px"
        src={authorAvatarUrl}
      />
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
};

export default CreationInfo;
